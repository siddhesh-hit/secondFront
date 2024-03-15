import { Accordion, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { ImageUrl, getApi, getApiById } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";
import Arrow from "../assets/debate/arrow.svg";
import { governor } from "../data/constant";
const Governer = () => {
    const location = useLocation().search.split("=")[1];
    const [serverCurrent, setServerCurrent] = useState([]);
    const { checkLang } = useLang();

    const fetchData = async () => {
        try {
            const activeRes = location ?
                await getApiById(`/rajyapal`, location).then(res => {
                    if (res.data.success) {
                        setServerCurrent(res.data.data)
                    }
                }).catch(err => console.log(err))
                :
                await getApi(`/rajyapal?isCurrent=${true}`).then(res => {
                    if (res.data.success) {
                        setServerCurrent(res.data.data[0])
                    }
                }).catch(err => console.log(err))
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <section className="rajypallist">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="breadcumbsss">
                                <div className="countdebate"><Link to="/"><span> {governor[checkLang].link1} </span></Link>
                                    <img src={Arrow} alt="" /><span>{governor[checkLang].title}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="aboutcontent mt-4">
                        <h1>{governor[checkLang].title}<div className="hrline"></div></h1>
                    </div>
                    <Row>
                        <Col lg={9}>
                            <div className="rajyapalcontent">
                                <Row style={{ justifyContent: 'space-between' }}>
                                    <Col lg={3}>
                                        {serverCurrent?.image && <img className="w-100" src={ImageUrl + serverCurrent?.image["destination"] + "/" + serverCurrent?.image["filename"]} alt="about" />}
                                    </Col>
                                    <Col lg={8}>
                                        <h2><span>{governor[checkLang].name} : </span>{serverCurrent[checkLang]?.name}</h2>
                                        <h2><span>{governor[checkLang].selectdate} : </span>{serverCurrent[checkLang]?.elected_date}</h2>
                                        <h2><span>{governor[checkLang].gender} : </span>{serverCurrent[checkLang]?.gender}</h2>
                                        <h2><span>{governor[checkLang].dob} : </span>{serverCurrent.date_of_birth}</h2>
                                        <h2><span>{governor[checkLang].birth} : </span>{serverCurrent[checkLang]?.place_of_birth}</h2>
                                    </Col>
                                </Row>
                                <h4>{governor[checkLang].politicalcareer}</h4>
                                <p className="contentrajyapal" dangerouslySetInnerHTML={{ __html: serverCurrent[checkLang]?.political_career }} ></p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="governersidebar">
                                <h3>{governor[checkLang].gov}</h3>
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
                                    <Link to="/GovernerList">{governor[checkLang].forgov}</Link>
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
