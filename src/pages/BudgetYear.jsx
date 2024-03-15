import { useState } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import useLang from "../hooks/useLang";
import { budgetyear } from "../data/constant";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
const Budgetyear = () => {
    const [text, setText] = useState("");
    const { checkLang } = useLang();
    const [isDivVisible, setDivVisibility] = useState(false);
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter">
                                <h3>{budgetyear[checkLang].filter}</h3>
                                <Accordion className="filsss" defaultActiveKey={["0"]}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{budgetyear[checkLang].date}</Accordion.Header>
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
                                        <Accordion.Header>{budgetyear[checkLang].day}</Accordion.Header>
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
                                    {budgetyear[checkLang].advfilter}
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
                                    {budgetyear[checkLang].reset}
                                </button>
                                <button className="apply">
                                    {budgetyear[checkLang].apply}
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="debate-search">
                            <Row>
                                <Col lg={10} style={{ position: 'relative' }}>
                                    <ReactTransliterate
                                        renderComponent={(props) => <input className="form-control" {...props} />}
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder={budgetyear[checkLang].searchtitle}
                                        onChangeText={(text) => {
                                            setText(text);
                                        }}
                                        lang="hi"
                                    />
                                    <button className="searchb">
                                        <i className="fa fa-search" />
                                    </button>
                                </Col>
                                <Col lg={2}>
                                    <button className="startover">
                                        {budgetyear[checkLang].reset}
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <div className="breadvrumbss">
                            <Row>
                                <Col lg={6}>
                                    <div className="breadvrumbss-inner">
                                        <div className="countdebate">
                                            <span> {budgetyear[checkLang].home}</span>
                                            <img src={Arrow} alt="" />
                                            <span>{budgetyear[checkLang].title}</span>
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
                                {budgetyear[checkLang].comingsoon}
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Budgetyear;
