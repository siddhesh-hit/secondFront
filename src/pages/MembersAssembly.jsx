import { useEffect, useState } from "react";
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
import { Link, useParams, } from "react-router-dom";

import Graph from "../assets/graphs.svg";
import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import { ImageUrl, getApi } from "../services/axiosInterceptors";
import { memberName } from "../data/memberName";
import PopupHome from "./PopupHome";
import PaginationComponent from "../components/Pagination";
import HighlightSentence from "../components/HighlightSentence";
import { councilMember } from "../data/constant";
import useLang from "../hooks/useLang";

const MembersAssembly = () => {
  const { house } = useParams()
  const [debate, setDebate] = useState([]);
  const [count, setCount] = useState(0)
  const [isDivVisible, setDivVisibility] = useState(false);
  const [isDivVisible1, setDivVisibility1] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [modalShow, setModalShow] = useState(true);
  const [sorted, setSorted] = useState(false);
  const { lang, checkLang } = useLang();

  const [search, setSearch] = useState({
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
  });

  const [options, setOptions] = useState({
    party: "",
    constituency: "",
    surname: "",
    district: "",
    gender: "",
    ministry_name: "",
  });

  const handleOnSearch = (string, results) => {
    console.log({ string, results });
  };

  const handleOnSelect = (item) => {
    setSearch((prev) => ({
      ...prev,
      members_name: item.name,
    }));
  };

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
    debateFetch();
  };

  const handleStart = () => {
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
    debateFetch();
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
    await getApi(
      `member/memberdetails?perPage=${currentPage}&perLimit=${pageLimit}&name=${search.members_name}&house=${house}&party=${search.party}&constituency=${search.constituency}&surname=${search.surname}&district=${search.district}&gender=${search.gender}&fullname=${search.name}`
    )
      .then((res) => { setDebate(res.data.data); setCount(res.data.count) })
      .catch((err) => console.log(err));

  };
  useEffect(() => {
    setSearch((prev) => ({
      ...prev,
      house: house,
    }));

  }, [house])
  useEffect(() => {
    const fetchData = async () => {
      await getApi("party")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              party: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("constituency")
        .then((res) => {
          if (res.data.success) {
            console.log("consituency ", res.data.data)
            setOptions((prev) => ({
              ...prev,
              constituency: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("member/option?id=basic_info.surname")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              surname: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("district")
        .then((res) => {
          if (res.data.success) {
            setOptions((prev) => ({
              ...prev,
              district: res.data.data,
            }));
          }
        })
        .catch((err) => console.log(err));

      await getApi("gender")
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
  }, [checkLang]);

  useEffect(() => {
    debateFetch();
  }, [search.members_name, search.house, currentPage, pageLimit, checkLang]);


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
              <Offcanvas.Title>फिल्टर</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="filters">
                <div className="firstfilter">
                  <h3>फिल्टर</h3>
                  <Accordion className="filsss" defaultActiveKey={["0"]}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>सदस्य</Accordion.Header>
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
                            placeholder="सदस्य शोधा"
                            onSearch={handleOnSearch}
                            onSelect={handleOnSelect}
                          />
                          {/* <ReactSearchAutocomplete
                                                    className="mb-3"
                                                    items={debate.length > 0 ? debate.map((item) => {
                                                        return { name: item.basic_info.name }
                                                    }) : memberName}
                                                    placeholder="पदनाव"
                                                    onSearch={handleOnSearch}
                                                    onSelect={handleOnSelect}
                                                /> */}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
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
                  <button
                    className="advanced"
                    onClick={() => setDivVisibility1(!isDivVisible1)}
                  >
                    ऍडव्हान्स फिल्टर
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
                          <option key={index} value={item?._id}>
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
                        {options?.constituency?.map((item, index) => (
                          <option key={index} value={item?._id}>
                            {item.council.constituency_name !== '' ? item.council.constituency_name : item.assembly.constituency_name !== '' ? item.assembly.constituency_name : item.assembly.constituency_name}
                          </option>
                        ))}
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
                          <option key={index} value={item?._id}>
                            {item[checkLang]["gender"]}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <div className="formbutton">
                  <button className="reset" onClick={handleReset}>
                    रीसेट
                  </button>
                  <button className="apply" onClick={debateFetch}>
                    अप्लाय
                  </button>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <Col lg={3} className="d-none d-lg-block">
            <div className="filters">
              <div className="firstfilter">
                <h3>फिल्टर</h3>
                <Accordion className="filsss" defaultActiveKey={["0"]}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>सदस्य</Accordion.Header>
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
                          placeholder="सदस्य शोधा"
                          onSearch={handleOnSearch}
                          onSelect={handleOnSelect}
                        />
                        {/* <ReactSearchAutocomplete
                                                    className="mb-3"
                                                    items={debate.length > 0 ? debate.map((item) => {
                                                        return { name: item.basic_info.name }
                                                    }) : memberName}
                                                    placeholder="पदनाव"
                                                    onSearch={handleOnSearch}
                                                    onSelect={handleOnSelect}
                                                /> */}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
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
                <button
                  className="advanced"
                  onClick={() => setDivVisibility1(!isDivVisible1)}
                >
                  ऍडव्हान्स फिल्टर
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
                      {options?.constituency?.map((item, index) => (
                        <option key={index} value={item._id}>
                          {item.council.constituency_name !== '' ? item.council.constituency_name : item.assembly.constituency_name !== '' ? item.assembly.constituency_name : item.assembly.constituency_name}
                        </option>
                      ))}
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
                  रीसेट
                </button>
                <button className="apply" onClick={debateFetch}>
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
                  name="name"
                  className="form-control"
                  placeholder="विषय आणि कीवर्ड शोधा"
                  defaultValue={search.name}
                  onChange={handleChange}
                />
                <button className="searchb" onClick={debateFetch}>
                  <i className="fa fa-search" />
                </button>
                <button className="startover" onClick={handleStart}>
                  रीसेट
                </button>
              </div>
            </div>
            <div className="breadvrumbss">
              <Row>
                <Col lg={6}>
                  <div className="breadvrumbss-inner">
                    <div className="countdebate">
                      <span>{councilMember[checkLang].link1}</span>
                      <img src={Arrow} alt="" />
                      <span>सदस्य</span>
                    </div>
                    <p>
                      {" "}
                      {debate?.length
                        ? `[${debate?.length} परिणाम]`
                        : "[0 परिणाम]"}
                    </p>
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
            <Row className="data-graphs">
              <Col lg={8}>
                <table className="debate-light table table-bordered responsive-table">
                  <thead>
                    <tr>
                      <th style={{ borderRight: "solid white 1px" }}>
                        क्रमांक
                      </th>
                      <th style={{ borderRight: "solid white 1px" }}>नाव</th>
                      <th style={{ borderRight: "solid white 1px" }}>
                        मतदारसंघ
                      </th>
                      <th style={{ borderRight: "solid white 1px" }}>
                        राजकीय पक्ष
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {debate.length > 0 &&
                      debate.map((item, index) => {
                        let name = item?.basic_info?.name.split(",");
                        console.log("item?.basic_info.party",);
                        let twoEntry;

                        name.length < 5
                          ? (twoEntry = true)
                          : (twoEntry = false);

                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <Link
                                to={`/member-assembly-details/${item?._id}`}
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
                                {name[0]}
                              </Link>
                            </td>
                            <td>
                              {item.basic_info?.constituency ? item.basic_info?.constituency?.council?.constituency_name !== '' ? item.basic_info?.constituency?.council?.constituency_name : item.basic_info?.constituency?.assembly?.constituency_name !== '' ? item.basic_info?.constituency?.assembly?.constituency_name : item.basic_info?.constituency?.assembly?.constituency_name : "" +
                                " " +
                                item?.basic_info?.district ? item?.basic_info?.district?.checkLang?.district : ""}
                            </td>
                            <td>{item?.basic_info.party ? item?.basic_info?.party[checkLang]?.party_name : ""}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>

                {/* <PaginationComponent
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageLimit={pageLimit}
                  totalCount={debate?.count}
                /> */}
                <PaginationComponent
                  totalCount={debate.length
                  }
                  perPage={pageLimit}
                  handlePageChange={(cp) => {
                    setCurrentPage(cp)
                  }}
                  initialPage={currentPage}
                />
              </Col>
              <Col lg={4}>
                <div className="assemblymember mb-2">
                  <h3 style={{ background: "#000088" }}>
                    सांख्यिकीय विश्लेषण <br />
                    प्रातिनिधिक
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

export default MembersAssembly;
