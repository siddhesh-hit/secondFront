import { useEffect, useState } from "react";
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
import { postApi } from "../../services/axiosInterceptors";
import useLang from "../../hooks/useLang";
import { home, header } from "../../data/constant";

const Header = () => {
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

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setUserInfo(JSON.parse(decrypt(user)));
    }
  }, []);
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
                        <div>
                          <Link className="nav-link" to="/">
                            सदस्य
                          </Link>
                        </div>
                        <Nav.Link
                          className={`${location === "/Debate" ? "active" : ""
                            }`}
                          href="/Debate"
                        >
                          सभागृहांचे कार्यवृत्त
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
