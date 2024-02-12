import React, { useEffect, useState } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";

import PDF from "../assets/debate/Frame.svg";
import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import { getApi } from "../services/axiosInterceptors";
import { memberName } from "../data/memberName";
import PopupHome from "./PopupHome";

const Debate = () => {
  const [debate, setDebate] = useState([]);
  const [isDivVisible, setDivVisibility] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [modalShow, setModalShow] = useState(true);

  const [search, setSearch] = useState({
    topic: "",
    members_name: "",
    house: "विधानसभा",
    session: "",
    volume: "",
    kramank: "",
    method: "",
    method_type: "",
    method_sub_type: "",
    ministry_name: "",
  });

  const [options, setOptions] = useState({
    volume: "",
    kramank: "",
    method: "",
    method_type: "",
    method_sub_type: "",
    ministry_name: "",
  });

  let obj = {
    Legislatio: "विधिविधान",
    budget: "अर्थसंकल्पीय आयुधे",
    device: "आयुधे",
    legisl: "विधिविधान",
    other: "इतर",
    method: "संसदीय कामकाज पद्धती",
    budget_s: "अर्थसंकल्पीय आयुधे",
    devices: "आयुधे",
    proceeding: "संसदीय कामकाज पद्धती",
  };

  let methods = [
    "विधिविधान",
    "अर्थसंकल्पीय आयुधे",
    "आयुधे",
    "विधिविधान",
    "इतर",
    "संसदीय कामकाज पद्धती",
    "अर्थसंकल्पीय आयुधे",
    "आयुधे",
    "संसदीय कामकाज पद्धती",
  ];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    setSearch((prev) => ({
      ...prev,
      members_name: item.name,
    }));
  };

  const toggleDivVisibility = () => {
    setDivVisibility(!isDivVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "method") {
      let newValue = Object.keys(obj).find((key) => obj[key] === value);

      setSearch((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else {
      setSearch((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const calculatePageNumbers = () => {
    const totalPages = Math.ceil(debate.count / pageLimit);
    const maxDisplayedPages = 5;
    const displayedPages = [];

    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        displayedPages.push(i);
      }
    } else {
      const halfMaxPages = Math.floor(maxDisplayedPages / 2);
      let startPage = Math.max(1, pageCount / pageLimit - halfMaxPages);
      let endPage = startPage + maxDisplayedPages - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, totalPages - maxDisplayedPages + 1);
      }

      if (startPage > 1) {
        displayedPages.push(1);
        if (startPage > 2) {
          displayedPages.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        displayedPages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          displayedPages.push("...");
        }
        displayedPages.push(totalPages);
      }
    }

    return displayedPages;
  };

  // const handlePageClick = (e, val) => {
  //   console.log("check", val);
  //   console.log(Math.ceil(pageCount / pageLimit) + 1);
  //   setPageCount(val * 10);
  //   debateFetch();
  // };

  const handlePageLimit = (e) => {
    let value = e.target.value;

    setPageLimit(+value);
    debateFetch();
  };

  const handleReset = () => {
    setSearch((prev) => ({
      ...prev,
      volume: "",
      kramank: "",
      method: "",
      method_type: "",
      method_sub_type: "",
      ministry_name: "",
    }));

    handleSearch();
  };

  const handleStart = () => {
    setSearch((prev) => ({
      ...prev,
      topic: "",
      members_name: "",
      house: "विधानसभा",
      session: "",
      volume: "",
      kramank: "",
      method: "",
      method_type: "",
      method_sub_type: "",
      ministry_name: "",
    }));
    debateFetch();
  };

  const handleHitChange = (e) => {
    const { name, value } = e.target;

    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const debateFetch = async () => {
    console.log(pageCount, pageLimit);
    await getApi(
      `debate?perPage=${pageCount}&perLimit=${pageLimit}&house=${search.house}`
    )
      .then((res) => setDebate(res.data))
      .catch((err) => console.log(err));
  };

  const handleSearch = async () => {
    let house = search.house === "एकत्रित" ? "" : search.house;

    let session = search.session === "सर्व" ? "" : search.session;

    await getApi(
      `debate/fields?perPage=${pageCount}&perLimit=${pageLimit}&topic=${search.topic}&members_name=${search.members_name}&house=${house}&session=${session}&volume=${search.volume}&kramank=${search.kramank}&method=${search.method}&method_type=${search.method_type}&method_sub_type=${search.method_sub_type}&ministry_name=${search.ministry_name}`
    )
      .then((res) => {
        if (res.data.success) {
          setDebate(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleSearch();
  }, [search.session, search.house, pageCount, pageLimit]);

  useEffect(() => {
    debateFetch();
  }, [pageCount, pageLimit]);

  useEffect(() => {
    const fetchData = async () => {
      await getApi("debate/option?id=volume")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              volume: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("debate/option?id=kramank")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              kramank: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("debate/option?id=method")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              method: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("debate/option?id=method_type")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              method_type: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("debate/option?id=method_sub_type")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              method_sub_type: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("debate/option?id=ministry_name")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              ministry_name: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <div>
      <PopupHome show={modalShow} onHide={() => setModalShow(false)} />
      <Container fluid className="debatepage">
        <Row>
          <Col lg={3}>
            <div className="filters">
              <div className="firstfilter">
                <h3>फिल्टर</h3>
                <h4>सदस्य</h4>
                <ReactSearchAutocomplete
                  items={memberName}
                  placeholder="सदस्य शोधा"
                  onSearch={handleOnSearch}
                  onSelect={handleOnSelect}
                />
                <Accordion
                  className="filsss"
                  defaultActiveKey={["0"]}
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>सभागृह</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck">
                          <label>विधानपरिषद</label>
                          <Form.Check
                            aria-label="option 1"
                            name="house"
                            checked={search.house === "विधानपरिषद"}
                            value={"विधानपरिषद"}
                            onChange={handleHitChange}
                          />
                        </div>
                        <div className="datacheck">
                          <label>विधानसभा</label>
                          <Form.Check
                            aria-label="option 2"
                            name="house"
                            checked={search.house === "विधानसभा"}
                            value={"विधानसभा"}
                            onChange={handleHitChange}
                          />
                        </div>
                        <div className="datacheck1">
                          <label>एकत्रित</label>
                          <Form.Check
                            aria-label="option 3"
                            name="house"
                            checked={search.house === "एकत्रित"}
                            value={"एकत्रित"}
                            onChange={handleHitChange}
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>अधिवेशन</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck">
                          <label>सर्व</label>
                          <Form.Check
                            aria-label="option 4"
                            name="session"
                            checked={search.session === "सर्व"}
                            value={"सर्व"}
                            onChange={handleHitChange}
                          />
                        </div>
                        <div className="datacheck">
                          <label>पावसाळी</label>
                          <Form.Check
                            aria-label="option 5"
                            name="session"
                            checked={search.session === "पावसाळी"}
                            value={"पावसाळी"}
                            onChange={handleHitChange}
                          />
                        </div>
                        <div className="datacheck">
                          <label>अर्थसंकल्पीय</label>
                          <Form.Check
                            aria-label="option 6"
                            name="session"
                            checked={search.session === "अर्थसंकल्पीय"}
                            value={"अर्थसंकल्पीय"}
                            onChange={handleHitChange}
                          />
                        </div>
                        <div className="datacheck1">
                          <label>विशेष</label>
                          <Form.Check
                            aria-label="option 7"
                            name="session"
                            checked={search.session === "विशेष"}
                            value={"विशेष"}
                            onChange={handleHitChange}
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>तारीख</Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <Row className="daterange">
                          <Col lg={4}>
                            <label>पासून</label>
                            <input
                              className="form-control"
                              disabled
                              type="number"
                              min={1987}
                              max={2024}
                              value={2011}
                            />
                          </Col>
                          <Col lg={4}>
                            <label>प्रयंत</label>
                            <input
                              className="form-control"
                              disabled
                              type="number"
                              min={1987}
                              max={2024}
                              value={2011}
                            />
                          </Col>
                          <Col lg={4}>
                            <button className="apply1">अप्लाय</button>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <hr />
              <div className="secondfilter">
                <button className="advanced" onClick={toggleDivVisibility}>
                  ऍडव्हान्स फिल्टर
                  <div className="iconss">{isDivVisible ? "-" : "+"}</div>
                </button>
                {isDivVisible && (
                  <div>
                    <Accordion className="filsss1">
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>आयुधे </Accordion.Header>
                        <Accordion.Body>
                          <select
                            className="secondfilers"
                            value={obj[search.method]}
                            name="method"
                            onChange={handleChange}
                          >
                            <option hidden>Select method</option>
                            {methods?.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>आयुधाचा प्रकार</Accordion.Header>
                        <Accordion.Body>
                          <select
                            className="secondfilers"
                            value={search.method_type}
                            name="method_type"
                            onChange={handleChange}
                          >
                            <option hidden>Select method type</option>
                            {options?.method_type?.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>आयुधाचा उपप्रकार</Accordion.Header>
                        <Accordion.Body>
                          <select
                            className="secondfilers"
                            value={search.method_sub_type}
                            name="method_sub_type"
                            onChange={handleChange}
                          >
                            <option hidden>Select method sub type</option>
                            {options?.method_sub_type?.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>मंत्रालय </Accordion.Header>
                        <Accordion.Body>
                          <select
                            className="secondfilers"
                            value={search.ministry_name}
                            name="ministry_name"
                            onChange={handleChange}
                          >
                            <option hidden>Select ministry name</option>
                            {options?.ministry_name?.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>खंड</Accordion.Header>
                        <Accordion.Body>
                          <select
                            className="secondfilers"
                            value={search.volume}
                            name="volume"
                            onChange={handleChange}
                          >
                            <option hidden>Select volume</option>
                            {options?.volume?.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>क्रमांक</Accordion.Header>
                        <Accordion.Body>
                          <select
                            className="secondfilers"
                            value={search.kramank}
                            name="kramank"
                            onChange={handleChange}
                          >
                            <option hidden>Select kramank</option>
                            {options?.kramank?.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                )}
              </div>
              <div className="formbutton">
                <button className="reset" onClick={handleReset}>
                  रिसेट
                </button>
                <button className="apply" onClick={handleSearch}>
                  अप्लाय
                </button>
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
                <button className="searchb" onClick={handleSearch}>
                  <i className="fa fa-search" />
                </button>
                <button className="startover" onClick={handleStart}>
                  प्रारंभ
                </button>
              </div>
            </div>
            <div className="breadvrumbss">
              <Row>
                <Col lg={6}>
                  <div className="breadvrumbss-inner">
                    <div className="countdebate">
                      <span> मुख्य पृष्ठ </span>
                      <img src={Arrow} alt="" />
                      <span>सभागृहांचे कार्यवृत्त</span>
                    </div>
                    <p> {debate?.count ? `[${debate?.count}]` : ""} Items</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="debate-right">
                    <select name="sabhaselection">
                      <option value="विधानसभा  12th">विधानसभा 12th</option>
                      <option value="विधानसभा  11th">विधानसभा 11th</option>
                      <option value="विधानसभा  10th">विधानसभा 10th</option>
                      <option value="विधानसभा  09th">विधानसभा 09th</option>
                    </select>
                    <select
                      name="sabhaselection"
                      defaultValue={pageLimit}
                      onChange={handlePageLimit}
                    >
                      <option value={10}>10 प्रति पृष्ठ</option>
                      <option value={20}>20 प्रति पृष्ठ</option>
                      <option value={30}>30 प्रति पृष्ठ</option>
                      <option value={40}>40 प्रति पृष्ठ</option>
                    </select>
                    <span className="sorting">
                      <Link to="/">
                        <img src={Sort} alt="" />
                      </Link>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
            <table className="debate-light table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: "30%", borderRight: "solid white 1px" }}>
                    विषय
                  </th>
                  <th style={{ borderRight: "solid white 1px" }}>सभागृह</th>
                  <th style={{ borderRight: "solid white 1px" }}>अधिवेशन</th>
                  <th style={{ borderRight: "solid white 1px" }}>तारीख</th>
                  <th style={{ borderRight: "solid white 1px" }}>सदस्य</th>
                  <th>तपशील</th>
                </tr>
              </thead>
              <tbody>
                {debate?.data?.map((item, index) => {
                  let name = item?.members_name.split(",");

                  return (
                    <tr key={index}>
                      <td>{item.topic}</td>
                      <td>{item.house}</td>
                      <td>{item.session}</td>
                      <td>{item.date}</td>
                      <td>
                        <p>{name[0] + "...."}</p>
                      </td>
                      <td className="imagee">
                        <Link to={`/DebateDetails?id=${item._id}`}>
                          <i className="fa fa-eye" />
                        </Link>
                        <a
                          href={"http://103.112.121.109:8000/" + item.fileurl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={PDF} alt="" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="flex-tab">
              <div className="pagination">
                <button
                  className="right"
                  onClick={() => {
                    if (pageCount >= 10) {
                      setPageCount(pageCount - 10);
                      debateFetch();
                    }
                  }}
                >
                  ≪
                </button>
                {calculatePageNumbers().map((val, index) => (
                  <React.Fragment key={index}>
                    {val === "..." ? (
                      <span className="ellipsis" key={index}>
                        ...
                      </span>
                    ) : (
                      <div
                        // onClick={(e) => handlePageClick(e, val)}
                        className={`
                          ${val === Math.ceil(pageCount / pageLimit) + 1
                            ? "active pagess"
                            : ""
                          }
                          paginationnn pagess
                        `}
                        key={index}
                      >
                        <span>{val}</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <button
                  className="left"
                  onClick={() => {
                    const maxPageCount = Math.floor(debate.count / pageLimit);

                    console.log(pageCount + pageLimit < maxPageCount);
                    if (pageCount + pageLimit < maxPageCount) {
                      setPageCount(pageCount + 10);

                      debateFetch();
                    }
                  }}
                >
                  ≫
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Debate;
