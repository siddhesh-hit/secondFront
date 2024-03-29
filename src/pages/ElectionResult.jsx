import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import useLang from "../hooks/useLang";
import { electionresult } from "../data/constant";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
const ElectionResult = () => {
    const [text, setText] = useState("");
    const { checkLang } = useLang();
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter">
                                <h3>{electionresult[checkLang].filter}</h3>
                                <select
                                    className="secondfilers mb-3"
                                    name="kramank"
                                >
                                    <option hidden>राज्यसभा</option>
                                    <option>
                                        test
                                    </option>
                                </select>
                                <select
                                    className="secondfilers mb-3"
                                    name="kramank"
                                >
                                    <option hidden>लोकसभा</option>
                                    <option>
                                        test
                                    </option>
                                </select>
                                <select
                                    className="secondfilers mb-3"
                                    name="kramank"
                                >
                                    <option hidden>विधानसभा</option>
                                    <option>
                                        test
                                    </option>
                                </select>
                                <select
                                    className="secondfilers mb-5"
                                    name="kramank"
                                >
                                    <option hidden>विधान परिषद</option>
                                    <option>
                                        test
                                    </option>
                                </select>
                            </div>
                            <div className="formbutton">
                                <button className="reset">
                                    {electionresult[checkLang].reset}
                                </button>
                                <button className="apply">
                                    {electionresult[checkLang].apply}
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
                                        placeholder={electionresult[checkLang].searchtitle}
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
                                        {electionresult[checkLang].reset}
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <div className="breadvrumbss">
                            <Row>
                                <Col lg={6}>
                                    <div className="breadvrumbss-inner">
                                        <div className="countdebate">
                                            <span> {electionresult[checkLang].home}</span>
                                            <img src={Arrow} alt="" />
                                            <span>{electionresult[checkLang].title}</span>
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
                                {electionresult[checkLang].comingsoon}
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ElectionResult;
