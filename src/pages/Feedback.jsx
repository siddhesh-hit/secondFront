import { Col, Container, Form, FormSelect, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { feedback } from "../data/constant"
import useLang from "../hooks/useLang"
import Arrow from "../assets/debate/arrow.svg";
const Feedback = () => {
    const { lang, checkLang } = useLang();
    return (
        <div>
            <section className="commonbg">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="breadcumbsss">
                                <div className="countdebate"><Link to="/"><span> {feedback[checkLang].title} </span></Link>
                                    <img src={Arrow} alt="" /><span>{feedback[checkLang].title1}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="importantlinks">
                <Container className="mb-5 pb-3">
                    <div className="aboutcontent">
                        <h1>
                            {feedback[checkLang].title1}
                            <div className="hrline"></div>
                        </h1>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <div className="form helpdessk">
                                <h2>{feedback[checkLang].title2}</h2>
                                <p>{feedback[checkLang].title3}</p>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{feedback[checkLang].form1} <span>*</span></Form.Label>
                                            <Form.Control type="text" placeholder={feedback[checkLang].form1} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{feedback[checkLang].form2} <span>*</span></Form.Label>
                                            <Form.Control type="email" placeholder={feedback[checkLang].form2} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{feedback[checkLang].form3}</Form.Label>
                                            <FormSelect>
                                                <option value={feedback[checkLang].select}>{feedback[checkLang].select}</option>
                                                <option value={feedback[checkLang].select1}>{feedback[checkLang].select1}</option>
                                                <option value={feedback[checkLang].select2}>{feedback[checkLang].select2}</option>
                                                <option value={feedback[checkLang].select3}>{feedback[checkLang].select3}</option>
                                                <option value={feedback[checkLang].select4}>{feedback[checkLang].select4}</option>
                                                <option value={feedback[checkLang].select5}>{feedback[checkLang].select5}</option>
                                                <option value={feedback[checkLang].select6}>{feedback[checkLang].select6}</option>
                                            </FormSelect>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{feedback[checkLang].form4}</Form.Label>
                                            <Form.Control style={{ height: 'initial' }} as="textarea" rows={6} placeholder={feedback[checkLang].form4} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <button className="form-submit">{feedback[checkLang].submit}</button>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mb-5 mt-5">
                    <Row>
                        <Col lg={4}>
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker" />
                                </div>
                                <div className="text">
                                    <span>{feedback[checkLang].addresstitle}:</span>
                                    <p>
                                        {feedback[checkLang].address}.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone" />
                                </div>
                                <div className="text">
                                    <span>{feedback[checkLang].telephone}:</span>
                                    <p>
                                        <a href="mailto:info@yoursite.com">
                                            91-22-555-0108</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-paper-plane" />
                                </div>
                                <div className="text">
                                    <span>{feedback[checkLang].email}:</span>
                                    <p> <a href="#">contact-us@mlslibrary.com</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </div >
    )
}

export default Feedback
