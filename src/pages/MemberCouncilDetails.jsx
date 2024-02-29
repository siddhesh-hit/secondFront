import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Arrow from "../assets/debate/arrow.svg";
import print from "../assets/print.svg"
import download from "../assets/download.svg"
import PaginationComponent from "../components/Pagination";
import MemberCouncilProfile from "./MemberCouncilProfile";

import useLang from "../hooks/useLang"
import { ImageUrl, getApi, getApiById } from "../services/axiosInterceptors";

const MemberCouncilDetails = () => {
    const [current, setCurrent] = useState({});
    const [Debate, setDebate] = useState({
        data: [],
        count: 0,
    });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit, setPageLimit] = useState(10);

    const { lang, checkLang } = useLang();
    const { id } = useParams()

    const fetchDataById = async () => {
        await getApiById("member", id)
            .then((res) => setCurrent(res.data.data))
            .catch((err) => console.log(err));
    }

    const fetchDebateById = async (name) => {
        await getApi(`debate/fields?perPage=${currentPage}&perLimit=${pageLimit}&members_name=${name}`)
            .then((res) => setDebate({ data: res.data.data, count: res.data.count }))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchDataById();
    }, [id]);

    useEffect(() => {
        current.basic_info && current.basic_info.name && fetchDebateById(current.basic_info.name);
    }, [current, currentPage]);

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
                                        <MemberCouncilProfile name={current?.basic_info?.name} memberprofile={ImageUrl + current?.basic_info?.profile?.destination + "/" + current?.basic_info?.profile?.filename} />
                                    </Col>
                                    <Col lg={6}>
                                        <div className="basic-info-data">
                                            <p>मतदारसंघ : <span>{current?.basic_info?.constituency + " " + current?.basic_info?.district}</span></p>
                                            <p>राजकीय पक्ष	:  <span>{current?.basic_info?.party}</span></p>
                                            <p>जन्म तारीख  : <span>{current?.basic_info?.date_of_birth}</span></p>
                                            <p>जन्म स्थान	: <span>{current?.basic_info?.place_of_birth}</span></p>
                                            <p>शिक्षण  : <span>{current?.basic_info?.education}</span></p>
                                            <p>छंद  :<span> {current?.basic_info?.hobby}</span></p>
                                            <p>वैवाहिक स्थिती	:  <span> {current?.basic_info?.marital_status}</span></p>
                                            <p>अपत्ये	:  <span> {current?.basic_info?.children}</span></p>
                                            <p>ज्ञात भाषा	:  <span> {current?.basic_info?.language}</span></p>
                                            <p>व्यवसाय	:  <span> {current?.basic_info?.business}</span></p>
                                            <p>सध्याचा पत्ता :</p>
                                            <h6> {current?.basic_info?.address}</h6>
                                            <p>कायमचा पत्ता :</p>
                                            <h6> {current?.basic_info?.foreign_migration}</h6>
                                        </div>
                                    </Col >
                                </Row >
                            </div >
                        </Tab >
                        <Tab eventKey="राजकीय प्रवास" title="राजकीय प्रवास">
                            <div className="basic-information">
                                <Row>
                                    <Col lg={3} className="memberproifleimg">
                                        <MemberCouncilProfile name={current?.basic_info?.name} memberprofile={ImageUrl + current?.basic_info?.profile?.destination + "/" + current?.basic_info?.profile?.filename} />
                                    </Col>
                                    <Col lg={6}>
                                        <div className="political-travel">
                                            <ul>
                                                {current?.political_journey?.map((item, index) => (
                                                    <li key={index}>{item?.date}; {item?.title}</li>
                                                ))}
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
                                        <MemberCouncilProfile name={current?.basic_info?.name} memberprofile={ImageUrl + current?.basic_info?.profile?.destination + "/" + current?.basic_info?.profile?.filename} />
                                    </Col>
                                    <Col lg={9}>
                                        <div className="dataofelec">
                                            <h3>निवडणूक निकाल</h3>
                                            <p>{current?.election_data?.constituency + " "}</p>
                                            <Row className="counting">
                                                <Col lg={4}>
                                                    <p>• <b>एकूण मतदार :</b>{current?.election_data?.total_electorate + " "}</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <p>• <b>एकूण वैध मतदान :</b>{current?.election_data?.total_valid_voting + " "}</p>
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
                                                {current?.election_data?.member_election_result.length > 0 && current?.election_data?.member_election_result?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item?.candidate_name}</td>
                                                        <td>{item?.votes}</td>
                                                        <td>{item?.party}</td>
                                                    </tr>
                                                ))
                                                }
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
                                        <MemberCouncilProfile name={current?.basic_info?.name} memberprofile={ImageUrl + current?.basic_info?.profile?.destination + "/" + current?.basic_info?.profile?.filename} />
                                    </Col>
                                    <Col lg={9}>
                                        <table className="table-lightt table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th >क्रमांक</th>
                                                    <th >विषय</th>
                                                    <th >सभागृह</th>
                                                    <th >अधिवेशन</th>
                                                    <th >तारीख</th>
                                                    <th>तपशील</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Debate?.data?.length > 0 && Debate?.data?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item?.topic}</td>
                                                        <td>{item?.house}</td>
                                                        <td>{item?.session}</td>
                                                        <td>{item?.date}</td>
                                                        <td>
                                                            <Link to={`/DebateDetails?id=${item._id}`}><span> <i className="fa fa-eye"></i></span></Link>
                                                        </td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                        </table>
                                        {Debate?.data?.length > 0 && (
                                            <PaginationComponent
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}
                                                pageLimit={pageLimit}
                                                totalCount={Debate?.count}
                                            />
                                        )}
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
