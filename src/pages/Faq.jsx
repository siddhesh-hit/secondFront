import { Accordion, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Arrow from "../assets/debate/arrow.svg";
import { useEffect, useState } from "react";
import { getApi } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";
import { faqs } from "../data/constant";
const Faq = () => {
    const [newData, setNewData] = useState({});
    const { lang, checkLang } = useLang();
    const fetchData = async () => {
        await getApi("faq")
            .then((res) => {
                setNewData(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <section className="commonbg">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="breadcumbsss">
                                <div className="countdebate"><Link to="/"><span>{faqs[checkLang].home}</span></Link>
                                    <img src={Arrow} alt="" /><span>{faqs[checkLang].title}</span>
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
                            {faqs[checkLang].title}
                            <div className="hrline"></div>
                        </h1>
                    </div>
                    <Accordion className="faqssection" defaultActiveKey="0">
                        {
                            newData?.length > 0 && newData.map((section, index) => (
                                <Accordion.Item key={index} eventKey={index + 1}>
                                    <Accordion.Header>{section[checkLang]?.question}</Accordion.Header>
                                    <Accordion.Body dangerouslySetInnerHTML={{ __html: section[checkLang]?.answer }}>
                                    </Accordion.Body>
                                </Accordion.Item>

                            ))
                        }
                    </Accordion>
                </Container>
            </section>
        </div >
    )
}

export default Faq
