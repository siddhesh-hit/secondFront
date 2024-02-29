import { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Arrow from "../assets/debate/arrow.svg";
import useLang from "../hooks/useLang"; 1
import { ImageUrl, getApi } from "../services/axiosInterceptors";
import { Link } from "react-router-dom";

const SessionCalender = () => {
    const [isDivVisible, setDivVisibility] = useState(false);
    const [debate, setDebate] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit, setPageLimit] = useState(10);
    const [modalShow, setModalShow] = useState(true);
    const [sorted, setSorted] = useState(false);
    const { lang, checkLang } = useLang();

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

    let obj = {
        Legislatio: "विधिविधान",
        budget: "अर्थसंकल्पीय आयुधे",
        device: "आयुधे",
        legisl: "विधिविधान",
        other: "इतर",
        surname: "संसदीय कामकाज पद्धती",
        budget_s: "अर्थसंकल्पीय आयुधे",
        devices: "आयुधे",
        proceeding: "संसदीय कामकाज पद्धती",
    };

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
            topic: "",
            house: "विधानसभा",
            session: "",
            year: "",

        }));

        debateFetch();
    };





    const debateFetch = async () => {
        // console.log(currentPage, pageLimit);
        let house = search.house === "एकत्रित" ? "" : search.house === "विधानसभा" ? "Assembly" : search.house === "विधानपरिषद" ? "Council" : "";
        await getApi(
            `session?perPage=${currentPage}&perLimit=${pageLimit}&houses=${house}&topic_name=${search.topic}&session=${search.session}&year=${search.year}`
        )
            .then((res) => setDebate(res.data.data))
            .catch((err) => console.log(err));
    };




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

        };
        fetchData();
    }, [checkLang]);
    useEffect(() => {
        debateFetch();
    }, [
        search.house,
        currentPage,
        pageLimit,]);
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter mb-4">
                                <h3>Filter</h3>
                                <Accordion className="filsss" defaultActiveKey={["0", "1", "2"]} alwaysOpen>
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
                                                    <>
                                                        <div className="datacheck1">
                                                            <label>  {item}</label>
                                                            <Form.Check
                                                                aria-label="option 7"
                                                                name="session"
                                                                value={item}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </>

                                                ))}
                                            </div>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Year Select</Accordion.Header>
                                        <Accordion.Body>
                                            <select
                                                className="secondfilers"
                                                name="year"
                                                onChange={handleChange}
                                                value={search.year}

                                            >
                                                <option hide value="">Select Year</option>
                                                {options?.year?.map((item, index) => (
                                                    <option value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Date Range</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="filtercontent">
                                                <Row className="daterange">
                                                    <Col lg={12}>
                                                        <label>पासून</label>
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                        />
                                                    </Col>
                                                    <Col lg={12}>
                                                        <label>प्रयंत</label>
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="formbutton">
                                <button className="reset"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                                <button className="apply">
                                    Apply
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
                                <button onClick={debateFetch} className="searchb">
                                    <i className="fa fa-search" />
                                </button>
                                <button onClick={handleReset} className="startover">
                                    Reset
                                </button>
                            </div>
                        </div>
                        <div className="breadvrumbss">
                            <Row>
                                <Col lg={6}>
                                    <div className="breadvrumbss-inner">
                                        <div className="countdebate">
                                            <Link to="/"><span>मुख्यपृष्ठ</span></Link>
                                            <img src={Arrow} alt="" />
                                            <span>सत्र दिनदर्शिका</span>
                                        </div>
                                        <p>
                                            [0 results]
                                        </p>
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
                                {
                                    debate?.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <span>
                                                    {index + 1}
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    {item?.topic_name}
                                                </span>
                                            </td>
                                            <td>{item?.houses}</td>
                                            <td>
                                                <p><span>{item[checkLang]["session"]}</span></p>
                                            </td>
                                            <td className="imagee">
                                                {item.documents.length > 0 ? item.documents.map((doc, index) => {
                                                    console.log(doc)
                                                    return (
                                                        <a
                                                            href={ImageUrl + doc?.document.destination + '/' + doc?.document.filename}
                                                            target="_blank" rel="noreferrer">
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
                                                    )
                                                }
                                                ) : <></>}
                                            </td>

                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SessionCalender;
