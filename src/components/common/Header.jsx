import { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  NavDropdown,
  Nav,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

import logo from "../../assets/logo.png";

import { logout } from "../../redux/reducers/userReducer";
import { decrypt } from "../../utils/encrypt";
import { postApi, getApiById, ImageUrl } from "../../services/axiosInterceptors";
import useLang from "../../hooks/useLang";
import { home, header } from "../../data/constant";

const Header = () => {
  const [text, setText] = useState("");
  const [notification, setNotification] = useState([]);
  const [search, setSearch] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  const { lang, checkLang } = useLang();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const handleLanguage = (newLang) => {

    window.sessionStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange"));
  };


  const affectedElementsSelector = "p, h1, h2, h3, h4, h5, h6, span, a, button";

  const [fontSize, setFontSize] = useState();

  const storeOriginalSizes = () => {
    const affectedElements = document.querySelectorAll(affectedElementsSelector);
    affectedElements.forEach((element) => {
      element.dataset.origSize = window.getComputedStyle(element).fontSize;
    });
  };

  useEffect(() => {
    storeOriginalSizes();
  }, []);

  const changeFontSize = (direction) => {
    setFontSize(fontSize + direction);

    const affectedElements = document.querySelectorAll(affectedElementsSelector);
    affectedElements.forEach((element) => {
      const currentSize = parseFloat(element.dataset.origSize) + direction;
      element.style.fontSize = `${currentSize}px`;
    });
  };

  const resetFontSize = () => {
    setFontSize(0);
    const affectedElements = document.querySelectorAll(affectedElementsSelector);
    affectedElements.forEach((element) => {
      element.style.fontSize = element.dataset.origSize;
    });
  };


  const handleLogout = async () => {
    await postApi("user/logout", {})
      .then((res) => {
        if (res.data.success) {
          dispatch(logout());
          window.location.href = "/Login";
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const fetchData = async (id) => {
    await getApiById("notification", id)
      .then((res) => setNotification([...res.data.data.global]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setUserInfo(JSON.parse(decrypt(user)));
    }
  }, []);

  // console.log(userInfo)
  useEffect(() => {
    userInfo.notificationId && fetchData(userInfo.notificationId);
  }, [userInfo]);

  return (
    <div>
      <div id="toplocation"
        className="blueColor topheader"
      >
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className="topheaderright">
                {isAuthenticated && (
                  <Dropdown className="languagechanges">
                    <Dropdown.Toggle>
                      <i className="fa fa-bell"></i>
                      <span className="badge badge-warning navbar-badge">
                        {notification.length}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {notification.length > 0 &&
                        notification.map((item, index) => (
                          <Dropdown.Item key={index} href="#">
                            {item[checkLang]["message"]}
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                <div className="contact-us">
                  <Link to="/ContactUs">
                    <span>{header[checkLang].contact}</span>
                  </Link>
                </div>

                <button
                  className="languagechanges mx-2"
                  onClick={() => handleLanguage(lang === "mr" ? "en" : "mr")}
                >
                  {header[checkLang].language}
                </button>

                <div className="font-size">
                  <button className="font-size-button" onClick={() => changeFontSize(2)}>{header[checkLang].font}+</button>
                  <button onClick={resetFontSize}
                    className="font-size-button"
                    style={{
                      borderLeft: "solid #121f29 2px",
                      borderRight: "solid #121f29 2px",
                    }}
                  >
                    {header[checkLang].font}
                  </button>
                  <button className="font-size-button" onClick={() => changeFontSize(-2)}>{header[checkLang].font}-</button>
                </div>
                {isAuthenticated ? (
                  <DropdownButton id="dropdown-basic-button" title={<><img src={ImageUrl + userInfo?.user_image?.["destination"] + "/" + userInfo?.user_image?.["filename"]} className="user-profile-image" /> {userInfo?.full_name}</>}>
                    <Dropdown.Item href="/Userprofile">My Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
                  </DropdownButton>
                ) : (
                  <a href="/Login">{header[checkLang].login}</a>
                )}
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
                  <img src={header[checkLang].logo} alt="logo" className="loginbg" />
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
                    <img src={header[checkLang].logo} alt="logo" className="loginbg" />
                  </Nav.Link>
                </Col>
                <Col lg={4}>
                  <div className="search-home">
                    <form>
                      <ReactTransliterate
                        renderComponent={(props) => <input className="form-control" {...props} />}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder={home[checkLang].searchPlaceHolder}
                        onChangeText={(text) => {
                          setSearch(text);
                        }}
                        lang="hi"
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
                          title={header[checkLang].legislature}
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="Governer">
                            {header[checkLang].governor}
                          </NavDropdown.Item>
                          <NavDropdown.Item href="LegislativeCouncil">
                            {header[checkLang].legislativecouncil}
                          </NavDropdown.Item>
                          <NavDropdown.Item href="LegislativeAssembly">
                            {header[checkLang].legislativeassembly}
                          </NavDropdown.Item>
                          {/* <NavDropdown.Item href="#action5">
                            {header[checkLang].minister}
                          </NavDropdown.Item> */}
                          <NavDropdown.Item href="/mantri-parishad">
                            {header[checkLang].councilminis}
                          </NavDropdown.Item>
                          <NavDropdown.Item href="Library">
                            {header[checkLang].legislativelibrary}
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                          className={`${location === "/members?house=एकत्रित" ? "active" : ""
                            }`}
                          href="/members?house=एकत्रित"
                        >
                          {header[checkLang].member}
                        </Nav.Link>
                        <Nav.Link
                          className={`${location === "/Debate" ? "active" : ""
                            }`}
                          href="/Debate"
                        >
                          {header[checkLang].Debate}
                        </Nav.Link>
                        <Nav.Link
                          className={`${location === "/SessionCalender" ? "active" : ""
                            }`}
                          href="/SessionCalender"
                        >
                          {header[checkLang].session}
                        </Nav.Link>
                        <Nav.Link
                          className={`${location === "/LegislationsBills" ? "active" : ""
                            }`}
                          href="/LegislationsBills"
                        >
                          {header[checkLang].Legislation}
                        </Nav.Link>
                        <Nav.Link className={`${location === "/Budgetyear" ? "active" : ""
                          }`} href="/Budgetyear">
                          {header[checkLang].Budget}
                        </Nav.Link>
                        <Nav.Link className={`${location === "/Electionresult" ? "active" : ""
                          }`} href="/Electionresult">
                          {header[checkLang].Elections}
                        </Nav.Link>
                        <Nav.Link className={`${location === "/Gazette" ? "active" : ""
                          }`} href="/Gazette">
                          {header[checkLang].Gazette}
                        </Nav.Link>
                        <NavDropdown
                          title={header[checkLang].various}
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="/gallery">
                            {header[checkLang].gallery}
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
