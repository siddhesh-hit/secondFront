import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"

import Arrow from "../assets/debate/arrow.svg";
import print from "../assets/print.svg"
import download from "../assets/download.svg"

import useLang from "../hooks/useLang"
import { Link } from "react-router-dom";
import MemberCouncilProfile from "./MemberCouncilProfile";

const MemberCouncilDetails = () => {
    const { lang, checkLang } = useLang();
    return (
        <div className="memberassemdetails">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="breadcumbsss">
                            <div className="countdebate">
                                <Link to="/"><span>मुख्य पृष्ठ</span></Link>
                                <Link to="/"><img src={Arrow} alt="" /><span>सदस्य</span></Link>
                                <img src={Arrow} alt="" /><span>सदस्य तपशील</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="memberdetailscontent">
                    <h3>सदस्य तपशील</h3>
                    <div className="downloadd">
                        <Link to="/"><img src={print} alt="" /></Link>
                        <Link to="/"><img src={download} alt="" /></Link>
                    </div>
                    <Tabs
                        defaultActiveKey="मुलभूत माहिती"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="मुलभूत माहिती" title="मुलभूत माहिती">
                            <div className="basic-information">
                                <Row>
                                    <Col lg={3} className="memberproifleimg">
                                        <MemberCouncilProfile />
                                    </Col>
                                    <Col lg={6}>
                                        <div className="basic-info-data">
                                            <p>मतदारसंघ : <span>५२- नागपूर दक्षिण पश्चिम</span></p>
                                            <p>राजकीय पक्ष	:  <span>भारतीय जनता पक्ष</span></p>
                                            <p>जन्म तारीख  : <span>1970-07-22</span></p>
                                            <p>जन्म स्थान	: <span>नागपूर</span></p>
                                            <p>शिक्षण  : <span>एलएल.बी. (नागपूर विद्यापीठ तृतीय मेरिट), एम.बी.ए., डिप्लोमा इन प्रोजेक्ट मॅनेजमेंट, डी.एस.ई. बर्लिन, जर्मनी</span></p>
                                            <p>छंद  :<span> वाचन, संगीत (हिंदी सिनेमातील गाणी ऐकणे), क्रिकेट व कविता लेखन</span></p>
                                            <p>वैवाहिक स्थिती	:  <span>विवाहित, अमृता फडणवीस</span></p>
                                            <p>अपत्ये	:  <span>१</span></p>
                                            <p>ज्ञात भाषा	:  <span>मराठी, हिंदी व इंग्रजी</span></p>
                                            <p>व्यवसाय	:  <span>-</span></p>
                                            <p>सध्याचा पत्ता :</p>
                                            <h6>२७६-रावसाहेब फडणवीस पार्कसमोर, धरमपेठ, नागपूर.
                                                दूरध्वनी : (०७१२) २५३३४४६</h6>
                                            <p>कायमचा पत्ता :</p>
                                            <h6>खोली क्रमांक ४०२, मॅजेस्टिक आमदार निवास, मुंबई.
                                                दूरध्वनी : (०२२) २२०२१५८५</h6>
                                        </div>
                                    </Col >
                                </Row >
                            </div >
                        </Tab >
                        <Tab eventKey="राजकीय प्रवास" title="राजकीय प्रवास">
                            <div className="basic-information">
                                <Row>
                                    <Col lg={3} className="memberproifleimg">
                                        <MemberCouncilProfile />
                                    </Col>
                                    <Col lg={6}>
                                        <div className="political-travel">
                                            <ul>
                                                <li>
                                                    कार्यकारी सदस्य, रामभाऊ म्हाळगी प्रबोधिनी (युनायटेड नेशन्सद्वारा मान्यता प्राप्त संस्था); उपाध्यक्ष, दि सेंट्रल हिंदू
                                                    मिलिटरी एज्युकेशन सोसायटी, नाशिक (भोसला मिलिटरी स्कूल); उपाध्यक्ष, राष्ट्रीय अपंग कल्याण संस्था; अध्यक्ष, नागपूर जिल्हा
                                                    बास्केट बॉल संघटना
                                                </li>
                                                <li>१९८७ पासून सामाजिक कार्याला सुरुवात; अखिल भारतीय विद्यार्थी परिषदेचे कार्य; राष्ट्रीय स्वयंसेवक संघाचे स्वयंसेवक, विविध
                                                    उपक्रमात सहभाग;</li>
                                                <li>१९८९ वॉर्ड अध्यक्ष, भारतीय जनता पक्ष, धरमपेठ वॉर्ड, नागपूर;</li>
                                                <li>१९९० प्रसिद्धी प्रमुख, भाजप नागपूर (पश्‍चिम);</li>
                                                <li>१९९२-९५ अध्यक्ष, भाजप युवा मोर्चा नागपूर शहर;</li>
                                                <li>१९९५- २००४ उपाध्यक्ष, महाराष्ट्र प्रदेश भारतीय जनता युवा मार्चा;</li>
                                                <li>२००४-२००९ राष्ट्रीय उपाध्यक्ष, भारतीय जनता युवा मोर्चा;</li>
                                                <li>२००९ भाजप विदर्भ निवडणूक प्रमुख, १९९२ व १९९७ नागपूर मनपा सदस्य, १९९७ महापौर, महानगरपालिका, नागपूर;</li>
                                                <li>१९९८ मेअर इन कौन्सिल पद्धतीअंतर्गत महाराष्ट्रातील प्रथम महापौर म्हणून निवड;</li>
                                                <li>१९९९-२००४, २००४-२००९ सदस्य, महाराष्ट्र विधानसभा; सदस्य, विधानमंडळ नियम समिती, सार्वजनिक उपक्रम समिती, विनंती अर्ज समिती, गृहनिर्माण व नगरविकास स्थायी समिती; सदस्य, महाराष्ट्र जीवन प्राधिकरण समिती; सदस्य, कार्यकारी परिषद डॉ. पंजाबराव देशमुख कृषी विद्यापीठ; ओ.बी.सी. नॉन क्रिमीलेअर प्रमाणपत्राची उत्पन्न मर्यादा वाढविण्यासाठी विशेष व यशस्वी प्रयत्न; राष्ट्रकुल संसदीय मंडळ महाराष्ट्र शाखेच्यावतीने सन २००३ या वर्षाचा महाराष्ट्र विधानसभेतील उत्कृष्ट संसदपटू पुरस्कार प्राप्त; उत्कृष्ट वक्‍ता म्हणून राष्ट्रीय पुरस्कार प्राप्त; रोटरी क्लबचा मोस्ट चॅलेजिंग युथ अॅवार्ड प्रापत; हिंदू लॉं. विषयात नागपूर विद्यापीठाचा बी.के. बोस अवॉर्ड प्राप्त; राज्य व राष्ट्रीय स्तरावरील अनेक पुरस्कारांनी सन्मानीत; यशदा, पुणे येथे अर्बन फायनान्सिंग विषयावर व्याख्याने दिली; </li>
                                                <li>ऑक्टोबर २००९ मध्ये महाराष्ट्र विधानसभेवर फेरनिवड. लेखन व प्रकाशन : विधानमंडळ सदस्यांना अर्थसंकल्प समजून घेणे सुलभ व्हावे यासाठी उपयुक्त असणारे पुस्तक अर्थसंकल्प म्हणजे नेमके काय, २००५ या पुस्तकाचे लेखन व प्रकाशन, २०१० मध्ये या पुस्तकाच्या दुसऱ्या आवृत्तीचे प्रकाशन</li>
                                            </ul>
                                        </div>
                                    </Col >
                                </Row >
                            </div >
                        </Tab>
                        <Tab eventKey="निवडणूक डेटा" title="निवडणूक डेटा">
                            <div className="electiondata">
                                <Row>
                                    <Col lg={3} className="memberproifleimg">
                                        <MemberCouncilProfile />
                                    </Col>
                                    <Col lg={9}>
                                        <div className="dataofelec">
                                            <h3>निवडणूक निकाल</h3>
                                            <p>५२ - नागपूर - दक्षिण (पश्चिम)</p>
                                            <Row className="counting">
                                                <Col lg={4}>
                                                    <p>• <b>एकूण मतदार :</b> ३,५१,०२१</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <p>• <b>एकूण मतदार :</b> ३,५१,०२१</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <h4>पहिल्या पाच उमेदवारांच्या मतांची संख्या</h4>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{ borderRight: "solid white 1px" }}>क्रमांक</th>
                                                    <th style={{ borderRight: "solid white 1px" }}>उमेदवाराचे नाव</th>
                                                    <th style={{ borderRight: "solid white 1px" }}>मते</th>
                                                    <th style={{ borderRight: "solid white 1px" }}>राजकीय पक्ष</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>फडणवीस, देवेंद्र गंगाधरराव</td>
                                                    <td>८९,२५८</td>
                                                    <td>भारतीय जनता पक्ष</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>फडणवीस, देवेंद्र गंगाधरराव</td>
                                                    <td>८९,२५८</td>
                                                    <td>भारतीय जनता पक्ष</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>फडणवीस, देवेंद्र गंगाधरराव</td>
                                                    <td>८९,२५८</td>
                                                    <td>भारतीय जनता पक्ष</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>फडणवीस, देवेंद्र गंगाधरराव</td>
                                                    <td>८९,२५८</td>
                                                    <td>भारतीय जनता पक्ष</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>फडणवीस, देवेंद्र गंगाधरराव</td>
                                                    <td>८९,२५८</td>
                                                    <td>भारतीय जनता पक्ष</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                        <Tab eventKey="सभागृहांचे कार्यवृत्त" title="सभागृहांचे कार्यवृत्त">
                            <div className="debatetalked">
                                <Row>
                                    <Col lg={3} className="memberproifleimg">
                                        <MemberCouncilProfile />
                                    </Col>
                                    <Col lg={9}>
                                        <table className="table-lightt table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{ borderRight: "solid white 1px" }}>विषय</th>
                                                    <th style={{ borderRight: "solid white 1px" }}>सभागृह</th>
                                                    <th style={{ borderRight: "solid white 1px" }}>अधिवेशन</th>
                                                    <th style={{ borderRight: "solid white 1px" }}>तारीख</th>
                                                    <th>तपशील</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>केज जिल्हा बीड तसेच लातूर जिल्ह्यातील निलंगा तालुक्‍यात ...</td>
                                                    <td>विधानसभा 12</td>
                                                    <td>बजेट (सामान्य)</td>
                                                    <td>18 मार्च 2011</td>
                                                    <td>
                                                        <i className="fa fa-eye"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                    </Tabs >
                </div >
            </Container >
        </div >
    )
}

export default MemberCouncilDetails
