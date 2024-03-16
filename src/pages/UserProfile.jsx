import { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import Arrow from "../assets/debate/arrow.svg";
import samplePDF1 from "../assets/Documents/02- Library Collection.pdf";

import { Link } from "react-router-dom";

import useLang from "../hooks/useLang";
import { userprofile } from "../data/constant";
import { decrypt } from "../utils/encrypt";

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({});
    const dateOfBirth = userInfo.date_of_birth;
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const { checkLang } = useLang();

    const formattedDate = new Date(dateOfBirth).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            setUserInfo(JSON.parse(decrypt(user)));
        }
    }, []);



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
                                                        <input type="text" readOnly value={userInfo.full_name} className="form-control" id="full_name" />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Date of Birth
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input type="text" readOnly value={formattedDate} className="form-control" id="full_name" />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Email
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input type="text" readOnly value={userInfo.email} className="form-control" id="full_name" />
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row">
                                                <Col lg={12}>
                                                    <label className="form-label" htmlFor="full_name">
                                                        Contact No
                                                    </label>
                                                    <div className="subject_textarea mb-2 input-group">
                                                        <input type="text" readOnly value={userInfo.phone_number} className="form-control" id="full_name" />
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
