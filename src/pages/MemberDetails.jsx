import { useState, useEffect } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import Arrow from "../assets/debate/arrow.svg";
import print from "../assets/print.svg";
import download from "../assets/download.svg";
import useLang from "../hooks/useLang";
import MemberAssemblyProfile from "./MemberAssemblyProfile";
import { ImageUrl, getApi, getApiById } from "../services/axiosInterceptors";
import PaginationComponent from "../components/Pagination";
import { memberdetails } from "../data/constant";

const MemberAssemblyDetails = () => {
  const [current, setCurrent] = useState({});
  const [Debate, setDebate] = useState({
    data: [],
    count: 0,
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const { lang, checkLang } = useLang();
  const { id } = useParams();

  const fetchDataById = async () => {
    await getApiById("member", id)
      .then((res) => setCurrent(res.data.data))
      .catch((err) => console.log(err));
  };

  const fetchDebateById = async (name) => {
    await getApi(
      `debate/fields?members_name=${name}&perPage=${currentPage}&perLimit=${pageLimit}`
    )
      .then((res) => setDebate({ data: res.data.data, count: res.data.count }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDataById();
  }, [id]);

  useEffect(() => {
    current.basic_info &&
      current.basic_info.name &&
      fetchDebateById(current.basic_info.name);
  }, [current, currentPage]);

  return (
    <div className="memberassemdetails">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="breadcumbsss">
              <div className="countdebate">
                <Link to="/">
                  <span>{memberdetails[checkLang].home}</span>
                </Link>
                <Link to="/members">
                  <img src={Arrow} alt="" />
                  <span>{memberdetails[checkLang].title1}</span>
                </Link>
                <img src={Arrow} alt="" />
                <span>{memberdetails[checkLang].title}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="memberdetailscontent">
          <h3>{memberdetails[checkLang].title}</h3>
          <div className="downloadd">
            <Link to="/">
              <img src={print} alt="" />
            </Link>
            <Link to="/">
              <img src={download} alt="" />
            </Link>
          </div>
          <Tabs
            defaultActiveKey="मुलभूत माहिती"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="मुलभूत माहिती" title={memberdetails[checkLang].basic}>
              <div className="basic-information">
                <Row>
                  <Col lg={3} className="memberproifleimg">
                    <MemberAssemblyProfile
                      name={current?.basic_info?.name}
                      memberprofile={
                        ImageUrl +
                        current?.basic_info?.profile?.destination +
                        "/" +
                        current?.basic_info?.profile?.filename
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <div className="basic-info-data">
                      <p>
                        मतदारसंघ :{" "}
                        <span>
                          {
                            current.basic_info && current.basic_info.constituency ? current.basic_info.constituency.council.constituency_name !== '' ? current.basic_info.constituency.council.constituency_name : current.basic_info.constituency.assembly.constituency_name !== '' ? current.basic_info.constituency.assembly.constituency_name : current.basic_info.constituency.assembly.constituency_name : "" +
                              " " +
                              current?.basic_info?.district ? current?.basic_info?.district?.checkLang?.district : ""}
                        </span>
                      </p>
                      <p>
                        राजकीय पक्ष : <span>{current.basic_info && current.basic_info.party ? current.basic_info.party[checkLang]["party_name"] : ""}</span>
                      </p>
                      <p>
                        जन्म तारीख :{" "}
                        <span>{current?.basic_info?.date_of_birth}</span>
                      </p>
                      <p>
                        जन्म स्थान :{" "}
                        <span>{current?.basic_info?.place_of_birth}</span>
                      </p>
                      <p>
                        शिक्षण : <span>{current?.basic_info?.education}</span>
                      </p>
                      <p>
                        छंद :<span> {current?.basic_info?.hobby}</span>
                      </p>
                      <p>
                        वैवाहिक स्थिती :{" "}
                        <span> {current?.basic_info?.marital_status}</span>
                      </p>
                      <p>
                        अपत्ये : <span> {current?.basic_info?.children}</span>
                      </p>
                      <p>
                        ज्ञात भाषा :{" "}
                        <span> {current?.basic_info?.language}</span>
                      </p>
                      <p>
                        व्यवसाय : <span> {current?.basic_info?.business}</span>
                      </p>
                      <p>सध्याचा पत्ता :</p>
                      <h6> {current?.basic_info?.address}</h6>
                      <p>कायमचा पत्ता :</p>
                      <h6> {current?.basic_info?.foreign_migration}</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="राजकीय प्रवास" title={memberdetails[checkLang].travel}>
              <div className="basic-information">
                <Row>
                  <Col lg={3} className="memberproifleimg">
                    <MemberAssemblyProfile
                      name={current?.basic_info?.name}
                      memberprofile={
                        ImageUrl +
                        current?.basic_info?.profile?.destination +
                        "/" +
                        current?.basic_info?.profile?.filename
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <div className="political-travel">
                      <ul>
                        {current?.political_journey?.map((item, index) => (
                          <li key={index}>
                            {item?.date}; {item?.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="निवडणूक डेटा" title={memberdetails[checkLang].electiondata}>
              <div className="electiondata">
                <Row>
                  <Col lg={3} className="memberproifleimg">
                    <MemberAssemblyProfile
                      name={current?.basic_info?.name}
                      memberprofile={
                        ImageUrl +
                        current?.basic_info?.profile?.destination +
                        "/" +
                        current?.basic_info?.profile?.filename
                      }
                    />
                  </Col>
                  <Col lg={9}>
                    <div className="dataofelec">
                      <h3>{memberdetails[checkLang].electionres}</h3>
                      <p>{current.election_data && current.election_data.constituency && current.election_data.constituency ? current.election_data.constituency.council.constituency_name !== '' ? current.election_data.constituency.council.constituency_name : current.election_data.constituency.assembly.constituency_name !== '' ? current.election_data.constituency.assembly.constituency_name : current.election_data.constituency.assembly.constituency_name : "" +
                        " " + " "}</p>
                      <Row className="counting">
                        <Col lg={4}>
                          <p>
                            • <b>{memberdetails[checkLang].totalelec} : </b>
                            {current?.election_data?.total_electorate + " "}
                          </p>
                        </Col>
                        <Col lg={4}>
                          <p>
                            • <b>{memberdetails[checkLang].validvote} : </b>
                            {current?.election_data?.total_valid_voting + " "}
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <h4>{memberdetails[checkLang].firstfive}</h4>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th style={{ borderRight: "solid white 1px" }}>
                            {memberdetails[checkLang].srno}
                          </th>
                          <th style={{ borderRight: "solid white 1px" }}>
                            {memberdetails[checkLang].candi}
                          </th>
                          <th style={{ borderRight: "solid white 1px" }}>
                            {memberdetails[checkLang].votes}
                          </th>
                          <th style={{ borderRight: "solid white 1px" }}>
                            {memberdetails[checkLang].party}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {current?.election_data?.member_election_result.length >
                          0 &&
                          current?.election_data?.member_election_result?.map(
                            (item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item?.candidate_name}</td>
                                <td>{item?.votes}</td>
                                <td>{item.party ? item.party[checkLang]["party_name"] : ""}</td>
                              </tr>
                            )
                          )}
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="सभागृहांचे कार्यवृत्त" title={memberdetails[checkLang].debate}>
              <div className="debatetalked">
                <Row>
                  <Col lg={3} className="memberproifleimg">
                    <MemberAssemblyProfile
                      name={current?.basic_info?.name}
                      memberprofile={
                        ImageUrl +
                        current?.basic_info?.profile?.destination +
                        "/" +
                        current?.basic_info?.profile?.filename
                      }
                    />
                  </Col>
                  <Col lg={9}>
                    <table className="table-lightt table table-bordered responsive-table">
                      <thead>
                        <tr>
                          <th style={{ borderRight: "solid white 1px", width: '10%' }}>{memberdetails[checkLang].srno}</th>
                          <th style={{ borderRight: "solid white 1px" }}>{memberdetails[checkLang].topic}</th>
                          <th style={{ borderRight: "solid white 1px" }}>{memberdetails[checkLang].house}</th>
                          <th style={{ borderRight: "solid white 1px" }}>{memberdetails[checkLang].session}</th>
                          <th style={{ borderRight: "solid white 1px" }}>{memberdetails[checkLang].date}</th>
                          <th style={{ borderRight: "solid white 1px" }}>{memberdetails[checkLang].details}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Debate?.data?.length > 0 &&
                          Debate?.data?.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item?.topic}</td>
                              <td>{item?.house}</td>
                              <td>{item?.session}</td>
                              <td>{item?.date}</td>
                              <td>
                                <Link style={{ color: 'black' }} to={`/DebateDetails?id=${item._id}`}>
                                  <span>
                                    {" "}
                                    <i className="fa fa-eye"></i>
                                  </span>
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {Debate?.data?.length > 0 && (
                      <PaginationComponent
                        totalCount={Debate?.count}
                        perPage={pageLimit}
                        handlePageChange={(cp) => {
                          setCurrentPage(cp)
                        }}
                        initialPage={currentPage}
                      // currentPage={currentPage}
                      // setCurrentPage={setCurrentPage}
                      // pageLimit={pageLimit}
                      // totalCount={debate?.count}
                      />
                    )}
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default MemberAssemblyDetails;