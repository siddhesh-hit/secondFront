
import { useState } from 'react'
import logo from "../../assets/logo.png"
import { Container, Navbar, Offcanvas, NavDropdown, Nav, Row, Col, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    const [location, setLocation] = useState('/')

    if (window.location.pathname !== location) {
        setLocation(window.location.pathname)
    }

    return (
        <div>
            <div className={`${location === '/' ? 'blueColor topheader' :
                location === '/Homepage2' ? 'otherColor' :
                    location === '/Homepage1' ? 'newheadercolor' :
                        location === '/Debate' ? 'topheader' :
                            location === '/DebateDetail' ? 'newheadercolor' :
                                'topheader'
                }`}>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className="topheaderright">
                                <div className="contact-us">
                                    <Link to="/ContactUs">
                                        <span>आमच्याशी संपर्क साधा</span>
                                    </Link>
                                </div>
                                <Dropdown className='languagechanges'>
                                    <Dropdown.Toggle>
                                        भाषा
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">मराठी</Dropdown.Item>
                                        <Dropdown.Item href="#">English</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="font-size">
                                    <button className="font-size-button">अ+</button>
                                    <button className="font-size-button" style={{ borderLeft: 'solid #121f29 2px', borderRight: 'solid #121f29 2px' }}>अ</button>
                                    <button className="font-size-button">अ-</button>
                                </div>
                                <a href="signin">
                                    <span>साइन इन करा</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {location === "/" || location === "/Homepage1" || location === "/Homepage2" ? (
                <div className='headerlogos'>

                    <Container fluid>
                        <Row className='midhead one'>
                            <Col lg={4}>
                                <Nav.Link href="/"><img src={logo} alt="logo" className="loginbg" /></Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </div>) : (
                <>
                    <div className='headerlogos'>

                        <Container fluid>
                            <Row className='midhead two'>
                                <Col lg={4}>
                                    <Nav.Link href="/"><img src={logo} alt="logo" className="loginbg" /></Nav.Link>
                                </Col>
                                <Col lg={4}>
                                    <div className="search-home">
                                        <form>
                                            <input
                                                type="search"
                                                placeholder="शोध कीवर्ड प्रविष्ट करा"
                                                className="form-control"
                                            />
                                            <i
                                                className="fa fa-search"
                                                aria-hidden="true"
                                            ></i>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        {['sm'].map((expand) => (
                            <Navbar key={expand} expand={expand}>
                                <Container fluid>
                                    <div>
                                        <Link to="/"><img src={logo} alt="logo" className="headerlogo" /></Link>
                                    </div>
                                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand-${expand}`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                <Link to="/"><img src={logo} alt="logo" className="headerlogo w-100" /></Link>
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                                <div>
                                                    <Link className='nav-link' to="/">
                                                        मुख्यपृष्ठ
                                                    </Link>
                                                </div>
                                                <NavDropdown
                                                    title="विधिमंडळ"
                                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                >
                                                    <div>
                                                        <Link className='dropdown-item' to="/AboutUs">
                                                            विधानमंडळ
                                                        </Link>
                                                    </div>
                                                    <NavDropdown.Item href="#action5">
                                                        राज्यपाल
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action5">
                                                        विधानमंडळ सचिव
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action5">
                                                        मंत्रीमंडळ
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <Nav.Link href="#action2">विधानपरिषद</Nav.Link>
                                                <Nav.Link href="#action2">विधानसभा</Nav.Link>
                                                <NavDropdown
                                                    title="विधानमंडळ सदस्य"
                                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                >
                                                    <NavDropdown.Item href="#action3">विधानपरिषद सदस्य</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action4">
                                                        विधानसभा सदस्य
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <NavDropdown
                                                    title="सभागृहांचे कार्यवृत्त"
                                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                >
                                                    <NavDropdown.Item href="#action3">विधानपरिषद सदस्य</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action4">
                                                        विधानसभा सदस्य
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <Nav.Link href="#action2">सत्र दिनदर्शिका</Nav.Link>
                                                <div>
                                                    <Link className='nav-link' to="/Library">
                                                        ग्रंथालय
                                                    </Link>
                                                </div>
                                                <NavDropdown
                                                    title="प्रकाशने"
                                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                >
                                                    <NavDropdown.Item href="#action4">
                                                        विधानसभा सदस्य
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action5">
                                                        विधानसभा सदस्य
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <NavDropdown
                                                    title="इतर"
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
                </>)
            }
        </div>
    )
}

export default Header
