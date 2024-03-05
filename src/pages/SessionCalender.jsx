import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";
import useLang from "../hooks/useLang";

import { ImageUrl, getApi } from "../services/axiosInterceptors";
import ReactDatePicker from "react-datepicker";

const SessionCalender = () => {
  const [session, setSession] = useState([]);
  const [years, setYears] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sorted, setSorted] = useState(false);

  const [search, setSearch] = useState({
    topic: "",
    house: "विधानसभा",
    session: "",
    year: "",
  });
  const [options, setOptions] = useState({
    session: [],
    houses: [],
    year: [],
  });

  const { lang, checkLang } = useLang();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setSearch((prev) => ({
      ...prev,
      party: "",
      constituency: "",
      surname: "",
      district: "",
      gender: "",
      ministry_name: "",
    }));

    sessionFetch();
  };

  const handleStart = () => {
    setSearch((prev) => ({
      ...prev,
      topic: "",
      members_name: "",
      house: "विधानसभा",
      session: "",
      party: "",
      constituency: "",
      surname: "",
      district: "",
      gender: "",
      ministry_name: "",
    }));
    sessionFetch();
  };

  const handleSort = () => {
    if (sorted) {
      const newsession = session.data.sort((a, b) =>
        b.topic.localeCompare(a.topic)
      );
      setSession(newsession);
      setSorted(!sorted);
    } else {
      const newsession = session.data.sort((a, b) =>
        a.topic.localeCompare(b.topic)
      );
      setSession(newsession);
      setSorted(!sorted);
    }
  };

  const sessionFetch = async () => {
    // console.log(currentPage, pageLimit);
    let house =
      search.house === "एकत्रित"
        ? ""
        : search.house === "विधानसभा"
        ? "Assembly"
        : search.house === "विधानपरिषद"
        ? "Council"
        : "";
    await getApi(
      `session?perPage=${currentPage}&perLimit=${pageLimit}&houses=${house}&topic_name=${search.topic}&session=${search.session}&year=${search.year}`
    )
      .then((res) => setSession(res.data.data))
      .catch((err) => console.log(err));
  };

  useMemo(() => {
    let current = new Date().getFullYear();
    let year = [];
    for (let i = 1937; i < current; i++) {
      year.push(i);
    }
    setYears(year);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getApi("session/option?id=" + checkLang + ".session")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              session: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("session/option?id=houses")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              houses: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("session/option?id=year")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              year: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      // await getApi("session/option?id=basic_info.district")
      //     .then((res) => {
      //         if (res.data.success) {
      //             setOptions((prev) => ({
      //                 ...prev,
      //                 district: res.data.data,
      //             }));
      //         }
      //     })
      //     .catch((err) => console.log(err));

      // await getApi("session/option?id=basic_info.gender")
      //     .then((res) => {
      //         if (res.data.success) {
      //             setOptions((prev) => ({
      //                 ...prev,
      //                 gender: res.data.data,
      //             }));
      //         }
      //     })
      //     .catch((err) => console.log(err));
    };
    fetchData();
  }, [checkLang]);

  useEffect(() => {
    sessionFetch();
  }, [search.members_name, search.house, currentPage, pageLimit]);

  console.log(search);

  return (
    <div>
      <Container fluid className="debatepage">
        <Row>
          <Col lg={3}>
            <div className="filters">
              <div className="firstfilter mb-4">
                <h3>Filter</h3>
                <Accordion
                  className="filsss"
                  defaultActiveKey={["0", "1", "2"]}
                  alwaysOpen
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>सभागृह</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck1">
                          <label>विधानसभा</label>
                          <Form.Check
                            aria-label="option 1"
                            name="house"
                            value="विधानसभा"
                            onChange={handleChange}
                            checked={search.house === "विधानसभा"}
                          />
                        </div>
                        <div className="datacheck1">
                          <label>विधानपरिषद</label>
                          <Form.Check
                            aria-label="option 2"
                            name="house"
                            value="विधानपरिषद"
                            onChange={handleChange}
                            checked={search.house === "विधानपरिषद"}
                          />
                        </div>
                        <div className="datacheck1">
                          <label>एकत्रित</label>
                          <Form.Check
                            aria-label="option 3"
                            name="house"
                            value="एकत्रित"
                            onChange={handleChange}
                            checked={search.house === "एकत्रित"}
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>अधिवेशन</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        {options?.session?.map((item, index) => (
                          <React.Fragment key={index}>
                            <div className="datacheck1">
                              <label> {item}</label>
                              <Form.Check
                                aria-label="option 7"
                                name="session"
                                value={item}
                                onChange={handleChange}
                              />
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Year Select</Accordion.Header>
                    <Accordion.Body>
                      <select
                        className="form-control select2"
                        name="year"
                        value={search.year}
                        onChange={handleChange}
                      >
                        <option hidden>Select Year</option>
                        {years.length > 0 ? (
                          <>
                            {years.map((item, index) => (
                              <option key={index}>{item}</option>
                            ))}
                          </>
                        ) : (
                          <option hidden>Select Year</option>
                        )}
                      </select>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Date Range</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <Row className="daterange">
                          {/* <Col lg={12}>
                            <label>पासून</label>
                            <input className="form-control" type="date" />
                          </Col>
                          <Col lg={12}>
                            <label>प्रयंत</label>
                            <input className="form-control" type="date" />
                          </Col> */}
                          <Col lg={12}>
                            <ReactDatePicker />
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="formbutton">
                <button className="reset">Reset</button>
                <button className="apply">Apply</button>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="debate-search">
              <div className="searchboxx">
                <input
                  type="text"
                  name="topic"
                  className="form-control"
                  placeholder="विषय आणि कीवर्ड शोधा"
                  defaultValue={search.topic}
                  onChange={handleChange}
                />
                <button onClick={sessionFetch} className="searchb">
                  <i className="fa fa-search" />
                </button>
                <button className="startover">Reset</button>
              </div>
            </div>
            <div className="breadvrumbss">
              <Row>
                <Col lg={6}>
                  <div className="breadvrumbss-inner">
                    <div className="countdebate">
                      <Link to="/">
                        <span>मुख्यपृष्ठ</span>
                      </Link>
                      <img src={Arrow} alt="" />
                      <span>सत्र दिनदर्शिका</span>
                    </div>
                    <p>[{session?.length} results]</p>
                  </div>
                </Col>
              </Row>
            </div>
            <table className="debate-light table table-bordered">
              <thead>
                <tr>
                  <th style={{ borderRight: "solid white 1px" }}>क्रमांक</th>
                  <th style={{ borderRight: "solid white 1px" }}> विषय</th>
                  <th style={{ borderRight: "solid white 1px" }}>सभागृह </th>
                  <th style={{ borderRight: "solid white 1px" }}> अधिवेशन</th>
                  <th style={{ borderRight: "solid white 1px" }}>तपशील</th>
                </tr>
              </thead>
              <tbody>
                {session?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span>{index + 1}</span>
                    </td>
                    <td>
                      <span>{item?.topic_name}</span>
                    </td>
                    <td>{item?.houses}</td>
                    <td>
                      <p>
                        <span>{item[checkLang]["session"]}</span>
                      </p>
                    </td>
                    <td className="imagee">
                      {item.documents.length > 0 ? (
                        item.documents.map((doc, index) => (
                          <a
                            key={index}
                            href={
                              ImageUrl +
                              doc?.document.destination +
                              "/" +
                              doc?.document.filename
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>{doc?.title}</Tooltip>
                              )}
                              placement="top"
                            >
                              <img src="/src/assets/debate/Frame.svg" alt="" />
                            </OverlayTrigger>
                          </a>
                        ))
                      ) : (
                        <></>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SessionCalender;
