import { Col, Container, Row } from "react-bootstrap"
import Eknath from "../assets/mantri/CM.jpg"
import Devendra from "../assets/mantri/D_CM.jpg"
import Ajith from "../assets/mantri/ajitpawar.jpg"
import { Link } from "react-router-dom";
import Arrow from "../assets/debate/arrow.svg"
import useLang from "../hooks/useLang"
import { mantriparishad } from "../data/constant";

const MantriParishad = () => {
    const { checkLang } = useLang();
    return (
        <div>
            <section className="rajypallist">

                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="breadcumbsss">
                                <div className="countdebate"><Link to="/"><span>{mantriparishad[checkLang].home}</span></Link>
                                    <img src={Arrow} alt="" /><span>{mantriparishad[checkLang].title}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="aboutcontent mt-4"><h1>{mantriparishad[checkLang].title}<div className="hrline"></div></h1></div>
                    <Row className="first">
                        <Col md={5} sm={6} xs={12}>
                            <Row>
                                <Col md={5} sm={5} xs={12}>
                                    <div className="rajyapalimg">
                                        <img src={Eknath} alt="rajyapal" />
                                    </div>
                                </Col>
                                <Col md={5} sm={5} xs={12}>
                                    <div className="rajyapalname">
                                        <h3>{mantriparishad[checkLang].membername} :</h3>
                                        <p>श्री. एकनाथ संभाजी शिंदे</p>
                                        <h3>{mantriparishad[checkLang].position} :</h3>
                                        <p>महाराष्ट्राचे मुख्यमंत्री</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="second">
                        <Col md={5} sm={6} xs={12}>
                            <Row>
                                <Col md={5} sm={5} xs={12}>
                                    <div className="rajyapalimg">
                                        <img src={Devendra} alt="rajyapal" />
                                    </div>
                                </Col>
                                <Col md={5} sm={5} xs={12}>
                                    <div className="rajyapalname">
                                        <h3>{mantriparishad[checkLang].membername} :</h3>
                                        <p>श्री. देवेंद्र फडणवीस</p>
                                        <h3>{mantriparishad[checkLang].position} :</h3>
                                        <p>महाराष्ट्राचे उपमुख्यमंत्री</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={5} sm={6} xs={12}>
                            <Row>
                                <Col md={5} sm={5} xs={12}>
                                    <div className="rajyapalimg">
                                        <img src={Ajith} alt="rajyapal" />
                                    </div>
                                </Col>
                                <Col md={5} sm={5} xs={12}>
                                    <div className="rajyapalname">
                                        <h3>{mantriparishad[checkLang].membername} :</h3>
                                        <p>श्री. अजित अनंतराव पवार</p>
                                        <h3>{mantriparishad[checkLang].position} :</h3>
                                        <p>महाराष्ट्राचे उपमुख्यमंत्री</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mantri mb-5">
                        <div className="panel panel-primary">
                            <div className="panel-heading">{mantriparishad[checkLang].minister}</div>
                            <div className="panel-body">
                                <table id="tech-companies-1" className="table table-striped">
                                    <thead className="thead-dark" style={{ backgroundColor: "#000088" }}>
                                        <tr>
                                            <th style={{ borderRight: '1px solid white' }}>{mantriparishad[checkLang].membername}</th>
                                            <th style={{ borderRight: '1px solid white' }}>{mantriparishad[checkLang].position}</th>
                                            <th>{mantriparishad[checkLang].account}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. नारायण तातू राणे</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>उद्योग, बंदरे आणि रोजगार व स्वयंरोजगार. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. छगन चंद्रकांत भुजबळ</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>सार्वजनिक बांधकाम (सार्वजनिक उपक्रम वगळून) आणि पर्यटन</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">
                                                    श्री. रावसाहेब रामराव पाटील ऊर्फ आर. आर. पाटील.
                                                </span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>गृह. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">डॉ. पतंगराव श्रीपतराव कदम</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>वने, पुनवर्सन व मदत कार्य आणि भूकंप पुनर्वसन. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. शिवाजीराव शिवरामजी मोघे</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    सामाजिक न्याय, विमुक्‍त/मटक्‍्या जमाती व इतर मागासवर्गीय कल्याण आणि
                                                    व्यसनमुक्ती कार्य
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">
                                                    श्री. राधाकृष्ण एकनाथराव विखे-पाटील
                                                </span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>कृषी व पणन, </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. जयंत राजाराम पाटील</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>ग्रामविकास. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. हर्षवर्धन शहाजीराव पाटील</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>सहकार आणि संसदीय कार्य. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. गणेश रामचंद्र नाईक</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>राज्य उत्पादन शुल्क आणि अपारंपरिक ऊर्जा. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">
                                                    श्री. विजय ऊर्फ बाळासाहेब भाऊसाहेब थोरात
                                                </span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>महसूल व खार जमीन. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">प्रा. लक्ष्मण कोंडिबा ढोबळे</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>पाणीपुरवठा व स्वच्छता. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. अनिल वसंतराव देशमुख</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>अन्न व नागरी पुरवठा आणि ग्राहक संरक्षण. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. जयदत्त सोनाजीराव क्षीरसागर</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>सार्वजनिक बांधकाम (सार्वजनिक उपक्रम). </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. मनोहरराव राजूसिंग नाईक</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>अन्न व औषध प्रशासन. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">डॉ. विजयकुमार कृष्णराव गावित</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>वैद्यकीय शिक्षण आणि फलोत्पादन, </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. सुनील दत्तात्रय तटकरे</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>जलसंपदा (कृष्णा खोरे-पाटबंधारे महामंडळ वगळून). </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">
                                                    श्री.रामराजे प्रतापसिह नाईक-निंबाळकर
                                                </span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>जलसंपदा (कृष्णा खोरे-पाटबंधारे महामंडळ). </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. बबनराव भिकाजी पाचपुते</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>आदिवासी विकास. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. राजेश अंकुशराव टोपे</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>उच्च व तंत्रशिक्षण, </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. राजेंद्र जवाहरलाल दर्डा</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>शालेय शिक्षण, </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री.मोहम्मद आरीफ (नसीम) खान</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>वस्त्रोद्योग, अल्पसंख्याक विकास आणि औकाफ </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री.सुरेश हिरायेन्ना शेट्टी</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>सार्वजनिक आरोग्य व कुटुंब कल्याण आणि राजशिष्टाचार.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री.हसन मियालाल मुश्रीफ</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>कामगार आणि विशेष साहाय्य. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">डॉ. नितीन काशिनाथ राऊत</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>रोजगार हमी योजना आणि जलसंधारण. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री.मधुकरराव देवराव चव्हाण</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>पशुसंवर्धन, दुग्धविकास व मत्स्यव्यवसाय. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री.पद्माकर विजयसिंग वळवी</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>क्रीडा व युवक कल्याण. </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">
                                                    प्रा. (श्रीमती) वर्षा एकनाथ गायकवाड
                                                </span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>महिला व बालविकास, </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री.संजय वामनराव देवतळे</span>
                                            </td>
                                            <td>
                                                <span>मंत्री </span>
                                            </td>
                                            <td>
                                                <span>पर्यावरण आणि सांस्कृतिक कार्य. </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="mantri">
                        <div className="panel panel-primary">
                            <div className="panel-heading">{mantriparishad[checkLang].stateminister}</div>
                            <div className="panel-body">
                                <table id="tech-companies-1" className="table table-striped">
                                    <thead className="thead-dark" style={{ backgroundColor: "#000088" }}>
                                        <tr>
                                            <th style={{ borderRight: '1px solid white' }}>{mantriparishad[checkLang].membername}</th>
                                            <th style={{ borderRight: '1px solid white' }}>{mantriparishad[checkLang].position}</th>
                                            <th>{mantriparishad[checkLang].account}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. रणजीत प्रतापराव कांबळे</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    पाणीपुरवठा आणि स्वच्छता, अन्न व नागरी पुरवठा, ग्राहक संरक्षण, पर्यटन
                                                    आणि सार्वजनिक उपक्रम,
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. भास्कर भाऊराव जाधव</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    नगरविकास, वने, बंदरे, खारजमीन, संसदीय कार्य, क्रीडा व युवक कल्याण,
                                                    माजी सैनिकांचे कल्याण आणि विधी व न्याय.
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. प्रकाश सुंदरराव सोळंके</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    महसूल, पुनर्वसन व मदत कार्य, भूकंप पुनर्वसन, सहकार पणन व
                                                    वस्त्रोद्योग.
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. सचिन मोहन अहिर</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    गृहनिर्माण, गलिच्छ वस्ती सुधारणा, घर दुरुस्ती व पुनर्बांधणी, नागरी
                                                    जमीन कमाल धारणा, उद्योग, खनिकर्म, सामाजिक न्याय, व्यसनमुक्ती कार्य,
                                                    पर्यावरण आणि विमुक्त भटक्या जमाती व इतर मागासर्गीयांचे कल्याण.
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">प्रा. (श्रीमती) फौजिया तहसीन खान</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    सामान्य प्रशासन, माहिती व जनसंपर्क, सांस्कृतिक कार्य, राजशिष्टाचार,
                                                    शालेय शिक्षण, महिला व बालविकास, सार्वजनिक आरोग्य व कुटुंब कल्याण आणि
                                                    अल्पसंख्याक विकास (औकाफसह).
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. गुलाबराव बाबुराव देवकर</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    कृषी, पशुसंवर्धन, दुग्धविकास, मत्स्यव्यवसाय, जलसंधारणे, रोजगार हमी
                                                    योजना, रोजगार व स्वयंरोजगार आणि परिवहन.
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. सतेज ऊर्फ बंटी डी. पाटील</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    गृह (शहरे), गृह (ग्रामीण), ग्रामविकास आणि अन्न व औषध प्रशासन.
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. राजेंद्र भाऊसाहेब मुळक</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    वित्त, ऊर्जा, नियोजन, जलसंपदा, संसदीय कार्य आणि राज्य उत्पादन शुल्क.
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. राजेंद्र डी. गावित</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    आदिवासी विकास, कामगार, पाणलोट क्षेत्र, विकास आणि फलोत्पादन
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="member-tabless">श्री. डी. पी. सावंत</span>
                                            </td>
                                            <td>
                                                <span>राज्यमंत्री </span>
                                            </td>
                                            <td>
                                                <span>
                                                    वैद्यकीय शिक्षण, उच्च व तंत्रशिक्षण, विशेष साहाय्य आणि अपारंपरिक
                                                    ऊर्जा.
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default MantriParishad
