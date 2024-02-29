import { Container, Row, Col } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import useLang from "../hooks/useLang";
import { publications } from "../data/constant";

const Publications = () => {
    const { checkLang } = useLang();
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter">
                                <h3>{publications[checkLang].filter}</h3>
                                <select
                                    className="secondfilers mb-3"
                                    name="kramank"
                                >
                                    <option hidden>योजना</option>
                                    <option>
                                        test
                                    </option>
                                </select>
                                <select
                                    className="secondfilers mb-3"
                                    name="kramank"
                                >
                                    <option hidden>धोरण</option>
                                    <option>
                                        test
                                    </option>
                                </select>
                                <select
                                    className="secondfilers mb-5"
                                    name="kramank"
                                >
                                    <option hidden>विभाग</option>
                                    <option>
                                        test
                                    </option>
                                </select>
                            </div>
                            <div className="formbutton">
                                <button className="reset">
                                    {publications[checkLang].reset}
                                </button>
                                <button className="apply">
                                    {publications[checkLang].apply}
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
                                    placeholder={publications[checkLang].searchtitle}
                                    className="form-control"
                                />
                                <button className="searchb">
                                    <i className="fa fa-search" />
                                </button>
                                <button className="startover">
                                    {publications[checkLang].reset}
                                </button>
                            </div>
                        </div>
                        <div className="breadvrumbss">
                            <Row>
                                <Col lg={6}>
                                    <div className="breadvrumbss-inner">
                                        <div className="countdebate">
                                            <span> {publications[checkLang].home}</span>
                                            <img src={Arrow} alt="" />
                                            <span>{publications[checkLang].title}</span>
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
                                {publications[checkLang].comingsoon}
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Publications;
