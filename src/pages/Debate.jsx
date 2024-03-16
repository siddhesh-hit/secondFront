import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";

import PDF from "../assets/debate/Frame.svg";
import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

import { getApi } from "../services/axiosInterceptors";
import { memberName } from "../data/memberName";
import PopupHome from "./PopupHome";
import PaginationComponent from "../components/Pagination";
import HighlightSentence from "../components/HighlightSentence";
import useLang from "../hooks/useLang";
import { councilDebate } from "../data/constant";
import { numbers, numToYears } from "../utils/marathitoenglish";

const Debate = () => {
  const [debate, setDebate] = useState([]);
  const [text, setText] = useState("");
  const [searchdata, setSearchdata] = useState("");
  const [isDivVisible, setDivVisibility] = useState(false);
  const [isDivVisible1, setDivVisibility1] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [modalShow, setModalShow] = useState(true);
  const [sorted, setSorted] = useState(false);
  const { lang, checkLang } = useLang();
  const [options, setOptions] = useState({
    volume: "",
    kramank: "",
    method: "",
    method_type: "",
    method_sub_type: "",
    ministry_name: "",
  });

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
    fromdate: "",
    todate: "",
  });

  const [extraDate, setExtraDate] = useState({
    fromdate: "",
    todate: "",
  });

  let keyval = {
    marathi: {
      topic: "विषय",
      house: "सभागृह",
      session: "अधिवेशन",
      fromdate: "तारीख",
      todate: "तारीख",
      members_name: "सदस्यांचे नाव",
      action: "क्रिया",
    },
    english: {
      topic: "Topic",
      house: "House",
      session: "Session",
      fromdate: "Date",
      todate: "Date",
      members_name: "Member Name",
      action: "Action",
    },
  };

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
    // console.log(string, results);
  };

  const handleOnSelect = (item) => {
    setSearch((prev) => ({
      ...prev,
      members_name: item.name,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "method") {
      let newValue = Object.keys(obj).find((key) => obj[key] === value);

      setSearch((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else if (name === "fromdate" || name === "todate") {
      setExtraDate((prev) => ({
        ...prev,
        [name]: value,
      }));

      let date = new Date(value);
      let day = date
        .getDate()
        .toString()
        .split("")
        .map((item) => numbers[item])
        .join("");
      let months = (date.getMonth() + 1).toString();
      let monthh = numToYears[months];
      let year = date.getFullYear();
      let year1 = year
        .toString()
        .split("")
        .map((item) => numbers[item])
        .join("");
      let newDate = `${day} ${monthh} ${year1}`;
      setSearch((prev) => ({
        ...prev,
        [name]: newDate,
      }));
      // console.log(newDate)
    } else {
      setSearch((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleReset = () => {
    setSearch((prev) => ({
      ...prev,
      // topic: '',
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
    handleSearch();
  };

  const handleSort = () => {
    // console.log(debate)

    if (sorted) {
      const newDebate = debate.data.sort((a, b) =>
        b.topic.localeCompare(a.topic)
      );
      setDebate((prev) => ({
        ...prev,
        data: newDebate,
      }));
      setSorted(!sorted);
    } else {
      const newDebate = debate.data.sort((a, b) =>
        a.topic.localeCompare(b.topic)
      );
      setDebate((prev) => ({
        ...prev,
        data: newDebate,
      }));
      setSorted(!sorted);
    }
  };

  // const debateFetch = async () => {
  //   // console.log(currentPage, pageLimit);
  //   await getApi(
  //     `debate?perPage=${currentPage}&perLimit=${pageLimit}&house=${search.house}`
  //   )
  //     .then((res) => setDebate(res.data))
  //     .catch((err) => console.log(err));
  // };

  const handleSearch = async () => {
    let house = search.house === "एकत्रित" ? "" : search.house;
    let session = search.session === "सर्व" ? "" : search.session;

    if (searchdata) {
      setSearch((prev) => ({
        ...prev,
        topic: searchdata,
      }));
    }

    await getApi(
      `debate/fields?perPage=${currentPage}&perLimit=${pageLimit}&topic=${searchdata}&members_name=${search.members_name}&house=${house}&session=${session}&volume=${search.volume}&kramank=${search.kramank}&method=${search.method}&method_type=${search.method_type}&method_sub_type=${search.method_sub_type}&ministry_name=${search.ministry_name}`
      // &fromdate=${search.fromdate}&todate=${search.todate}
    )
      .then((res) => {
        if (res.data.success) {
          setDebate(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    for (let key in search) {
      if (search[key] || searchdata) {
        // console.log(key, true);
        setCurrentPage(0);
      }
    }

    handleSearch();
  }, [search.session, search.house, search.members_name]);

  useEffect(() => {
    // for (let key in search) {
    //   if (search[key]) {
    //     console.log(key, true);
    //     setCurrentPage(0);
    //   }
    // }

    handleSearch();
  }, [currentPage, pageLimit]);

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

  // console.log(currentPage, "in debate");

  return (
    <div>
      {/* <PopupHome show={modalShow} onHide={() => setModalShow(false)} /> */}
      <Container fluid className="debatepage">
        <Row>
          <Col lg={3} className="d-lg-none mb-3">
            <Button onClick={() => setDivVisibility(true)}>
              <i className="fa fa-bars mx-1"></i> फिल्टर उघडा
            </Button>
          </Col>
          <Offcanvas
            className="filtermobile"
            show={isDivVisible}
            onHide={() => setDivVisibility(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>फिल्टर</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="filters">
                <div className="firstfilter">
                  <h3>{councilDebate[checkLang].filter}</h3>
                  <h4>{councilDebate[checkLang].tableBody.member}</h4>
                  <ReactSearchAutocomplete
                    items={memberName}
                    placeholder={councilDebate[checkLang].search1}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    closeOnSelect={true}
                  />
                  <Accordion className="filsss" defaultActiveKey={["0"]}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {councilDebate[checkLang].tableBody.house}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <div className="datacheck">
                            <label>विधानपरिषद</label>
                            <Form.Check
                              aria-label="option 1"
                              name="house"
                              checked={search.house === "विधानपरिषद"}
                              value={"विधानपरिषद"}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="datacheck">
                            <label>विधानसभा</label>
                            <Form.Check
                              aria-label="option 2"
                              name="house"
                              checked={search.house === "विधानसभा"}
                              value={"विधानसभा"}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="datacheck1">
                            <label>एकत्रित</label>
                            <Form.Check
                              aria-label="option 3"
                              name="house"
                              checked={search.house === "एकत्रित"}
                              value={"एकत्रित"}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        {councilDebate[checkLang].tableBody.session}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <div className="datacheck">
                            <label>सर्व</label>
                            <Form.Check
                              aria-label="option 4"
                              name="session"
                              checked={search.session === "सर्व"}
                              value={"सर्व"}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="datacheck">
                            <label>पावसाळी</label>
                            <Form.Check
                              aria-label="option 5"
                              name="session"
                              checked={search.session === "पावसाळी"}
                              value={"पावसाळी"}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="datacheck">
                            <label>अर्थसंकल्पीय</label>
                            <Form.Check
                              aria-label="option 6"
                              name="session"
                              checked={search.session === "अर्थसंकल्पीय"}
                              value={"अर्थसंकल्पीय"}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="datacheck1">
                            <label>विशेष</label>
                            <Form.Check
                              aria-label="option 7"
                              name="session"
                              checked={search.session === "विशेष"}
                              value={"विशेष"}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        {councilDebate[checkLang].tableBody.date}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <Row className="daterange">
                            <Col lg={6}>
                              <label>पासून</label>
                              <input
                                onChange={handleChange}
                                className="form-control"
                                type="date"
                                name="fromdate"
                                value={extraDate?.fromdate}
                                style={{ padding: "8px 5px" }}
                              />
                            </Col>
                            <Col lg={6}>
                              <label>प्रयंत</label>
                              <input
                                onChange={handleChange}
                                className="form-control"
                                type="date"
                                name="todate"
                                value={extraDate?.todate}
                                style={{ padding: "8px 5px" }}
                              />
                            </Col>
                            <Col lg={6}>
                              <button className="apply1">
                                {councilDebate[checkLang].button1}
                              </button>
                            </Col>
                          </Row>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <hr />
                <div className="secondfilter">
                  <button
                    className="advanced"
                    onClick={() => setDivVisibility1(!isDivVisible1)}
                  >
                    {councilDebate[checkLang].adfilter}
                    <div className="iconss">{isDivVisible1 ? "-" : "+"}</div>
                  </button>
                  {isDivVisible1 && (
                    <div className="advancdeee">
                      <label>{councilDebate[checkLang].option1}</label>
                      <select
                        className="secondfilers"
                        value={obj[search.method]}
                        name="method"
                        onChange={handleChange}
                      >
                        <option hidden>कामकाजाची यादी निवडा</option>
                        {methods?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <label>{councilDebate[checkLang].option2}</label>
                      <select
                        className="secondfilers"
                        value={search.method_type}
                        name="method_type"
                        onChange={handleChange}
                      >
                        <option hidden>प्रकार निवडा</option>
                        {options?.method_type?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <label>{councilDebate[checkLang].option3}</label>
                      <select
                        className="secondfilers"
                        value={search.method_sub_type}
                        name="method_sub_type"
                        onChange={handleChange}
                      >
                        <option hidden>उपप्रकार निवडा</option>
                        {options?.method_sub_type?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <label>{councilDebate[checkLang].option4}</label>
                      <select
                        className="secondfilers"
                        value={search.ministry_name}
                        name="ministry_name"
                        onChange={handleChange}
                      >
                        <option hidden>मंत्रालय निवडा</option>
                        {options?.ministry_name?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <label>{councilDebate[checkLang].option5}</label>
                      <select
                        className="secondfilers"
                        value={search.volume}
                        name="volume"
                        onChange={handleChange}
                      >
                        <option hidden>खंड निवडा</option>
                        {options?.volume?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <label>{councilDebate[checkLang].option6}</label>
                      <select
                        className="secondfilers"
                        value={search.kramank}
                        name="kramank"
                        onChange={handleChange}
                      >
                        <option hidden>क्रमांक निवडा</option>
                        {options?.kramank?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <div className="formbutton">
                  <button className="reset" onClick={handleReset}>
                    {councilDebate[checkLang].button2}
                  </button>
                  <button className="apply" onClick={handleSearch}>
                    {councilDebate[checkLang].button1}
                  </button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <Col lg={3} className="d-none d-lg-block">
            <div className="filters">
              <div className="firstfilter">
                <h3>{councilDebate[checkLang].filter}</h3>
                <h4>{councilDebate[checkLang].tableBody.member}</h4>
                <ReactSearchAutocomplete
                  items={memberName}
                  placeholder={councilDebate[checkLang].search1}
                  onSearch={handleOnSearch}
                  onSelect={handleOnSelect}
                  inputSearchString={search.members_name}
                  closeOnSelect={true}
                />
                <Accordion className="filsss" defaultActiveKey={["0"]}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {councilDebate[checkLang].tableBody.house}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck">
                          <label>विधानपरिषद</label>
                          <Form.Check
                            aria-label="option 1"
                            name="house"
                            checked={search.house === "विधानपरिषद"}
                            value={"विधानपरिषद"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="datacheck">
                          <label>विधानसभा</label>
                          <Form.Check
                            aria-label="option 2"
                            name="house"
                            checked={search.house === "विधानसभा"}
                            value={"विधानसभा"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="datacheck1">
                          <label>एकत्रित</label>
                          <Form.Check
                            aria-label="option 3"
                            name="house"
                            checked={search.house === "एकत्रित"}
                            value={"एकत्रित"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {councilDebate[checkLang].tableBody.session}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck">
                          <label>सर्व</label>
                          <Form.Check
                            aria-label="option 4"
                            name="session"
                            checked={search.session === "सर्व"}
                            value={"सर्व"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="datacheck">
                          <label>पावसाळी</label>
                          <Form.Check
                            aria-label="option 5"
                            name="session"
                            checked={search.session === "पावसाळी"}
                            value={"पावसाळी"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="datacheck">
                          <label>अर्थसंकल्पीय</label>
                          <Form.Check
                            aria-label="option 6"
                            name="session"
                            checked={search.session === "अर्थसंकल्पीय"}
                            value={"अर्थसंकल्पीय"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="datacheck1">
                          <label>विशेष</label>
                          <Form.Check
                            aria-label="option 7"
                            name="session"
                            checked={search.session === "विशेष"}
                            value={"विशेष"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {councilDebate[checkLang].tableBody.date}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <Row className="daterange">
                          <Col lg={6}>
                            <label>पासून</label>
                            <input
                              onChange={handleChange}
                              className="form-control"
                              type="date"
                              name="fromdate"
                              value={extraDate?.fromdate}
                              style={{ padding: "8px 5px" }}
                            />
                          </Col>
                          <Col lg={6}>
                            <label>प्रयंत</label>
                            <input
                              onChange={handleChange}
                              className="form-control"
                              type="date"
                              name="todate"
                              value={extraDate?.todate}
                              style={{ padding: "8px 5px" }}
                            />
                          </Col>
                          <Col lg={6}>
                            <button className="apply1">
                              {councilDebate[checkLang].button1}
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <hr />
              <div className="secondfilter">
                <button
                  className="advanced"
                  onClick={() => setDivVisibility1(!isDivVisible1)}
                >
                  {councilDebate[checkLang].adfilter}
                  <div className="iconss">{isDivVisible1 ? "-" : "+"}</div>
                </button>
                {isDivVisible1 && (
                  <div className="advancdeee">
                    <label>{councilDebate[checkLang].option1}</label>
                    <select
                      className="secondfilers"
                      value={obj[search.method]}
                      name="method"
                      onChange={handleChange}
                    >
                      <option hidden>कामकाजाची यादी निवडा</option>
                      {methods?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label>{councilDebate[checkLang].option2}</label>
                    <select
                      className="secondfilers"
                      value={search.method_type}
                      name="method_type"
                      onChange={handleChange}
                    >
                      <option hidden>प्रकार निवडा</option>
                      {options?.method_type?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label>{councilDebate[checkLang].option3}</label>
                    <select
                      className="secondfilers"
                      value={search.method_sub_type}
                      name="method_sub_type"
                      onChange={handleChange}
                    >
                      <option hidden>उपप्रकार निवडा</option>
                      {options?.method_sub_type?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label>{councilDebate[checkLang].option4}</label>
                    <select
                      className="secondfilers"
                      value={search.ministry_name}
                      name="ministry_name"
                      onChange={handleChange}
                    >
                      <option hidden>मंत्रालय निवडा</option>
                      {options?.ministry_name?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label>{councilDebate[checkLang].option5}</label>
                    <select
                      className="secondfilers"
                      value={search.volume}
                      name="volume"
                      onChange={handleChange}
                    >
                      <option hidden>खंड निवडा</option>
                      {options?.volume?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label>{councilDebate[checkLang].option6}</label>
                    <select
                      className="secondfilers"
                      value={search.kramank}
                      name="kramank"
                      onChange={handleChange}
                    >
                      <option hidden>क्रमांक निवडा</option>
                      {options?.kramank?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <div className="formbutton">
                <button className="reset" onClick={handleReset}>
                  {councilDebate[checkLang].button2}
                </button>
                <button className="apply" onClick={handleSearch}>
                  {councilDebate[checkLang].button1}
                </button>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="debate-search">
              <Row>
                <Col lg={10} style={{ position: "relative" }}>
                  <ReactTransliterate
                    renderComponent={(props) => (
                      <input className="form-control" {...props} />
                    )}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={councilDebate[checkLang].search}
                    onChangeText={(text) => {
                      setSearchdata(text);
                    }}
                    lang="hi"
                  />
                  <button className="searchb" onClick={handleSearch}>
                    <i className="fa fa-search" />
                  </button>
                </Col>
                <Col lg={2}>
                  <button className="startover" onClick={handleStart}>
                    {councilDebate[checkLang].button2}
                  </button>
                </Col>
              </Row>
              <ul className="search-list">
                <>
                  {Object.keys(search).map((key, index) => {
                    let checkBool;
                    key === "fromdate"
                      ? (checkBool = true)
                      : (checkBool = false);
                    return search[key] === "" || key === "todate" ? (
                      <React.Fragment key={index}></React.Fragment>
                    ) : (
                      <React.Fragment key={index}>
                        {checkBool ? (
                          <React.Fragment key={index}>
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>
                                  {keyval[checkLang][key]}
                                </Tooltip>
                              )}
                              placement="top"
                            >
                              <li>
                                <a>
                                  {search.fromdate} - {search.todate}
                                </a>
                                <button
                                  onClick={() => {
                                    setSearch((prev) => ({
                                      ...prev,
                                      todate: "",
                                      fromdate: "",
                                    }));
                                    setExtraDate((prev) => ({
                                      ...prev,
                                      todate: "",
                                      fromdate: "",
                                    }));
                                  }}
                                  className="fa fa-times"
                                ></button>
                              </li>
                            </OverlayTrigger>
                          </React.Fragment>
                        ) : (
                          <React.Fragment key={index}>
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>
                                  {keyval[checkLang][key]}
                                </Tooltip>
                              )}
                              placement="top"
                            >
                              <li>
                                <a>{search[key]}</a>
                                <button
                                  onClick={() => {
                                    if (key === "topic") {
                                      setSearchdata("");
                                      setSearch((prev) => ({
                                        ...prev,
                                        [key]: "",
                                      }));
                                    } else {
                                      setSearch((prev) => ({
                                        ...prev,
                                        [key]: "",
                                      }));
                                    }
                                  }}
                                  className="fa fa-times"
                                ></button>
                              </li>
                            </OverlayTrigger>
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    );
                  })}
                </>
              </ul>
            </div>
            <div className="breadvrumbss">
              <Row>
                <Col lg={6}>
                  <div className="breadvrumbss-inner">
                    <div className="countdebate">
                      <span>{councilDebate[checkLang].home}</span>
                      <img src={Arrow} alt="" />
                      <span>{councilDebate[checkLang].title}</span>
                    </div>
                    <p>
                      {" "}
                      {debate?.count
                        ? `[${debate?.count} परिणाम]`
                        : "[0 परिणाम]"}
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="debate-right">
                    {search.house === "विधानपरिषद" ? (
                      <></>
                    ) : (
                      <select name="sabhaselection">
                        <option value="विधानसभा  12th">विधानसभा 12th</option>
                        <option value="विधानसभा  11th">विधानसभा 11th</option>
                        <option value="विधानसभा  10th">विधानसभा 10th</option>
                        <option value="विधानसभा  09th">विधानसभा 09th</option>
                      </select>
                    )}
                    <select
                      name="sabhaselection"
                      defaultValue={pageLimit}
                      onChange={(e) => setPageLimit(+e.target.value)}
                    >
                      <option value={10}>10 प्रति पृष्ठ</option>
                      <option value={20}>20 प्रति पृष्ठ</option>
                      <option value={30}>30 प्रति पृष्ठ</option>
                      <option value={40}>40 प्रति पृष्ठ</option>
                    </select>
                    <span className="sorting">
                      <button onClick={handleSort}>
                        <img src={Sort} alt="" />
                      </button>
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
            {debate?.count > 0 ? (
              <table className="debate-light table table-bordered responsive-table">
                <thead>
                  <tr>
                    <th
                      style={{ width: "30%", borderRight: "solid white 1px" }}
                    >
                      {councilDebate[checkLang].tableBody.topic}
                    </th>
                    <th style={{ borderRight: "solid white 1px" }}>
                      {councilDebate[checkLang].tableBody.house}
                    </th>
                    <th style={{ borderRight: "solid white 1px" }}>
                      {councilDebate[checkLang].tableBody.session}
                    </th>
                    <th style={{ borderRight: "solid white 1px" }}>
                      {councilDebate[checkLang].tableBody.date}
                    </th>
                    <th
                      style={{ borderRight: "solid white 1px", width: "25%" }}
                    >
                      {councilDebate[checkLang].tableBody.member}
                    </th>
                    <th>{councilDebate[checkLang].tableBody.action}</th>
                  </tr>
                </thead>
                <tbody>
                  {debate?.data?.map((item, index) => {
                    // let name = item?.members_name.split(",");
                    // let twoEntry;

                    // name.length < 5 ? (twoEntry = true) : (twoEntry = false);

                    return (
                      <tr key={index}>
                        <td>
                          <HighlightSentence
                            data={item.topic}
                            search={search?.topic}
                          />
                        </td>
                        <td>
                          <HighlightSentence
                            data={item.house}
                            search={search?.house}
                          />
                        </td>
                        <td>
                          <HighlightSentence
                            data={item.session}
                            search={search?.session}
                          />
                        </td>
                        <td>
                          <HighlightSentence
                            data={item.date}
                            search={search?.date}
                          />
                        </td>
                        <td>
                          <p>
                            <HighlightSentence
                              data={
                                // twoEntry
                                //   ? name[0] + "...."
                                //   : name[0] + name[1] + "...."
                                item?.members_name
                              }
                              search={search?.members_name}
                            />
                          </p>
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
            ) : (
              <table className="debate-light table table-bordered responsive-table">
                <thead>
                  <tr>
                    <th
                      style={{ width: "30%", borderRight: "solid white 1px" }}
                    >
                      {councilDebate[checkLang].tableBody.topic}
                    </th>
                    <th style={{ borderRight: "solid white 1px" }}>
                      {councilDebate[checkLang].tableBody.house}
                    </th>
                    <th style={{ borderRight: "solid white 1px" }}>
                      {councilDebate[checkLang].tableBody.session}
                    </th>
                    <th style={{ borderRight: "solid white 1px" }}>
                      {councilDebate[checkLang].tableBody.date}
                    </th>
                    <th
                      style={{ borderRight: "solid white 1px", width: "25%" }}
                    >
                      {councilDebate[checkLang].tableBody.member}
                    </th>
                    <th>{councilDebate[checkLang].tableBody.action}</th>
                  </tr>
                </thead>
                <tbody>
                  <td colSpan={6}>
                    <>No data found for provided query</>
                  </td>
                </tbody>
              </table>
            )}

            {debate?.count > 0 && (
              <PaginationComponent
                totalCount={debate?.count}
                perPage={pageLimit}
                handlePageChange={(cp) => {
                  setCurrentPage(cp);
                }}
                initialPage={currentPage}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Debate;
