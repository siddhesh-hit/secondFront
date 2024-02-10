import { Container, Row, Col } from "react-bootstrap"

const ContactUs = () => {
    return (
        <div className="contactpage">
            <Col lg={12}>
                <div className="contactcontent">
                    <h1>आमच्याशी संपर्क साधा<div className="hrline"></div></h1>
                </div>
            </Col>
            <Container className="mb-5 mt-5">
                <Row>
                    <Col lg={3}>
                        <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-map-marker" />
                            </div>
                            <div className="text">
                                <span>पत्ता:</span>
                                <p>
                                    महाराष्ट्र विधानमंडळ, विधान भवन , बॅकबे रेक्लमेशन , विधान भवन मार्ग , मुंबई - ४०० ०३२.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-phone" />
                            </div>
                            <div className="text">
                                <span>विधानमंडळ दूरध्वनी क्रमांक:</span>
                                <p>
                                    <a href="tel://1234567920">०२२-२२०२ ७३ ९९ / २२०२ ६३ ५४ / २२०२ ६८ ७९ / २२०२ ७७ ७५ / ७७</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-fax" />
                            </div>
                            <div className="text">
                                <span>फॅक्स क्रमांक:</span>
                                <p>
                                    <a href="mailto:info@yoursite.com">
                                        ०२२-२२०२ ४५ २४ / २२८२ ०८ २०</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-paper-plane" />
                            </div>
                            <div className="text">
                                <span>ई-मेल:</span>
                                <p> <a href="#">secy1-mls@mah.gov.in</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7548.234799019207!2d72.824187!3d18.926197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e96d790c07%3A0x5240aee242919df5!2sMaharashtra%20Vidhan%20Bhavan!5e0!3m2!1sen!2sin!4v1707114796608!5m2!1sen!2sin"
                width={'100%'}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

        </div>
    )
}

export default ContactUs
