import { Container, Row, Col, Accordion, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import Arrow from "../assets/debate/arrow.svg";

const SessionCalender = () => {
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter mb-4">
                                <h3>Filter</h3>
                                <Accordion className="filsss" defaultActiveKey={["0", "1", "2"]} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>सभागृह</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="filtercontent">
                                                <div className="datacheck">
                                                    <label>विधानपरिषद</label>
                                                    <Form.Check
                                                        aria-label="option 1"
                                                        name="house"
                                                        value={"विधानपरिषद"}
                                                    />
                                                </div>
                                                <div className="datacheck">
                                                    <label>विधानसभा</label>
                                                    <Form.Check
                                                        aria-label="option 2"
                                                        name="house"
                                                        value={"विधानसभा"}
                                                    />
                                                </div>
                                                <div className="datacheck1">
                                                    <label>एकत्रित</label>
                                                    <Form.Check
                                                        aria-label="option 3"
                                                        name="house"
                                                        value={"एकत्रित"}
                                                    />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>सत्र</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="filtercontent">
                                                <div className="datacheck">
                                                    <label>सर्व</label>
                                                    <Form.Check
                                                        aria-label="option 4"
                                                        name="session"
                                                        value={"सर्व"}
                                                    />
                                                </div>
                                                <div className="datacheck">
                                                    <label>पावसाळी</label>
                                                    <Form.Check
                                                        aria-label="option 5"
                                                        name="session"
                                                        value={"पावसाळी"}
                                                    />
                                                </div>
                                                <div className="datacheck">
                                                    <label>अर्थसंकल्पीय</label>
                                                    <Form.Check
                                                        aria-label="option 6"
                                                        name="session"
                                                        value={"अर्थसंकल्पीय"}
                                                    />
                                                </div>
                                                <div className="datacheck1">
                                                    <label>विशेष</label>
                                                    <Form.Check
                                                        aria-label="option 7"
                                                        name="session"
                                                        value={"विशेष"}
                                                    />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Year Select</Accordion.Header>
                                        <Accordion.Body>
                                            <select
                                                className="secondfilers"
                                                name="kramank"
                                            >
                                                <option>Select Year</option>
                                                <option>2011</option>
                                                <option>2012 </option>
                                            </select>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Date Range</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="filtercontent">
                                                <Row className="daterange">
                                                    <Col lg={12}>
                                                        <label>पासून</label>
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                        />
                                                    </Col>
                                                    <Col lg={12}>
                                                        <label>प्रयंत</label>
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="formbutton">
                                <button className="reset">
                                    Reset
                                </button>
                                <button className="apply">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="debate-search">
                            <div className="searchboxx">
                                <input
                                    type="text"
                                    name="topic"
                                    placeholder="विषय आणि कीवर्ड शोधा"
                                    className="form-control"
                                />
                                <button className="searchb">
                                    <i className="fa fa-search" />
                                </button>
                                <button className="startover">
                                    Reset
                                </button>
                            </div>
                        </div>
                        <div className="breadvrumbss">
                            <Row>
                                <Col lg={6}>
                                    <div className="breadvrumbss-inner">
                                        <div className="countdebate">
                                            <Link to="/"><span>मुख्यपृष्ठ</span></Link>
                                            <img src={Arrow} alt="" />
                                            <span>सत्र दिनदर्शिका</span>
                                        </div>
                                        <p>
                                            [0 results]
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <table className="debate-light table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ borderRight: "solid white 1px" }}>क्रमांक</th>
                                    <th style={{ borderRight: "solid white 1px" }}> विषय</th>
                                    <th style={{ borderRight: "solid white 1px" }}>सभागृह </th>
                                    <th style={{ borderRight: "solid white 1px" }}> अधिवेशन</th>
                                    <th style={{ borderRight: "solid white 1px" }}>तपशील</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>
                                            1
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            विधानसभा
                                        </span>
                                    </td>
                                    <td>२२ मार्च २०११</td>
                                    <td>
                                        <p><span>पुरके श्री. वसंत बापट श्री. गिरीष....</span></p>
                                    </td>
                                    <td className="imagee">
                                        <a
                                            href="#"
                                            target="_blank" rel="noreferrer">
                                            <img src="/src/assets/debate/Frame.svg" alt="" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SessionCalender;
