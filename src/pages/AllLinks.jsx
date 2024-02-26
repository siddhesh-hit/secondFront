import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { homeLink } from "../data/constant"
import useLang from "../hooks/useLang"
import Arrow from "../assets/debate/arrow.svg";
const AllLinks = () => {
    const { lang, checkLang } = useLang();
    return (
        <div>
            <section className="commonbg">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="breadcumbsss">
                                <div className="countdebate"><Link><span> {homeLink[checkLang].title2} </span></Link>
                                    <img src={Arrow} alt="" /><span>{homeLink[checkLang].title1}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="importantlinks">
                <Container>
                    <div className="aboutcontent">
                        <h1>
                            {homeLink[checkLang].title1}
                            <div className="hrline"></div>
                        </h1>
                    </div>
                    <Row>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="http://mls.org.in/">http://mls.org.in/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https:// gr.maharashtra.gov.in">https:// gr.maharashtra.gov.in</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https:// beams.mahakosh.gov.in">https:// beams.mahakosh.gov.in</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https:// directorate.marathi.gov.in">https:// directorate.marathi.gov.in</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://eci.gov.in">https://eci.gov.in/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https:// beams.mahakosh.gov.in">https:// beams.mahakosh.gov.in</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://eci.gov.in">https://eci.gov.in/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https:// beams.mahakosh.gov.in">https:// beams.mahakosh.gov.in</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://eci.gov.in">https://eci.gov.in/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https://main.sci.govin/">https://main.sci.govin/</Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="links">
                                <Link to="https:// beams.mahakosh.gov.in">https:// beams.mahakosh.gov.in</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default AllLinks
