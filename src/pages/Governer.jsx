import { Accordion, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ImageUrl, getApi } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";

import Arrow from "../assets/debate/arrow.svg";

const Governer = () => {

    const [serverCurrent, setServerCurrent] = useState([]);
    const { checkLang } = useLang();

    const fetchData = async () => {
        try {
            const activeRes = await getApi(`/rajyapal?isCurrent=${true}`);
            setServerCurrent(activeRes.data.data[0]);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(serverCurrent[checkLang])
    return (
        <div>
            <section className="rajypallist">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="breadcumbsss">
                                <div className="countdebate"><Link to="/"><span> Home </span></Link>
                                    <img src={Arrow} alt="" /><span>Rajyapal</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="aboutcontent mt-4">
                        <h1>राज्यपाल<div className="hrline"></div></h1>
                    </div>
                    <Row>
                        <Col lg={9}>
                            <div className="rajyapalcontent">
                                <Row style={{ justifyContent: 'space-between' }}>
                                    <Col lg={3}>
                                        {serverCurrent?.image && <img className="w-100" src={ImageUrl + serverCurrent?.image["destination"] + "/" + serverCurrent?.image["filename"]} alt="about" />}
                                    </Col>
                                    <Col lg={8}>
                                        <h2><span>नाव: </span>{serverCurrent[checkLang]?.name}</h2>
                                        <h2><span>निवडलेली तारीख: </span>{serverCurrent[checkLang]?.elected_date}</h2>
                                        <h2><span>लिंग: </span>{serverCurrent[checkLang]?.gender}</h2>
                                        <h2><span>जन्म दिनांक: </span>{serverCurrent.date_of_birth}</h2>
                                        <h2><span>जन्म ठीकाण: </span>{serverCurrent[checkLang]?.place_of_birth}</h2>
                                    </Col>
                                </Row>
                                <h4>राजकीय कारकीर्द:</h4>
                                <p className="contentrajyapal" dangerouslySetInnerHTML={{ __html: serverCurrent[checkLang]?.political_career }} ></p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="governersidebar">
                                <h3>मा. राज्यपालांचे अभिभाषण</h3>
                                <Accordion defaultActiveKey="0">
                                    {serverCurrent.speeches?.length > 0 && serverCurrent?.speeches.map((item, index) => (
                                        <Accordion.Item key={index} eventKey={index + 1}>
                                            <Accordion.Header>{item.year.split("-")[0]}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    {item.values?.map((i, n) => (
                                                        <li key={n} className="mb-1">
                                                            <a href={
                                                                ImageUrl +
                                                                i.content.destination +
                                                                "/" +
                                                                i.content.filename
                                                            }>
                                                                {i.language}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    ))}
                                </Accordion>
                                <div className="governerlink">
                                    <Link to="/GovernerList">माजी राज्यपाल</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </div >
    )
}

export default Governer
