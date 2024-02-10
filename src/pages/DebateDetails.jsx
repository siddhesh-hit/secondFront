import DebateVideo from "../assets/debate/debate_video.png"
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getApiById } from "../services/axiosInterceptors";
import LoaderComponents from "../components/LoaderComponents";

const DebateDetails = () => {
    const [debate, setDebate] = useState([]);
    const [loader, setLoader] = useState(null);

    const location = useLocation();
    const id = location.search.split("=")[1];

    const fetchData = async () => {
        setLoader(true);
        await getApiById("debate", id)
            .then((res) => setDebate(res.data.data))
            .catch((err) => console.log(err));
        setLoader(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loader) {
        return <LoaderComponents />;
    }
    return (
        <div>
            <section className="debatedetails">
                <div className="container">
                    <a className="gobackss" href="/">
                        <i className="fa fa-angle-left" />
                        Back
                    </a>
                    <table className="table-lightt table table-bordered">
                        <thead>
                            <tr>
                                <th>विषय</th>
                                <th>सभागृह</th>
                                <th>अधिवेशन</th>
                                <th>तारीख</th>
                                <th>PDF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {debate ? (
                                <tr>
                                    <td>{debate.topic}</td>
                                    <td>{debate.house}</td>
                                    <td>{debate.session}</td>
                                    <td>{debate.date}</td>

                                    <td>
                                        <Link to={"http://103.112.121.109:8000/" + debate.fileurl}>
                                            <i className="fa fa-eye"></i>
                                        </Link>
                                        {/* &nbsp;पहा */}
                                    </td>
                                </tr>
                            ) : (
                                <></>
                            )}
                        </tbody>
                    </table>
                    <section className="debatelogo">
                        <div className="row">
                            <div className="col-lg-8">
                                <table className="table-ligneww table table-bordered">
                                    <thead className="thead-light" />
                                    {debate && (<tbody>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                सदस्य
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>{debate.speaker}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                कामकाजाची यादी
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>
                                                    जगताप श्री. लक्ष्मण पांडुरंग, आव्हाड श्री. जितेंद्र सतीश,
                                                    &nbsp;भुजबळ श्री. छगन ,
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                प्रकार
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>-</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                उपप्रकार
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>38_39</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                प्रश्न क्रमांक
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>device</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                पीठासीन अधिकारी
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>प्रश्नोत्तरे</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                मंत्रालय
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>{debate.ministry_name}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                पृष्ठ क्रमांक
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>{debate.question_no}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                चर्चेचा प्रकार
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>विधी विधान </span>
                                            </td>
                                        </tr>
                                    </tbody>)}
                                </table>
                            </div>
                            <div className="col-lg-4">
                                <img
                                    className="w-100" src={DebateVideo} />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </div>
    )
}

export default DebateDetails
