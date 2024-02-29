import { useState } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import useLang from "../hooks/useLang";
import { judgment } from "../data/constant";

const Judgments = () => {
    const [isDivVisible, setDivVisibility] = useState(false);
    const { checkLang } = useLang();
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter">
                                <h3>{judgment[checkLang].filter}</h3>
                                <Accordion className="filsss" defaultActiveKey={["0"]}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{judgment[checkLang].court}</Accordion.Header>
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
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>{judgment[checkLang].justice}</Accordion.Header>
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
                                    {judgment[checkLang].advfilter}
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
                                    {judgment[checkLang].reset}
                                </button>
                                <button className="apply">
                                    {judgment[checkLang].apply}
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
                                    placeholder={judgment[checkLang].searchtitle}
                                    className="form-control"
                                />
                                <button className="searchb">
                                    <i className="fa fa-search" />
                                </button>
                                <button className="startover">
                                    {judgment[checkLang].reset}
                                </button>
                            </div>
                        </div>
                        <div className="breadvrumbss">
                            <Row>
                                <Col lg={6}>
                                    <div className="breadvrumbss-inner">
                                        <div className="countdebate">
                                            <span> {judgment[checkLang].home} </span>
                                            <img src={Arrow} alt="" />
                                            <span>{judgment[checkLang].title}</span>
                                        </div>
                                        <p>
                                            [0 परिणाम]
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="debate-right">
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
                                {judgment[checkLang].comingsoon}
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Judgments;
