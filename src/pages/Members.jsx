import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  Offcanvas,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";

import Graph from "../assets/graphs.svg";
import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import { ImageUrl, getApi } from "../services/axiosInterceptors";
import { memberName } from "../data/memberName";
import PopupHome from "./PopupHome";
import PaginationComponent from "../components/Pagination";
import HighlightSentence from "../components/HighlightSentence";
import { councilMember, filterdata } from "../data/constant";
import useLang from "../hooks/useLang";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

const Members = () => {
  let url = new URLSearchParams(window.location.search);
  const [text, setText] = useState("");
  const [searchdata, setSearchdata] = useState("");
  const [debate, setDebate] = useState([]);
  const [count, setCount] = useState(0);
  const [isDivVisible, setDivVisibility] = useState(false);
  const [isDivVisible1, setDivVisibility1] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [modalShow, setModalShow] = useState(true);
  const [sorted, setSorted] = useState(false);
  const [paramsReady, setParamsReady] = useState(false);

  const { lang, checkLang } = useLang();
  const { house } = useParams();

  const [assembly, setAssembly] = useState("65c3678e7f89a327721cceb1");

  const [search, setSearch] = useState({
    name: "",
    members_name: "",
    house: "",
    session: "",
    party: "",
    constituency: "",
    surname: "",
    district: "",
    gender: "",
    ministry_name: "",
    fromdate: "",
    todate: "",
  });

  const [options, setOptions] = useState({
    assembly: "",
    party: "",
    constituency: "",
    surname: "",
    district: "",
    gender: "",
    ministry_name: "",
  });

  const [extraDate, setExtraDate] = useState({
    fromdate: "",
    todate: "",
  });

  let keyval = {
    marathi: {
      name: "नाम",
      house: "सभागृह",
      session: "अधिवेशन",
      fromdate: "तारीख",
      todate: "तारीख",
      members_name: "सदस्यांचे नाव",
      action: "क्रिया",
    },
    english: {
      name: "Name",
      house: "House",
      session: "Session",
      fromdate: "Date",
      todate: "Date",
      members_name: "Member Name",
      action: "Action",
    },
  };

  const handleOnSearch = (string, results) => {
    // console.log({ string, results });
  };

  const handleOnSelect = (item) => {
    setSearch((prev) => ({
      ...prev,
      members_name: item.name,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fromdate" || name === "todate") {
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
      party: "",
      constituency: "",
      surname: "",
      district: "",
      gender: "",
      ministry_name: "",
    }));
    debateFetch();
  };

  const handleStart = () => {
    setSearchdata("");

    setSearch((prev) => ({
      ...prev,
      name: "",
      members_name: "",
      house: "एकत्रित",
      session: "",
      party: "",
      constituency: "",
      surname: "",
      district: "",
      gender: "",
      ministry_name: "",
    }));
    setText("");

    setSearchdata("") &&
      Promise.resolve().then(() => {
        debateFetch();
      });
  };

  const handleSort = () => {
    if (sorted) {
      const newDebate = debate.data.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setDebate(newDebate);
      setSorted(!sorted);
    } else {
      const newDebate = debate.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setDebate(newDebate);
      setSorted(!sorted);
    }
  };

  const debateFetch = async () => {
    let house =
      search.house === "एकत्रित"
        ? ""
        : search.house === "विधानसभा"
        ? "Assembly"
        : search.house === "विधानपरिषद"
        ? "Council"
        : "";

    if (searchdata) {
      setSearch((prev) => ({
        ...prev,
        name: searchdata,
      }));
    }

    await getApi(
      `member/memberdetails?perPage=${currentPage}&perLimit=${pageLimit}&name=${search.members_name}&house=${house}&party=${search.party}&constituency=${search.constituency}&surname=${search.surname}&district=${search.district}&gender=${search.gender}&fullname=${searchdata}&fromdate=${extraDate.fromdate}&todate=${extraDate.todate}`
    )
      .then((res) => {
        setDebate(res.data.data);
        setCount(res.data.count);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (house) {
      setParamsReady(true);
    }
    setSearch((prev) => ({
      ...prev,
      house,
    }));
  }, [house]);

  useEffect(() => {
    const fetchData = async () => {
      let house =
        search.house === "एकत्रित"
          ? ""
          : search.house === "विधानसभा"
          ? "Assembly"
          : "Constituency";

      await getApi("assembly/option").then((res) => {
        if (res.data.success) {
          setOptions((prev) => ({
            ...prev,
            assembly: res.data.data,
          }));
        }
      });

      await getApi(`party/option?isHouse=${house}`)
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              party: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("constituency/option")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              constituency: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi(
        `member/option?id=basic_info.surname&basic_info.house=${search.house === "एकत्रित"
          ? ""
          : search.house === "विधानसभा"
            ? "Assembly"
            : "Council"
        }`
      )
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              surname: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("district/option")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              district: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("gender/option")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              gender: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [checkLang, search.house]);

  // useEffect(() => {
  //   if (paramsReady) {
  //     console.log(search.house);
  //     paramsReady && debateFetch();
  //   }
  // }, [paramsReady]);

  useEffect(() => {
    for (let key in search) {
      if (search[key]) {
        setCurrentPage(0);
      }
    }

    debateFetch();
  }, [
    search.members_name,
    search.house,
    checkLang,
    house,
    // search,
  ]);

  useEffect(() => {
    debateFetch();
  }, [currentPage, pageLimit]);

  // console.log(search);

  return (
    <div>
      <PopupHome show={modalShow} onHide={() => setModalShow(false)} />
      <Container fluid className="memberlistpage">
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
              <Offcanvas.Title>
                {councilMember[checkLang].filter}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="filters">
                <div className="firstfilter">
                  <h3>{councilMember[checkLang].filter}</h3>
                  <Accordion className="filsss" defaultActiveKey={["0"]}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {councilMember[checkLang].member}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <ReactSearchAutocomplete
                            className="mb-3 mt-2"
                            items={
                              debate.length > 0
                                ? debate.map((item) => {
                                  return { name: item.basic_info.name };
                                })
                                : memberName
                            }
                            placeholder={filterdata[checkLang].find}
                            onSearch={handleOnSearch}
                            onSelect={handleOnSelect}
                          />
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        {councilMember[checkLang].house}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <div className="datacheck">
                            <label>{filterdata[checkLang].council}</label>
                            <Form.Check
                              aria-label="option 1"
                              name="house"
                              checked={search.house === "विधानपरिषद"}
                              value={"विधानपरिषद"}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="datacheck">
                            <label>{filterdata[checkLang].assembly}</label>
                            <Form.Check
                              aria-label="option 2"
                              name="house"
                              checked={search.house === "विधानसभा"}
                              value={"विधानसभा"}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="datacheck1">
                            <label>{filterdata[checkLang].both}</label>
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
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        {councilMember[checkLang].date}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="filtercontent">
                          <Row className="daterange">
                            <Col lg={6}>
                              <label>{filterdata[checkLang].from}</label>
                              <input
                                className="form-control"
                                disabled
                                type="number"
                                min={1987}
                                max={2024}
                                value={2011}
                              />
                            </Col>
                            <Col lg={6}>
                              <label>{filterdata[checkLang].to}</label>
                              <input
                                className="form-control"
                                disabled
                                type="number"
                                min={1987}
                                max={2024}
                                value={2011}
                              />
                            </Col>
                            <Col lg={6}>
                              <button className="apply1">
                                {councilMember[checkLang].button1}
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
                    {councilMember[checkLang].adfilter}
                    <div className="iconss">{isDivVisible1 ? "-" : "+"}</div>
                  </button>
                  {isDivVisible1 && (
                    <div className="advancdeee">
                      <label>पक्षनिहाय</label>
                      <select
                        className="secondfilers"
                        value={search.party}
                        name="party"
                        onChange={handleChange}
                      >
                        <option hidden>पक्षनिहाय</option>
                        {options?.party?.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item[checkLang]["party_name"]}
                          </option>
                        ))}
                      </select>
                      <label>मतदारसंघनिहाय</label>
                      <select
                        className="secondfilers"
                        value={search.constituency}
                        name="constituency"
                        onChange={handleChange}
                      >
                        <option hidden>मतदारसंघनिहाय</option>
                        {/* {options?.constituency?.map((item, index) => {
                        const constituencyName =
                          item[
                            search.house === "विधानपरिषद"
                              ? "council"
                              : "assembly"
                          ]?.constituency_name;
                        const assemblyName =
                          item[
                            search.house === "विधानसभा" ? "assembly" : "council"
                          ]?.constituency_name;
                        if (assemblyName !== "") {
                          return (
                            <option key={index} value={item._id}>
                              {assemblyName}
                            </option>
                          );
                        } else if (constituencyName !== "") {
                          return (
                            <option key={index} value={item._id}>
                              {constituencyName}
                            </option>
                          );
                        }
                        return null;
                      })} */}
                        {options?.constituency?.map((item, index) => {
                          let constituencyName, assemblyName;

                          if (search.house === "विधानपरिषद") {
                            constituencyName = item.council?.constituency_name;
                          } else if (search.house === "विधानसभा") {
                            assemblyName = item.assembly?.constituency_name;
                          }

                          if (search.house === "विधानसभा" && assemblyName) {
                            return (
                              <option key={index} value={item._id}>
                                {assemblyName}
                              </option>
                            );
                          } else if (
                            search.house === "विधानपरिषद" &&
                            constituencyName
                          ) {
                            return (
                              <option key={index} value={item._id}>
                                {constituencyName}
                              </option>
                            );
                          } else if (search.house === "एकत्रित") {
                            return (
                              <option key={index} value={item._id}>
                                {item?.council?.constituency_name !== ""
                                  ? item?.council?.constituency_name
                                  : item?.assembly?.constituency_name !== ""
                                    ? item?.assembly?.constituency_name
                                    : item?.assembly?.constituency_name}
                              </option>
                            );
                          }
                          return null;
                        })}
                      </select>
                      <label>आडनावानुसार</label>
                      <select
                        className="secondfilers"
                        value={search.surname}
                        name="surname"
                        onChange={handleChange}
                      >
                        <option hidden>आडनावानुसार</option>
                        {options?.surname?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <label>जिल्हानिहाय</label>
                      <select
                        className="secondfilers"
                        value={search.district}
                        name="district"
                        onChange={handleChange}
                      >
                        <option hidden>जिल्हानिहाय</option>
                        {options?.district?.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item[checkLang]["district"]}
                          </option>
                        ))}
                      </select>
                      <label>लिंगनिहाय</label>
                      <select
                        className="secondfilers"
                        value={search.gender}
                        name="gender"
                        onChange={handleChange}
                      >
                        <option hidden>लिंगनिहाय</option>
                        {options?.gender?.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item[checkLang]["gender"]}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <div className="formbutton">
                  <button className="reset" onClick={handleReset}>
                    {councilMember[checkLang].button3}
                  </button>
                  <button className="apply" onClick={debateFetch}>
                    {councilMember[checkLang].button1}
                  </button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <Col lg={3} className="d-none d-lg-block">
            <div className="filters">
              <div className="firstfilter">
                <h3>{councilMember[checkLang].filter}</h3>
                <Accordion className="filsss" defaultActiveKey={["0"]}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {councilMember[checkLang].member}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <ReactSearchAutocomplete
                          className="mb-3 mt-2"
                          items={
                            debate.length > 0
                              ? debate.map((item) => {
                                return { name: item.basic_info.name };
                              })
                              : memberName
                          }
                          placeholder={filterdata[checkLang].find}
                          onSearch={handleOnSearch}
                          onSelect={handleOnSelect}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {councilMember[checkLang].house}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <div className="datacheck">
                          <label>{filterdata[checkLang].council}</label>
                          <Form.Check
                            aria-label="option 1"
                            name="house"
                            checked={search.house === "विधानपरिषद"}
                            value={"विधानपरिषद"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="datacheck">
                          <label>{filterdata[checkLang].assembly}</label>
                          <Form.Check
                            aria-label="option 2"
                            name="house"
                            checked={search.house === "विधानसभा"}
                            value={"विधानसभा"}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="datacheck1">
                          <label>{filterdata[checkLang].both}</label>
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
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {councilMember[checkLang].date}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="filtercontent">
                        <Row className="daterange">
                          <Col lg={6}>
                            <label>{filterdata[checkLang].from}</label>
                            <DatePicker
                              className="form-control"
                              selected={search.fromdate}
                              showYearPicker
                              placeholderText="From"
                              dateFormat="yyyy"
                              minDate={"1937/01/01"}
                              maxDate={new Date()}
                              onChange={(date) => {
                                let changeDate = new Date(date);
                                let newDate = `${changeDate.getDate()}-${
                                  changeDate.getMonth() + 1
                                }-${changeDate.getFullYear()}`;
                                setSearch((prev) => ({
                                  ...prev,
                                  fromdate: date,
                                }));
                                setExtraDate((prev) => ({
                                  ...prev,
                                  fromdate: newDate,
                                }));
                              }}
                            />
                          </Col>
                          <Col lg={6}>
                            <label>{filterdata[checkLang].to}</label>
                            <DatePicker
                              className="form-control"
                              selected={search.todate}
                              showYearPicker
                              placeholderText="To"
                              dateFormat="yyyy"
                              minDate={
                                search.fromdate ? search.fromdate : "1937/01/01"
                              }
                              maxDate={new Date()}
                              onChange={(date) => {
                                let changeDate = new Date(date);
                                let newDate = `${changeDate.getDate()}-${
                                  changeDate.getMonth() + 1
                                }-${changeDate.getFullYear()}`;
                                setSearch((prev) => ({
                                  ...prev,
                                  todate: date,
                                }));
                                setExtraDate((prev) => ({
                                  ...prev,
                                  todate: newDate,
                                }));
                              }}
                            />
                          </Col>
                          <Col lg={6}>
                            <button
                              className="apply1"
                              onClick={() => debateFetch()}
                            >
                              {councilMember[checkLang].button1}
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
                  {councilMember[checkLang].adfilter}
                  <div className="iconss">{isDivVisible1 ? "-" : "+"}</div>
                </button>
                {isDivVisible1 && (
                  <div className="advancdeee">
                    <label>पक्षनिहाय</label>
                    <select
                      className="secondfilers"
                      value={search.party}
                      name="party"
                      onChange={handleChange}
                    >
                      <option hidden>पक्षनिहाय</option>
                      {options?.party?.map((item, index) => (
                        <option key={index} value={item._id}>
                          {item[checkLang]["party_name"]}
                        </option>
                      ))}
                    </select>
                    <label>मतदारसंघनिहाय</label>
                    <select
                      className="secondfilers"
                      value={search.constituency}
                      name="constituency"
                      onChange={handleChange}
                    >
                      <option hidden>मतदारसंघनिहाय</option>
                      {/* {options?.constituency?.map((item, index) => {
                        const constituencyName =
                          item[
                            search.house === "विधानपरिषद"
                              ? "council"
                              : "assembly"
                          ]?.constituency_name;
                        const assemblyName =
                          item[
                            search.house === "विधानसभा" ? "assembly" : "council"
                          ]?.constituency_name;
                        if (assemblyName !== "") {
                          return (
                            <option key={index} value={item._id}>
                              {assemblyName}
                            </option>
                          );
                        } else if (constituencyName !== "") {
                          return (
                            <option key={index} value={item._id}>
                              {constituencyName}
                            </option>
                          );
                        }
                        return null;
                      })} */}
                      {options?.constituency?.map((item, index) => {
                        let constituencyName, assemblyName;

                        if (search.house === "विधानपरिषद") {
                          constituencyName = item.council?.constituency_name;
                        } else if (search.house === "विधानसभा") {
                          assemblyName = item.assembly?.constituency_name;
                        }

                        if (search.house === "विधानसभा" && assemblyName) {
                          return (
                            <option key={index} value={item._id}>
                              {assemblyName}
                            </option>
                          );
                        } else if (
                          search.house === "विधानपरिषद" &&
                          constituencyName
                        ) {
                          return (
                            <option key={index} value={item._id}>
                              {constituencyName}
                            </option>
                          );
                        } else if (search.house === "एकत्रित") {
                          return (
                            <option key={index} value={item._id}>
                              {item?.council?.constituency_name !== ""
                                ? item?.council?.constituency_name
                                : item?.assembly?.constituency_name !== ""
                                  ? item?.assembly?.constituency_name
                                  : item?.assembly?.constituency_name}
                            </option>
                          );
                        }
                        return null;
                      })}
                    </select>
                    <label>आडनावानुसार</label>
                    <select
                      className="secondfilers"
                      value={search.surname}
                      name="surname"
                      onChange={handleChange}
                    >
                      <option hidden>आडनावानुसार</option>
                      {options?.surname?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <label>जिल्हानिहाय</label>
                    <select
                      className="secondfilers"
                      value={search.district}
                      name="district"
                      onChange={handleChange}
                    >
                      <option hidden>जिल्हानिहाय</option>
                      {options?.district?.map((item, index) => (
                        <option key={index} value={item._id}>
                          {item[checkLang]["district"]}
                        </option>
                      ))}
                    </select>
                    <label>लिंगनिहाय</label>
                    <select
                      className="secondfilers"
                      value={search.gender}
                      name="gender"
                      onChange={handleChange}
                    >
                      <option hidden>लिंगनिहाय</option>
                      {options?.gender?.map((item, index) => (
                        <option key={index} value={item._id}>
                          {item[checkLang]["gender"]}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <div className="formbutton">
                <button className="reset" onClick={handleReset}>
                  {councilMember[checkLang].button3}
                </button>
                <button className="apply" onClick={debateFetch}>
                  {councilMember[checkLang].button1}
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
                    placeholder={councilMember[checkLang].search}
                    onChangeText={(text) => {
                      setSearchdata(text);
                    }}
                    lang="hi"
                  />
                  <button className="searchb" onClick={debateFetch}>
                    <i className="fa fa-search" />
                  </button>
                </Col>
                <Col lg={2}>
                  <button className="startover" onClick={handleStart}>
                    {councilMember[checkLang].button3}
                  </button>
                </Col>
              </Row>
              {/* <ul className="search-list">
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
                                        topic: "",
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
              </ul> */}
            </div>
            <div className="breadvrumbss">
              <Row>
                <Col lg={6}>
                  <div className="breadvrumbss-inner">
                    <div className="countdebate">
                      <span>{councilMember[checkLang].link1}</span>
                      <img src={Arrow} alt="" />
                      <span>{councilMember[checkLang].member}</span>
                    </div>
                    <p> {count > 0 ? `[${count} परिणाम]` : "[0 परिणाम]"}</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="debate-right">
                    {search.house === "विधानपरिषद" ? (
                      <></>
                    ) : (
                      <select
                        name="sabhaselection"
                        value={assembly}
                        onChange={(e) => setAssembly(e.target.value)}
                      >
                        {options?.assembly.length > 0 &&
                          options?.assembly?.map((item, index) => (
                            <option key={index} value={item._id}>
                              {item.assembly_name}
                            </option>
                          ))}
                      </select>
                    )}
                    <select
                      name="sabhaselection"
                      defaultValue={pageLimit}
                      onChange={(e) => setPageLimit(+e.target.value)}
                    >
                      <option value={10}>
                        10 {filterdata[checkLang].page}
                      </option>
                      <option value={20}>
                        20 {filterdata[checkLang].page}
                      </option>
                      <option value={30}>
                        30 {filterdata[checkLang].page}
                      </option>
                      <option value={40}>
                        40 {filterdata[checkLang].page}
                      </option>
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
            <Row className="data-graphs">
              <Col lg={8}>
                {count > 0 ? (
                  <table className="debate-light table table-bordered responsive-table">
                    <thead>
                      <tr>
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].number}
                        </th>
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].name}
                        </th>
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].const}
                        </th>
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].party}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {debate.length > 0 &&
                        debate.map((item, index) => {
                          let name = item?.basic_info?.name.split(",");
                          let twoEntry;

                          name.length < 5
                            ? (twoEntry = true)
                            : (twoEntry = false);

                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <Link
                                  to={`/member-details/${item?._id}`}
                                  className="membernamee"
                                >
                                  <img
                                    src={
                                      ImageUrl +
                                      item?.basic_info?.profile?.destination +
                                      "/" +
                                      item?.basic_info?.profile?.filename
                                    }
                                    alt="user"
                                    className="member_imgs"
                                  />
                                  {`${item?.basic_info?.surname}  ${item?.basic_info?.name}`}
                                </Link>
                              </td>
                              <td>
                                {item?.basic_info.constituency
                                  ? item?.basic_info?.constituency.council
                                    ?.constituency_name !== ""
                                    ? item?.basic_info?.constituency.council
                                      ?.constituency_name
                                    : item?.basic_info?.constituency.assembly
                                      ?.constituency_name !== ""
                                      ? item?.basic_info?.constituency?.assembly
                                        ?.constituency_name
                                      : item?.basic_info?.constituency?.assembly
                                        ?.constituency_name
                                  : "" + " " + item?.basic_info?.district
                                    ? item?.basic_info?.district?.checkLang
                                      ?.district
                                    : ""}
                              </td>
                              <td>
                                {item?.basic_info?.party
                                  ? item?.basic_info?.party[checkLang]
                                    ?.party_name
                                  : ""}
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
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].number}
                        </th>
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].name}
                        </th>
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].const}
                        </th>
                        <th style={{ borderRight: "solid white 1px" }}>
                          {councilMember[checkLang].party}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <td colSpan={6}>
                        <>No data found for provided query</>
                      </td>
                    </tbody>
                  </table>
                )}

                {count > 0 && (
                  <PaginationComponent
                    totalCount={count}
                    perPage={pageLimit}
                    handlePageChange={(cp) => {
                      setCurrentPage(cp);
                    }}
                    initialPage={currentPage}
                  />
                )}
              </Col>
              <Col lg={4}>
                <div className="assemblymember mb-2">
                  <h3 style={{ background: "#000088" }}>
                    {filterdata[checkLang].stat}
                  </h3>
                </div>
                <img className="w-100" src={Graph} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Members;
