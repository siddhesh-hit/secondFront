import { Container, Row, Col } from "react-bootstrap"
import libanner from "../assets/library/library.png"

const Library = () => {
    return (
        <div className="librarypage">
            <Container fluid style={{ padding: '0px' }}>
                <div className="librarybanner">
                    <img src={libanner} className="w-100" alt="library" />
                </div>
            </Container>
            <Container>
                <Row>
                    <Col lg={3} >
                        <div className="librarysidebar">
                            <h3>विधानमंडळ ग्रंथालय</h3>
                            <ul>
                                <a href=""><li>ग्रंथालय साहित्य संग्रह<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>ग्रंथालयचे कार्य<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>ग्रंथालय आज्ञावली<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>ग्रंथालय समिती<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>ग्रंथालय नियम<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>संपर्क<i className="fa fa-chevron-right icon-calender"></i></li></a>
                            </ul >
                        </div >
                    </Col >
                    <Col lg={9}>
                        <div className="librarycontent">
                            <h1>विधानमंडळ ग्रंथालय</h1>
                            <hr />
                            <p className="library">
                                सध्या विधानसभेचे 288 सदस्य थेट एकल मतदारसंघातून निवडले जातात. महाराष्ट्र विधान परिषद (महाराष्ट्र विधान परिषद) चे सदस्य अप्रत्यक्षपणे इलेक्टोरल कॉलेजद्वारे निवडले जातात. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधान सभा ही भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. सध्या विधानसभेचे 288 सदस्य थेट एकल मतदारसंघातून निवडले जातात. महाराष्ट्र विधान परिषद (महाराष्ट्र विधान परिषद) चे सदस्य अप्रत्यक्षपणे इलेक्टोरल कॉलेजद्वारे निवडले जातात.सध्या विधानसभेचे 288 सदस्य थेट एकल मतदारसंघातून निवडले जातात. महाराष्ट्र विधान परिषद (महाराष्ट्र विधान परिषद) चे सदस्य अप्रत्यक्षपणे इलेक्टोरल कॉलेजद्वारे निवडले जातात. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधान सभा ही भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. सध्या विधानसभेचे 288 सदस्य थेट एकल मतदारसंघातून निवडले जातात. महाराष्ट्र विधान परिषद (महाराष्ट्र विधान परिषद) चे सदस्य अप्रत्यक्षपणे इलेक्टोरल कॉलेजद्वारे निवडले जातात.सध्या विधानसभेचे 288 सदस्य थेट एकल मतदारसंघातून निवडले जातात. महाराष्ट्र विधान परिषद (महाराष्ट्र विधान परिषद) चे सदस्य अप्रत्यक्षपणे इलेक्टोरल कॉलेजद्वारे निवडले जातात. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधान सभा ही भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे. सध्या विधानसभेचे 288 सदस्य थेट एकल मतदारसंघातून निवडले जातात. महाराष्ट्र विधान परिषद (महाराष्ट्र विधान परिषद) चे सदस्य अप्रत्यक्षपणे इलेक्टोरल कॉलेजद्वारे निवडले जातात.महाराष्ट्र विधान परिषद (महाराष्ट्र विधान परिषद) चे सदस्य अप्रत्यक्षपणे इलेक्टोरल कॉलेजद्वारे निवडले जातात. महाराष्ट्र विधानसभा किंवा महाराष्ट्र विधान सभा ही भारताच्या महाराष्ट्र राज्याच्या विधानसभेचे कनिष्ठ सभागृह आहे.
                                फोटो आणि व्हिडिओ गॅलरी
                            </p>
                        </div>
                    </Col>
                </Row >
            </Container >
        </div >
    )
}

export default Library
