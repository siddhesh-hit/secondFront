import { Col, Container, Row } from 'react-bootstrap'
import { logo, profilee, profilee1, profilee2, imag1, imag2, imag3, imag4, imag5, imag6, legmem, debate, sessioncalender, legis, budget, election, gazette, gazettee, publication, media, judgments } from '../assets/homeicons'
import { Link } from 'react-router-dom'

const Homepage = () => {

    return (
        <div>

            <section className='homepageback'>
                <h1>A Comprehensive Knowledge Repository - Your Portal to Explore Legislative Discourse, <br />Election Narratives, and Civic Empowerment. Search and Discover Now!&quot;
                </h1>
                <Row className='form-controlss'>
                    <Col lg={6}>
                        <input className='form-control' placeholder='Enter the search keywords' />
                        <div className='searchh'><i className="fa fa-search"></i></div>
                    </Col>
                </Row>
                <Row className='maincontent'>
                    <Col lg={2}>
                        <Col lg={12}>
                            <Link className='anchorlinks' to="/AboutUs">
                                <Row className='membersss11'>
                                    <Col lg={8}>
                                        <h6>About Maharashtra
                                            Legislature</h6>
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
                                        <h6>About Maharashtra
                                            Legislature Library</h6>
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
                                        <h6>Photos and media
                                            Gallery</h6>
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
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={legmem} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Legislative Members</h6>
                                            <p>Council | Assembly</p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={debate} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Debates</h6>
                                            <p>House | Session | Year</p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={sessioncalender} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Session Calendar</h6>
                                            <p>Council | Assembly</p>
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
                                            <h6>Legislation</h6>
                                            <p>Acts | Bills | Rules</p>
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
                                            <h6>Budget</h6>
                                            <p>Year | Department </p>
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
                                            <h6>Election results</h6>
                                            <p>Council | Assembly</p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={gazette} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Gazette (GOM)</h6>
                                            <p>Part | Subject | Department</p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={publication} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Publication</h6>
                                            <p>Scheme | Policy | Department</p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={media} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Media</h6>
                                            <p>Video   |  Audio   |   Newspaper</p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={legmem} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Legislative committee</h6>
                                            <p>Type  |   Department    |   Name      </p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={gazettee} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Gazetteers (GOM) </h6>
                                            <p>Place  |   Topic     </p>
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col lg={4}>
                                <a href='#'>
                                    <Row className='boxes'>
                                        <Col lg={3}>
                                            <img src={judgments} />
                                        </Col>
                                        <Col lg={9}>
                                            <h6>Judgments</h6>
                                            <p>Court | Subject</p>
                                        </Col>
                                    </Row>
                                </a>
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
                                        <h6>Shri. Ramesh Bais</h6>
                                        <p>Hon. Governor </p>
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
                                        <h6>Adv. Rahul Suresh Narvekar</h6>
                                        <p>Hon. Speaker </p>
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
                                        <h6>Dr. Neelam Gorhe</h6>
                                        <p>Hon. Deputy Chairman</p>
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                    </Col>
                </Row>
            </section>
            <section className='resourcesss'>
                <Container>
                    <h2>Explore digitalized resources in MLS library </h2>
                    <Row>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag1} />
                                </Col>
                                <Col lg={8}>
                                    <h6>Debates</h6>
                                    <p>405 million</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag2} />
                                </Col>
                                <Col lg={8}>
                                    <h6>Articles</h6>
                                    <p>440 million</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag3} />
                                </Col>
                                <Col lg={8}>
                                    <h6>Bills & Acts</h6>
                                    <p>25 million</p>
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
                                    <h6>Media files</h6>
                                    <p>10 million</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag5} />
                                </Col>
                                <Col lg={8}>
                                    <h6>Gazettes</h6>
                                    <p>6 million</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row className='boxes1'>
                                <Col lg={4}>
                                    <img src={imag6} />
                                </Col>
                                <Col lg={8}>
                                    <h6>Other Reports</h6>
                                    <p>30 million</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Homepage
