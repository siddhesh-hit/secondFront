import { Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { helpdesk } from "../data/constant"
import useLang from "../hooks/useLang"
import Arrow from "../assets/debate/arrow.svg";
const HelpDesk = () => {
  const { lang, checkLang } = useLang();
  return (
    <div>
      <section className="commonbg">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="breadcumbsss">
                <div className="countdebate"><Link to="/"><span> {helpdesk[checkLang].title} </span></Link>
                  <img src={Arrow} alt="" /><span>{helpdesk[checkLang].title1}</span>
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
              {helpdesk[checkLang].title1}
              <div className="hrline"></div>
            </h1>
          </div>
          <Row>
            <Col lg={12}>
              <div className="form helpdessk">
                <p>{helpdesk[checkLang].title3}</p>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{helpdesk[checkLang].form1} <span>*</span></Form.Label>
                      <Form.Control type="text" placeholder={helpdesk[checkLang].form1} />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{helpdesk[checkLang].form2} <span>*</span></Form.Label>
                      <Form.Control type="email" placeholder={helpdesk[checkLang].form2} />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{helpdesk[checkLang].form3} <span>*</span></Form.Label>
                      <Form.Control type="number" placeholder={helpdesk[checkLang].form3} />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{helpdesk[checkLang].form4} <span>*</span></Form.Label>
                      <Form.Control type="email" placeholder={helpdesk[checkLang].form4} />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Label>{helpdesk[checkLang].form5}</Form.Label>
                      <Form.Control style={{ height: 'initial' }} as="textarea" rows={6} placeholder={helpdesk[checkLang].form5} />
                    </Form.Group>
                  </Col>
                </Row>
                <button className="form-submit">{helpdesk[checkLang].submit}</button>
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
                  <span>{helpdesk[checkLang].addresstitle}:</span>
                  <p>
                    {helpdesk[checkLang].address}.
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
                  <span>{helpdesk[checkLang].telephone}:</span>
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
                  <span>{helpdesk[checkLang].email}:</span>
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

export default HelpDesk
