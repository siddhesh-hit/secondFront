import { useState } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";

const SessionCalender = () => {
    const [isDivVisible, setDivVisibility] = useState(false);
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter">
                                <h3>Filter</h3>
                                <Accordion className="filsss" defaultActiveKey={["0"]}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>first</Accordion.Header>
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
                                        <Accordion.Header>Session</Accordion.Header>
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
                                                className="form-control"
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
                                                            disabled
                                                            type="number"
                                                            min={1987}
                                                            max={2024}
                                                            value={2011}
                                                        />
                                                    </Col>
                                                    <Col lg={12}>
                                                        <label>प्रयंत</label>
                                                        <input
                                                            className="form-control"
                                                            disabled
                                                            type="number"
                                                            min={1987}
                                                            max={2024}
                                                            value={2011}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <hr />
                            <div className="secondfilter">
                                <button
                                    className="advanced"
                                    onClick={() => setDivVisibility(!isDivVisible)}
                                >
                                    Advanced Filter
                                    <div className="iconss">{isDivVisible ? "-" : "+"}</div>
                                </button>
                                {isDivVisible && (
                                    <div className="advancdeee">
                                        <select
                                            className="secondfilers"
                                            name="kramank"
                                        >
                                            <option hidden>क्रमांक निवडा</option>
                                            <option>
                                                test
                                            </option>
                                        </select>
                                        <select
                                            className="secondfilers"
                                            name="kramank"
                                        >
                                            <option hidden>क्रमांक निवडा</option>
                                            <option>
                                                test
                                            </option>
                                        </select>
                                    </div>
                                )}
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
                                    placeholder="न्यायालयाचे शीर्षक शोधा"
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
                                            <span>Home</span>
                                            <img src={Arrow} alt="" />
                                            <span>Session Calender</span>
                                        </div>
                                        <p>
                                            [0 results]
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="comingsoon">
                            <h3>
                                लवकरच येत आहे
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SessionCalender;
