import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getApi } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";

import Arrow from "../assets/debate/arrow.svg";

const GovernerList = () => {

    const [serverActive, setServerActive] = useState([]);
    const { checkLang } = useLang();

    const fetchData = async () => {
        try {
            const activeRes = await getApi(`/rajyapal?isActive=${true}`);
            setServerActive(activeRes.data.data);
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
                                <div className="countdebate"><Link to="/"><span> Home </span></Link>
                                    <img src={Arrow} alt="" /><span>Rajyapal List</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="aboutcontent mt-4"><h1>राज्यपालांची यादी<div className="hrline"></div></h1></div>
                    <table className="table-rajyapal table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th style={{ borderRight: 'solid #dee2e6 1px' }}>अनुक्रमांक</th>
                                <th style={{ borderRight: 'solid #dee2e6 1px' }}>राज्यपालांचे नाव</th>
                                <th style={{ borderRight: 'solid #dee2e6 1px' }}>निवडलेली_तारीख</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serverActive.length > 0 &&
                                serverActive.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span>{index + 1}</span>
                                        </td>
                                        <td>
                                            <span className="member-tabless">
                                                {item[checkLang].name}
                                            </span>
                                        </td>
                                        <td>
                                            <span>{item[checkLang].elected_date} </span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </Container>
            </section>
        </div>
    )
}

export default GovernerList
