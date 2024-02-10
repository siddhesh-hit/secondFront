import { useState } from "react"
import { Container, Row, Col, Accordion, Form } from "react-bootstrap"
import PDF from "../assets/debate/Frame.svg"
import Arrow from "../assets/debate/arrow.svg"
import Sort from "../assets/debate/sort.svg"
import { Link } from "react-router-dom"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const Debate = () => {
    const items = [
        {
            id: 0,
            name: 'vishal'
        },
        {
            id: 1,
            name: 'siddhesh'
        },
        {
            id: 2,
            name: 'sid'
        },
        {
            id: 3,
            name: 'vish'
        },
        {
            id: 4,
            name: 'vi'
        },
        {
            id: 5,
            name: 'visha'
        }
    ]
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }
    const [isDivVisible, setDivVisibility] = useState(false);

    const toggleDivVisibility = () => {
        setDivVisibility(!isDivVisible);
    };
    return (
        <div>
            <Container fluid className="debatepage">
                <Row>
                    <Col lg={3}>
                        <div className="filters">
                            <div className="firstfilter">
                                <h3>फिल्टर</h3>
                                <h4>सदस्य</h4>
                                <ReactSearchAutocomplete
                                    items={items}
                                    placeholder="Search Members"
                                    onSearch={handleOnSearch}
                                    onSelect={handleOnSelect}
                                />
                                <Accordion className="filsss" defaultActiveKey={["0", "1", "2"]}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>सभागृह</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="filtercontent">
                                                <div className="datacheck"><label>विधानपरिषद</label> <Form.Check type="radio" name="ancd" aria-label="option 1" /></div>
                                                <div className="datacheck"><label>विधानसभा</label>  <Form.Check type="radio" name="ancd" aria-label="option 2" /></div>
                                                <div className="datacheck1"><label>एकत्रित</label>  <Form.Check type="radio" name="ancd" aria-label="option 3" /></div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>अधिवेशन</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="filtercontent">
                                                <div className="datacheck"><label>सर्व</label> <Form.Check aria-label="option 4" /></div>
                                                <div className="datacheck"><label>पावसाळी</label> <Form.Check aria-label="option 5" /></div>
                                                <div className="datacheck"><label>अर्थसंकल्पीय</label> <Form.Check aria-label="option 6" /></div>
                                                <div className="datacheck1"><label>विशेष</label> <Form.Check aria-label="option 7" /></div>
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
                                                        <input className="form-control" disabled type="number" min={1987} max={2024} value={2011} />
                                                    </Col>
                                                    <Col lg={4}>
                                                        <label>पर्यंत</label>
                                                        <input className="form-control" disabled type="number" min={1987} max={2024} value={2011} />
                                                    </Col>
                                                    <Col lg={4}>
                                                        <button className="apply1">अप्लाय </button>
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
                                    ऍडव्हान्स फिल्टर <div className="iconss">{isDivVisible ? '-' : '+'}</div>
                                </button>
                                {
                                    isDivVisible &&
                                    <div>

                                        <Accordion className="filsss1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>खंड</Accordion.Header>
                                                <Accordion.Body>
                                                    <select className="secondfilers">
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                    </select>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>क्रमांक</Accordion.Header>
                                                <Accordion.Body>
                                                    <select className="secondfilers">
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                    </select>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>आयुधे </Accordion.Header>
                                                <Accordion.Body>
                                                    <select className="secondfilers">
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                    </select>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>आयुधाचा प्रकार</Accordion.Header>
                                                <Accordion.Body>
                                                    <select className="secondfilers">
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                    </select>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>आयुधाचा उपप्रकार</Accordion.Header>
                                                <Accordion.Body>
                                                    <select className="secondfilers">
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                    </select>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>मंत्रालय </Accordion.Header>
                                                <Accordion.Body>
                                                    <select className="secondfilers">
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                        <option value="1">1</option>
                                                    </select>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                }
                            </div>
                            <div className="formbutton">
                                <button className="reset">रिसेट</button>
                                <button className="apply">अप्लाय </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="debate-search">
                            <div className="searchboxx">
                                <input type="text" className="form-control" placeholder="Search Topic or Keywords" />
                                <button className="searchb">
                                    <i className="fa fa-search" />
                                </button>
                                <button className="startover">स्टार्ट पुन्हा</button>
                            </div>
                        </div>
                        <div className="breadvrumbss">
                            <Row>
                                <Col lg={5}>
                                    <div className="breadvrumbss-inner">
                                        <div className="countdebate">
                                            <span>Home</span><img src={Arrow} alt="" /><span>Debate</span>
                                        </div>
                                        <p>[78 items]</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="debate-right">
                                        <select name="sabhaselection">
                                            <option value="विधानसभा  12th">विधानसभा  12th</option>
                                            <option value="विधानसभा  11th">विधानसभा  11th</option>
                                            <option value="विधानसभा  10th">विधानसभा  10th</option>
                                            <option value="विधानसभा  09th">विधानसभा  09th</option>
                                        </select>
                                        <select name="sabhaselection">
                                            <option value="10 per pag">10 per page</option>
                                            <option value="20 per pag">20 per page</option>
                                            <option value="30 per pag">30 per page</option>
                                            <option value="40 per pag">40 per page</option>
                                        </select>
                                        <span className="sorting">
                                            <Link to="/"><img src={Sort} alt="" /></Link>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <table className="debate-light table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: '30%', borderRight: 'solid white 1px' }}>विषय</th>
                                    <th style={{ borderRight: 'solid white 1px' }}>सभागृह</th>
                                    <th style={{ borderRight: 'solid white 1px' }}>अधिवेशन</th>
                                    <th style={{ borderRight: 'solid white 1px' }}>तारीख</th>
                                    <th style={{ borderRight: 'solid white 1px' }}>सदस्य</th>
                                    <th>तपशील</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        वसई-विरार महानगरपालिकेतून ३५ गावे वगळण्याबाबत
                                    </td>
                                    <td>विधानसभा 12</td>
                                    <td>बजेट (सामान्य)</td>
                                    <td>18 मार्च 2011</td>
                                    <td>
                                        <p>वलसे पाटील श्री. दिलीप वलसे पाटील श्री. दिलीप.</p>
                                    </td>
                                    <td className="imagee">
                                        <Link to="/">
                                            <i className="fa fa-eye" />
                                        </Link>
                                        <Link to="/">
                                            <img src={PDF} alt="" />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Debate
