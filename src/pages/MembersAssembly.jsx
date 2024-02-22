import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";

import Graph from "../assets/graphs.svg";
import Arrow from "../assets/debate/arrow.svg";
import Sort from "../assets/debate/sort.svg";

import { getApi } from "../services/axiosInterceptors";
import { memberName } from "../data/memberName";
import PopupHome from "./PopupHome";
import PaginationComponent from "../components/Pagination";
import HighlightSentence from "../components/HighlightSentence";

const MembersAssembly = () => {
    const [debate, setDebate] = useState([]);
    const [isDivVisible, setDivVisibility] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit, setPageLimit] = useState(10);
    const [modalShow, setModalShow] = useState(true);
    const [sorted, setSorted] = useState(false);

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

    const debateFetch = async () => {
        // console.log(currentPage, pageLimit);
        await getApi(
            `debate?perPage=${currentPage}&perLimit=${pageLimit}&house=${search.house}`
        )
            .then((res) => setDebate(res.data))
            .catch((err) => console.log(err));
    };

    const handleSearch = async () => {
        let house = search.house === "एकत्रित" ? "" : search.house;

        let session = search.session === "सर्व" ? "" : search.session;

        await getApi(
            `debate/fields?perPage=${currentPage}&perLimit=${pageLimit}&topic=${search.topic}&members_name=${search.members_name}&house=${house}&session=${session}&volume=${search.volume}&kramank=${search.kramank}&method=${search.method}&method_type=${search.method_type}&method_sub_type=${search.method_sub_type}&ministry_name=${search.ministry_name}`
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
    }, [
        search.session,
        search.house,
        search.members_name,
        currentPage,
        pageLimit,
    ]);

    useEffect(() => {
        debateFetch();
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

    return (
        <div>
            <PopupHome show={modalShow} onHide={() => setModalShow(false)} />
            <Container fluid className="memberlistpage">
                <Row>
                    <Col lg={3} className="memberleft">
                        <div className="search">
                            <h4>सदस्य</h4>
                            <ReactSearchAutocomplete
                                items={memberName}
                                placeholder="सदस्य शोधा"
                                onSearch={handleOnSearch}
                                onSelect={handleOnSelect}
                            />
                        </div>
                        <div className="assemblymember mb-2">
                            <h3 style={{ background: '#CC7722' }}>द्वारे शोधा</h3>
                            <ul>
                                <a href=""><li>पक्षनिहाय<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>मतदारसंघनिहाय<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>आडनावानुसार<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>पदनाम<i className="fa fa-chevron-right icon-calender"></i></li></a>
                            </ul>
                        </div>
                        <div className="assemblymember mb-2">
                            <h3>प्रथमच निवडून आलेले सदस्य</h3>
                            <ul>
                                <a href=""><li>राजकीय पक्ष<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>मतदारसंघनिहाय<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>आडनावानुसार<i className="fa fa-chevron-right icon-calender"></i></li></a>
                            </ul>
                        </div>
                        <div className="assemblymember">
                            <h3 style={{ background: '#EE00AB' }}>महिला सदस्य</h3>
                            <ul>
                                <a href=""><li>राजकीय पक्ष<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>मतदारसंघनिहाय<i className="fa fa-chevron-right icon-calender"></i></li></a>
                                <a href=""><li>आडनावानुसार<i className="fa fa-chevron-right icon-calender"></i></li></a>
                            </ul>
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
                                    रीसेट
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
                                            <span>सदस्य</span>
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

                                <table className="debate-light table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ borderRight: "solid white 1px" }}>क्रमांक</th>
                                            <th style={{ borderRight: "solid white 1px" }}>नाव</th>
                                            <th style={{ borderRight: "solid white 1px" }}>मतदारसंघ</th>
                                            <th style={{ borderRight: "solid white 1px" }}>राजकीय पक्ष</th>
                                            <th>लिंग</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {debate?.data?.map((item, index) => {
                                            let name = item?.members_name.split(",");
                                            let twoEntry;

                                            name.length < 5 ? (twoEntry = true) : (twoEntry = false);

                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <HighlightSentence
                                                            data={"1"}
                                                            search={search?.house}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Link to="/" className="membernamee">
                                                            <img
                                                                src="https://mlsdemo.sblcorp.com/img/member/photo/eknath-shinde.jpeg"
                                                                alt="user"
                                                                className="member_imgs"
                                                            />
                                                            एकनाथ संभाजी शिंदे
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <HighlightSentence
                                                            data="२०-मुक्ताईनगर"
                                                            search={search?.session}
                                                        />
                                                    </td>
                                                    <td>भारतीय राष्ट्रीय काँग्रेस</td>
                                                    <td>
                                                        पुरुष
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                <PaginationComponent
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    pageLimit={pageLimit}
                                    totalCount={debate?.count}
                                />
                            </Col>
                            <Col lg={4}>
                                <h3 className="chartdata">
                                    प्रस्तुत हेतूसाठी
                                </h3>
                                <div className="assemblymember mb-2">
                                    <h3 style={{ background: '#CC7722' }}>द्वारे शोधा</h3>
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
