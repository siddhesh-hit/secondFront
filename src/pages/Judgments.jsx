import { useState } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

const Judgments = () => {
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
                                            <span>title</span>
                                        </div>
                                        <p>
                                            [0 परिणाम]
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="debate-right">
                                        <select name="sabhaselection">
                                            <option value="विधानसभा  12th">विधानसभा 12th</option>
                                            <option value="विधानसभा  11th">विधानसभा 11th</option>
                                            <option value="विधानसभा  10th">विधानसभा 10th</option>
                                            <option value="विधानसभा  09th">विधानसभा 09th</option>
                                        </select>
                                        <select
                                            name="sabhaselection"
                                        >
                                            <option value={10}>10 प्रति पृष्ठ</option>
                                            <option value={20}>20 प्रति पृष्ठ</option>
                                            <option value={30}>30 प्रति पृष्ठ</option>
                                            <option value={40}>40 प्रति पृष्ठ</option>
                                        </select>
                                        <span className="sorting">
                                            <button>
                                                <img src={Sort} alt="" />
                                            </button>
                                        </span>
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

export default Judgments;
