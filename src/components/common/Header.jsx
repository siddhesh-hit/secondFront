import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  NavDropdown,
  Nav,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.png";

import { logout } from "../../redux/reducers/userReducer";
import { decrypt } from "../../utils/encrypt";
import { postApi, getApi, getApiById } from "../../services/axiosInterceptors";
import useLang from "../../hooks/useLang";
import { home, header } from "../../data/constant";

const Header = () => {
  const [notification, setNotification] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [search, setSearch] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const { lang, checkLang } = useLang();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const location = useLocation().pathname;
  const handleLanguage = (newLang) => {
    window.localStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange"));
  };



  const handleLogout = async () => {
    await postApi("user/logout", {})
      .then((res) => {
        if (res.data.success) {
          logout();
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };
  const fetchData = async (id) => {
    await getApiById("notification", id)
      .then((res) => setNotification([...res.data.data.user_specific, ...res.data.data.global]))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setUserInfo(JSON.parse(decrypt(user)));
    }
  }, []);
  useEffect(() => {
    userInfo.notificationId && fetchData(userInfo.notificationId);
  }, [userInfo])
  console.log("notification", notification)
  return (
    <div>
      <div
        className={`${location === "/"
          ? "blueColor topheader"
          : location === "/Homepage2"
            ? "otherColor"
            : location === "/Homepage1"
              ? "newheadercolor"
              : location === "/Debate"
                ? "topheader"
                : location === "/DebateDetail"
                  ? "newheadercolor"
                  : "topheader"
          }`}
      >
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className="topheaderright">

                {/* Icon */}


                {/* Notifications */}
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link" onMouseEnter={() => setNotificationOpen(!notificationOpen)} data-toggle="dropdown" href="#">
                      <i className="far fa-bell"></i>
                      <span className="badge badge-warning navbar-badge" >{notification.length}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right notouifi" style={{ maxWidth: '100%', minWidth: '300px', background: 'white' }}>

                      <a href="#" className="dropdown-item">
                        {
                          notification.length > 0 &&
                          notification.map((item, index, array) => (
                            <React.Fragment key={index}>
                              <i className="fas fa-envelope mr-2"></i>  {item[checkLang]["message"]}
                              <span className="float-right text-muted text-sm">3 mins</span>
                            </React.Fragment>
                          ))}

                      </a>
                    </div>
                  </li>
                </ul>
                {/* End  Notifications */}

                <div className="contact-us">
                  <Link to="/ContactUs">
                    <span>{header[checkLang].contact}</span>
                  </Link>
                </div>
                <Dropdown className="languagechanges">
                  <Dropdown.Toggle>{header[checkLang].language}</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleLanguage("mr")}
                      href="#"
                    >
                      मराठी
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleLanguage("en")}
                      href="#"
                    >
                      English
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="font-size">
                  <button className="font-size-button">अ+</button>
                  <button
                    className="font-size-button"
                    style={{
                      borderLeft: "solid #121f29 2px",
                      borderRight: "solid #121f29 2px",
                    }}
                  >
                    अ
                  </button>
                  <button className="font-size-button">अ-</button>
                </div>
                <a href="/Login">
                  {isAuthenticated ? (
                    <button onClick={handleLogout}>साइन आउट करा</button>
                  ) : (
                    <span>{header[checkLang].login}</span>
                  )}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {location === "/" ||
        location === "/Homepage1" ||
        location === "/Homepage2" ? (
        <div className="headerlogos">
          <Container fluid>
            <Row className="midhead one">
              <Col lg={4}>
                <Nav.Link href="/">
                  <img src={logo} alt="logo" className="loginbg" />
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <>
          <div className="headerlogos">
            <Container fluid>
              <Row className="midhead two">
                <Col lg={4}>
                  <Nav.Link href="/">
                    <img src={logo} alt="logo" className="loginbg" />
                  </Nav.Link>
                </Col>
                <Col lg={4}>
                  <div className="search-home">
                    <form>
                      <input
                        type="search"
                        placeholder={home[checkLang].searchPlaceHolder}
                        className="form-control"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <Link to={`/SearchDetails?id=${search}`}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
            {["sm"].map((expand) => (
              <Navbar key={expand} expand={expand}>
                <Container fluid>
                  <div>
                    <Link to="/">
                      <img src={logo} alt="logo" className="headerlogo" />
                    </Link>
                  </div>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        <Link to="/">
                          <img
                            src={logo}
                            alt="logo"
                            className="headerlogo w-100"
                          />
                        </Link>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end  flex-grow-1 pe-5">
                        <NavDropdown
                          title="विधिमंडळ  "
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="#action4">
                            राज्यपाल
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action5">
                            विधानपरिषद
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action5">
                            विधानसभा
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action5">
                            विधानमंडळ सचिव
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action5">
                            मंत्रीमंडळ
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action5">
                            विधानमंडळ ग्रंथालय
                          </NavDropdown.Item>
                        </NavDropdown>
                        <div>
                          <Link className="nav-link" to="/">
                            {header[checkLang].member}
                          </Link>
                        </div>
                        <Nav.Link
                          className={`${location === "/Debate" ? "active" : ""
                            }`}
                          href="/Debate"
                        >
                          {header[checkLang].Debate}
                        </Nav.Link>
                        <Nav.Link href="#action2">{header[checkLang].Legislation}</Nav.Link>
                        <Nav.Link href="#action2">{header[checkLang].Budget} </Nav.Link>
                        <div>
                          <Link className="nav-link" to="/Library">
                            {header[checkLang].Elections}
                          </Link>
                        </div>
                        <div>
                          <Link className="nav-link" to="/Library">
                            {header[checkLang].Gazette}
                          </Link>
                        </div>
                        <NavDropdown
                          title="विविध "
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="#action4">
                            गॅलरी
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action5">
                            महत्वाचा सूचना
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
