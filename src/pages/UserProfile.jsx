import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import Arrow from "../assets/debate/arrow.svg";

import { Link } from "react-router-dom";

import samplePDF1 from "../assets/Documents/02- Library Collection.pdf";
import useLang from "../hooks/useLang";
import { userprofile } from "../data/constant";

const UserProfile = () => {
    const { lang, checkLang } = useLang();
    return (
        <div className="galleryback">
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="breadcumbsss">
                            <div className="countdebate">
                                <Link to="/">
                                    <span>{userprofile[checkLang].home}</span>
                                </Link>
                                <img src={Arrow} alt="" />
                                <span>{userprofile[checkLang].userpro}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="aboutcontent">
                <h1>
                {userprofile[checkLang].userpro}
                    <div className="hrline"></div>
                </h1>
            </div>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column activecontent">
                                {/* <Nav.Item>
                                    <p className="profile_name"><i className="fa fa-user" aria-hidden="true"></i> Vishal Kunwar</p>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <Nav.Link eventKey="first">{userprofile[checkLang].basic}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">{userprofile[checkLang].intrest}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">{userprofile[checkLang].req}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">{userprofile[checkLang].confi}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">{userprofile[checkLang].changepass}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/">{userprofile[checkLang].logg}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-0">
                                <Tab.Pane eventKey="first">
                                    <div className="profile-box1">
                                        <h3 className="heading">
                                        {userprofile[checkLang].basic}
                                        </h3>
                                        <p className="headingpara">{userprofile[checkLang].basictitle}</p>
                                        <div className="intrestedarea">
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Name
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input type="text" className="form-control" id="full_name" />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Date of Birth
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input type="text" className="form-control" id="full_name" />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Email
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input type="text" className="form-control" id="full_name" />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Contact No
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input type="text" className="form-control" id="full_name" />
                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="profile-box1">
                                        <h3 className="heading">
                                            Select Interest Area
                                        </h3>
                                        <div className="intrestedarea">
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Select Interest Area
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <select
                                                            aria-label="User Type Selection"
                                                            name="designation"
                                                            className="form-select"
                                                        >
                                                            <option>Debates</option>
                                                            <option>Member List</option>
                                                            <option>Vidhan Sabha</option>
                                                            <option>Session Calender</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Description
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <textarea
                                                            placeholder="Enter your concern"
                                                            className="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            rows={3}
                                                        />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <div className="button_less">
                                                    <button className="submit-feed">
                                                    {userprofile[checkLang].submit}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="profile-box1">
                                        <h3 className="heading">
                                            Request For Access Updates
                                        </h3>
                                        <div className="intrestedarea">
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Request Query
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <select
                                                            aria-label="User Type Selection"
                                                            name="designation"
                                                            className="form-select"
                                                        >
                                                            <option>Debates</option>
                                                            <option>Member List</option>
                                                            <option>Vidhan Sabha</option>
                                                            <option>Session Calender</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Description
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <textarea
                                                            placeholder="Enter your concern"
                                                            className="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            rows={3}
                                                        />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <div className="button_less">
                                                    <button className="submit-feed">
                                                    {userprofile[checkLang].submit}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">

                                    <div className="profile-box1">
                                        <h3 className="heading">
                                            Confidential Documents Details
                                        </h3>
                                        <div className="intrestedarea">
                                            <table className="debate-light table table-bordered responsive-table">
                                                <thead>
                                                    <tr>
                                                        <th style={{ borderRight: "1px solid white" }}>क्रमांक</th>
                                                        <th style={{ borderRight: "1px solid white" }}>नाव</th>
                                                        <th style={{ borderRight: "1px solid white" }}>मतदारसंघ</th>
                                                        <th style={{ borderRight: "1px solid white" }}>राजकीय पक्ष</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            Tender(General)
                                                        </td>
                                                        <td>1692313416268.19_TENDER DOCUMENT.pdf</td>
                                                        <td><a style={{ color: 'black' }} href={samplePDF1} download><i className="fa fa-download icon-calender"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            Tender(General)
                                                        </td>
                                                        <td>1692313416268.19_TENDER DOCUMENT.pdf</td>
                                                        <td><a style={{ color: 'black' }} href={samplePDF1} download><i className="fa fa-download icon-calender"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            Tender(General)
                                                        </td>
                                                        <td>1692313416268.19_TENDER DOCUMENT.pdf</td>
                                                        <td><a style={{ color: 'black' }} href={samplePDF1} download><i className="fa fa-download icon-calender"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            Tender(General)
                                                        </td>
                                                        <td>1692313416268.19_TENDER DOCUMENT.pdf</td>
                                                        <td><a style={{ color: 'black' }} href={samplePDF1} download><i className="fa fa-download icon-calender"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            Tender(General)
                                                        </td>
                                                        <td>1692313416268.19_TENDER DOCUMENT.pdf</td>
                                                        <td><a style={{ color: 'black' }} href={samplePDF1} download><i className="fa fa-download icon-calender"></i></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <div className="profile-box1">
                                        <h3 className="heading">
                                        {userprofile[checkLang].reset}
                                        </h3>
                                        <div className="intrestedarea">
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Reset Your Password
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="full_name"
                                                            placeholder="Enter your password"
                                                        />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <div className="button_less">
                                                    <button className="submit-feed">
                                                    {userprofile[checkLang].submit}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div >
    );
};

export default UserProfile;
