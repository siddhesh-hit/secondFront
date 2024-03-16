import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { homeLink } from "../data/constant"
import useLang from "../hooks/useLang"
import Arrow from "../assets/debate/arrow.svg";
import one from "../assets/implink/1.jpeg"
import two from "../assets/implink/2.jpeg"
import three from "../assets/implink/3.jpeg"
import four from "../assets/implink/4.jpeg"
import five from "../assets/implink/5.jpeg"
import six from "../assets/implink/6.jpeg"
const AllLinks = () => {
    const { lang, checkLang } = useLang();
    const handleLinkClick = (link) => {
        if (window.confirm("Are you sure you want to visit this link?") === true) {
            window.location.href = link;
        } else {
            return false
        }
    }
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
                        <Col lg={4}>
                            <div className="links">
                                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("http://mls.org.in/index.aspx")}><img src={one} /> http://mls.org.in</div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="links">
                                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("https://beams.mahakosh.gov.in")}><img src={two} /> https://beams.mahakosh.gov.in</div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="links">
                                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("https://www.eci.gov.in/")}><img src={three} /> https://www.eci.gov.in/</div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="links">
                                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("https://www.maharashtra.gov.in/")}><img src={four} /> https://www.maharashtra.gov.in/</div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="links">
                                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("https://egazette.gov.in")}><img src={five} /> https://egazette.gov.in</div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="links">
                                <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick("https://sansad.in")}><img src={six} /> https://sansad.in</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default AllLinks
