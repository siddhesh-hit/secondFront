import { Col, Container, Row } from 'react-bootstrap'
import { logo, profilee, profilee1, profilee2, imag1, imag2, imag3, imag4, imag5, imag6, legmem, debate, sessioncalender, legis, budget, election, gazette, gazettee, publication, media, judgments } from '../assets/homeicons'
import { Link } from 'react-router-dom'

const Homepage2 = () => {

    return (
        <div>

            <section className='homepageback new2'>
                <h1>एक सर्वसमावेशक ज्ञान भांडार - विधिमंडळ,निवडणूक,आणि नागरी सक्षमीकरण <br /> एक्सप्लोर करण्यासाठी तुमचे पोर्टल.
                </h1>
                <Row className='form-controlss'>
                    <Col lg={6}>
                        <input className='form-control' placeholder='शोध कीवर्ड प्रविष्ट करा' />
                        <div className='searchh'><i className="fa fa-search"></i></div>
                    </Col>
                </Row>
                <Row className='maincontent'>
                    <Col lg={2}>
                        <Col lg={12}>
                            <Link className='anchorlinks' to="/AboutUs">
                                <Row className='membersss11'>
                                    <Col lg={8}>
                                        <h6>महाराष्ट्र विधिमंडळ</h6>
                                    </Col>
                                    <Col lg={4}>
                                        <img src={logo} />
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <Link className='anchorlinks' to="/Library">
                                <Row className='membersss11'>
                                    <Col lg={8}>
                                        <h6>विधानमंडळ ग्रंथालय</h6>
                                    </Col>
                                    <Col lg={4}>
                                        <img src={logo} />
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <a className='anchorlinks' href="#">
                                <Row className='membersss11'>
                                    <Col lg={8}>
                                        <h6>फोटो आणि व्हिडिओ गॅलरी</h6>
                                    </Col>
                                    <Col lg={4}>
                                        <img src={logo} />
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col lg={4}>
                                <Link to='/'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={legmem} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>विधिमंडळ सदस्य</h6>
                                            <Link to="/Aboutus">विधान परिषद | </Link><Link to="/"> विधान सभा</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to='/Debate'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={debate} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>सभागृहांचे कार्यवृत्त</h6>
                                            <Link to="/Debate">सभागृह | </Link><Link to="/Debate">अधिवेशन | </Link><Link to="/Debate">वर्ष</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={sessioncalender} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>सत्र दिनदर्शिका</h6>
                                            <Link to="/">विधानपरिषद | </Link><Link>   विधान सभा    </Link>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={legis} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>विधिविधान</h6>
                                            <Link to="/">कायदे | </Link><Link to="/">बिल | </Link><Link to="/">नियम</Link>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={budget} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>अर्थसंकल्प </h6>
                                            <Link to="/">वर्ष | </Link><Link to="/">विभाग</Link>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={election} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>निवडणूक निकाल</h6>
                                            <Link to="/">विधान परिषद | </Link><Link to="/">विधान सभा </Link>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <Link href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={gazette} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>राजपत्र ( महाराष्ट्रराज्य )</h6>
                                            <Link to="/">भाग | </Link><Link to="/">विषय | </Link><Link to="/">विभाग</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={publication} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>प्रकाशने</h6>
                                            <Link to="/">योजना | </Link><Link to="/">धोरण | </Link><Link to="/">विभाग</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={media} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>मीडिया</h6>
                                            <Link to="/">ऑडिओ | </Link><Link to="/">व्हिडिओ | </Link><Link to="/">वृत्तपत्र</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={legmem} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>समिती</h6>
                                            <Link to="/">प्रकार | </Link><Link> विभाग | </Link><Link to="/"> नाव</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={gazettee} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>दर्शनिका ( महाराष्ट्रराज्य )</h6>
                                            <Link to="/">ठिकाण  |</Link>  <Link to="/"> विषय</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={judgments} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>निर्णय</h6>
                                            <Link to="/">कोर्ट  |</Link>  <Link to="/"> विषय</Link>
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}>
                        <Col lg={12}>
                            <a className='anchorlinks' href="#">
                                <Row className='membersss'>
                                    <Col lg={4}>
                                        <img src={profilee} />
                                    </Col>
                                    <Col lg={8}>
                                        <h6>श्री रमेश बैस</h6>
                                        <p>माननीय राज्यपाल</p>
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                        <Col lg={12}>
                            <a className='anchorlinks' href="#">
                                <Row className='membersss'>
                                    <Col lg={4}>
                                        <img src={profilee1} />
                                    </Col>
                                    <Col lg={8}>
                                        <h6>ॲड राहुल सुरेश नार्वेकर</h6>
                                        <p>माननीय अध्यक्ष</p>
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                        <Col lg={12}>
                            <a className='anchorlinks' href="#">
                                <Row className='membersss'>
                                    <Col lg={4}>
                                        <img src={profilee2} />
                                    </Col>
                                    <Col lg={8}>
                                        <h6>डॉ नीलम गोर्‍हे</h6>
                                        <p>माननीय उपसभापती</p>
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                    </Col>
                </Row>
            </section >
            <section className='resourcesss new22'>
                <Container>
                    <h2>आतापर्यंत एमएलएस ग्रंथालयातील संसाधने, दस्तऐवज डिजीटलाइज्ड झाली आहे ते एक्सप्लोरे करा</h2>
                    <Row>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag1} />
                                </Col>
                                <Col lg={8}>
                                    <h6>सभागृहांचे कार्यवृत्त</h6>
                                    <p>405 दशलक्ष</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag2} />
                                </Col>
                                <Col lg={8}>
                                    <h6>लेख</h6>
                                    <p>405 दशलक्ष</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag3} />
                                </Col>
                                <Col lg={8}>
                                    <h6>विधेयके आणि कायदे</h6>
                                    <p>25 दशलक्ष</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag4} />
                                </Col>
                                <Col lg={8}>
                                    <h6>माध्यम फाइल्स</h6>
                                    <p>10 दशलक्ष</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag5} />
                                </Col>
                                <Col lg={8}>
                                    <h6>राजपत्र</h6>
                                    <p>6 दशलक्ष</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag6} />
                                </Col>
                                <Col lg={8}>
                                    <h6>इतर अहवाल</h6>
                                    <p>30 दशलक्ष</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div >
    )
}

export default Homepage2
