import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Arrow from "../assets/debate/arrow.svg";
import assembly from "../assets/council/22.jpg";
import graph from "../assets/card.png";
import biographparty from "../assets/council/2.jpg";

import { ImageUrl, getApi } from "../services/axiosInterceptors";
import useLang from "../hooks/useLang";
import { vidhanassembly } from "../data/constant";
const LegislativeCouncil = () => {
    const [serverData, setServerData] = useState({});
    const { checkLang } = useLang();
    const fetchData = async () => {
        try {
            await getApi(`parishad?isActive=${true}`).then((res) => {
                const newData = res.data.data[0];
                setServerData(newData);
            });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="legislative-assembly">
            <Container fluid className="legislative-assembly-content">
                <Row>
                    <Col lg={3}>
                        <div className="breadcumbsss">
                            <div className="countdebate"><Link to="/"><span>{vidhanassembly[checkLang].home} </span></Link>
                                <img src={Arrow} alt="" /><span>{vidhanassembly[checkLang].title1}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Col lg={12}>
                    <div className="aboutcontent mt-4">
                        <h1>
                            {vidhanassembly[checkLang].title1}
                            <div className="hrline"></div>
                        </h1>
                    </div>
                </Col>
                <Row>
                    <Col lg={3}>
                        <div className="left-sidebar-assembly">
                            <div style={{ width: "100%" }}>
                                <img
                                    src="https://mlsapi.sblcorp.com/images/parishad/1702961896680-parishad-parishad (1).jpg"
                                    className="w-100"
                                />
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: serverData[checkLang]?.description }} ></p>
                            <hr />
                            <div className="text-center mb-3">
                                <h2
                                    className="bio-head"
                                >
                                    {vidhanassembly[checkLang].public}
                                    <div className="hrline"></div>
                                </h2>

                            </div>
                            <div className="importantnotes">
                                <h6>
                                    १. भारताचे संविधान (
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        मराठी
                                    </a>{" "}
                                    /
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        इंग्रजी
                                    </a>
                                    )
                                </h6>
                                <h6>
                                    २. विधान परिषद नियम पुस्तिका(
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        मराठी
                                    </a>
                                    /
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        इंग्रजी
                                    </a>
                                    )
                                </h6>
                                <h6>
                                    ३. सभापतींनी दिलेले निदेश(
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        मराठी
                                    </a>
                                    /
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        इंग्रजी
                                    </a>
                                    )
                                </h6>
                                <h6>
                                    ४. महाराष्ट्र विधानपरिषद सदस्य ( पक्षांतराच्या कारणावरून निरर्हता ) नियम
                                    १९८६(
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        मराठी
                                    </a>
                                    /
                                    <a href="/LegislativeCouncil" style={{ textDecoration: "none" }}>
                                        इंग्रजी
                                    </a>
                                    )
                                </h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="centerdiv">
                        <Row>
                            {
                                serverData[checkLang]?.legislative_council?.length > 0 && serverData[checkLang]?.legislative_council.map((section, index) => {
                                    return (
                                        index < 2 ?
                                            <div key={index}>
                                                <Row>
                                                    <Col lg={4}>
                                                        <div className="img-boxing">
                                                            <img
                                                                alt="img"
                                                                src={ImageUrl + serverData?.legislative_council[index].council_profile["destination"] + "/" + serverData?.legislative_council[index].council_profile["filename"]}
                                                                style={{ width: "100%" }}
                                                            />
                                                            <div className="box-bottom-text">
                                                                <h3 className="nameHead">{section.council_name}</h3>
                                                                <p className="name-info" dangerouslySetInnerHTML={{ __html: section.council_description }}></p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            :
                                            <Col lg={4} key={index}>
                                                <div className="img-boxing">
                                                    <img
                                                        alt="img"
                                                        src={ImageUrl + serverData?.legislative_council[index].council_profile["destination"] + "/" + serverData?.legislative_council[index].council_profile["filename"]}
                                                        style={{ width: "100%" }}
                                                    />
                                                    <div className="box-bottom-text">
                                                        <h3 className="nameHead">{section.council_name}</h3>
                                                        <p className="name-info" dangerouslySetInnerHTML={{ __html: section.council_description }}></p>
                                                    </div>
                                                </div>
                                            </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <div className="right-side-assembly">
                            <div
                                className="box-shadow text-center justify-content-center "
                            >
                                <div className="text-center mb-3">
                                    <h2
                                        className="bio-head"
                                    >
                                        रचना
                                        <div className="hrline"></div>
                                    </h2>

                                </div>
                                <div>
                                    <img
                                        src={graph}
                                        style={{ width: "110px", marginBottom: '30px', marginTop: '10px' }}
                                        alt="Member"
                                    />
                                </div>
                                <h4 className="subtitle-name">{serverData[checkLang]?.structure.name}</h4>
                                <h4 className="subtitle-name">{vidhanassembly[checkLang].type} - {serverData[checkLang]?.structure.type} </h4>
                                <h4 className="subtitle-name">{vidhanassembly[checkLang].limit} - {serverData[checkLang]?.structure.term_limit}</h4>
                                <h4 className="subtitle-name">{vidhanassembly[checkLang].place}- {serverData[checkLang]?.structure.seats}</h4>
                                <hr />
                                <div className="text-center mb-3">
                                    <h2
                                        className="bio-head"
                                    >
                                        {vidhanassembly[checkLang].bio}
                                        <div className="hrline"></div>
                                    </h2>
                                </div>
                                <div className="linkcouncil">
                                    <a href="/LegislativeCouncil">
                                        {vidhanassembly[checkLang].partywise}
                                    </a>
                                </div>
                                <img
                                    src={biographparty}
                                    style={{ width: "80%" }}
                                />
                                <h3 className="political-groups">
                                    {vidhanassembly[checkLang].pgroup}
                                </h3>
                                <img
                                    src={assembly}
                                    alt="img"
                                    style={{ width: "40%" }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LegislativeCouncil
