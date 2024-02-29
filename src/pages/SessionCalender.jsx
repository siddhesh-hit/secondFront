import { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";
import Arrow from "../assets/debate/arrow.svg";
import useLang from "../hooks/useLang";
import { getApi } from "../services/axiosInterceptors";

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
        members_name: "",
        house: "विधानसभा",
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

    let surnames = [
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
        debateFetch();
    };

    const handleSort = () => {
        // console.log(debate)

        if (sorted) {
            const newDebate = debate.data.sort((a, b) =>
                b.topic.localeCompare(a.topic)
            );
            setDebate(newDebate);
            setSorted(!sorted);
        } else {
            const newDebate = debate.data.sort((a, b) =>
                a.topic.localeCompare(b.topic)
            );
            setDebate(newDebate);
            setSorted(!sorted);
        }
    };

    const debateFetch = async () => {
        // console.log(currentPage, pageLimit);
        let house = search.house === "एकत्रित" ? "" : search.house === "विधानसभा" ? "Assembly" : search.house === "विधानपरिषद" ? "Council" : "";
        await getApi(
            `member/memberdetails?perPage=${currentPage}&perLimit=${pageLimit}&name=${search.members_name}&house=${house}&party=${search.party}&constituency=${search.constituency}&surname=${search.surname}&district=${search.district}&gender=${search.gender}`
        )
            .then((res) => setDebate(res.data.data))
            .catch((err) => console.log(err));
    };




    useEffect(() => {
        const fetchData = async () => {
            await getApi("member/option?id=basic_info.party")
                .then((res) => {
                    if (res.data.success) {
                        setOptions((prev) => ({
                            ...prev,
                            party: res.data.data,
                        }));
                    }
                })
                .catch((err) => console.log(err));

            await getApi("member/option?id=basic_info.constituency")
                .then((res) => {
                    if (res.data.success) {
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

            await getApi("member/option?id=basic_info.district")
                .then((res) => {
                    if (res.data.success) {
                        setOptions((prev) => ({
                            ...prev,
                            district: res.data.data,
                        }));
                    }
                })
                .catch((err) => console.log(err));

            await getApi("member/option?id=basic_info.gender")
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
    }, []);
    useEffect(() => {
        debateFetch();
    }, [
        search.members_name,
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
                                                <div className="datacheck">
                                                    <label>विधानपरिषद</label>
                                                    <Form.Check
                                                        aria-label="option 1"
                                                        name="house"
                                                        value={"विधानपरिषद"}
                                                    />
                                                </div>
                                                <div className="datacheck">
                                                    <label>विधानसभा</label>
                                                    <Form.Check
                                                        aria-label="option 2"
                                                        name="house"
                                                        value={"विधानसभा"}
                                                    />
                                                </div>
                                                <div className="datacheck1">
                                                    <label>एकत्रित</label>
                                                    <Form.Check
                                                        aria-label="option 3"
                                                        name="house"
                                                        value={"एकत्रित"}
                                                    />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>सत्र</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="filtercontent">
                                                <div className="datacheck">
                                                    <label>सर्व</label>
                                                    <Form.Check
                                                        aria-label="option 4"
                                                        name="session"
                                                        value={"सर्व"}
                                                    />
                                                </div>
                                                <div className="datacheck">
                                                    <label>पावसाळी</label>
                                                    <Form.Check
                                                        aria-label="option 5"
                                                        name="session"
                                                        value={"पावसाळी"}
                                                    />
                                                </div>
                                                <div className="datacheck">
                                                    <label>अर्थसंकल्पीय</label>
                                                    <Form.Check
                                                        aria-label="option 6"
                                                        name="session"
                                                        value={"अर्थसंकल्पीय"}
                                                    />
                                                </div>
                                                <div className="datacheck1">
                                                    <label>विशेष</label>
                                                    <Form.Check
                                                        aria-label="option 7"
                                                        name="session"
                                                        value={"विशेष"}
                                                    />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Year Select</Accordion.Header>
                                        <Accordion.Body>
                                            <select
                                                className="secondfilers"
                                                name="kramank"
                                            >
                                                <option>Select Year</option>
                                                <option>2011</option>
                                                <option>2012 </option>
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
                                <button className="reset">
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
                                    placeholder="विषय आणि कीवर्ड शोधा"
                                    className="form-control"
                                />
                                <button className="searchb">
                                    <i className="fa fa-search" />
                                </button>
                                <button className="startover">
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
                                <tr>
                                    <td>
                                        <span>
                                            1
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            विधानसभा
                                        </span>
                                    </td>
                                    <td>२२ मार्च २०११</td>
                                    <td>
                                        <p><span>पुरके श्री. वसंत बापट श्री. गिरीष....</span></p>
                                    </td>
                                    <td className="imagee">
                                        <a
                                            href="#"
                                            target="_blank" rel="noreferrer">
                                            <img src="/src/assets/debate/Frame.svg" alt="" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SessionCalender;
