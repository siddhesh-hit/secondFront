import DebateVideo from "../assets/debate/debate_video.png"

const DebateDetails = () => {
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
                                <th>क्रमांक</th>
                                <th>खंड</th>
                                <th>PDF</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    पुणे जिल्ह्यातील अत्यंत महत्त्वाच्या पुणे - शिरूर रस्त्याच्या
                                    दुरवस्थेबाबत
                                </td>
                                <td>विधानसभा</td>
                                <td>अर्थसंकल्पीय</td>
                                <td>१७ मार्च २०११</td>
                                <td>४</td>
                                <td>१५९</td>
                                <td>
                                    <a
                                        href="http://103.112.121.109:8000//media/%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE/%E0%A5%A8%E0%A5%A6%E0%A5%A7%E0%A5%A7/%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A5%80%E0%A4%AF/%E0%A5%AA/pdf/%E0%A5%A7%E0%A5%AB%E0%A5%AF_kramank_%E0%A5%AA_38_39.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa fa-eye" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <section className="debatelogo">
                        <div className="row">
                            <div className="col-lg-8">
                                <table className="table-ligneww table table-bordered">
                                    <thead className="thead-light" />
                                    <tbody>
                                        <tr>
                                            <td
                                                style={{
                                                    backgroundColor: "#4e3431",
                                                    borderColor: "#4e3431",
                                                    color: "white"
                                                }}
                                            >
                                                अध्यक्ष
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>दिलिप वाळसे-पाटील </span>
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
                                                सदस्य
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
                                                मंत्रालय
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
                                                पृष्ठ क्रमांक
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
                                                वादाचा प्रकार
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
                                                आयुधाचा प्रकार
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
                                                आयुधाचा उपप्रकार
                                            </td>
                                            <td style={{ textAlign: "left" }}>
                                                <span>अतारांकित प्रश्न</span>
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
                                                <span>३९४२५ </span>
                                            </td>
                                        </tr>
                                    </tbody>
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
