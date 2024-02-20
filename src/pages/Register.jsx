import { useState } from "react";
import logo from "../assets/logo.png";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <div className="container-fluid loginboxpage">
                <a href="/">
                    <img src={logo} alt="logo" className="loginbg" />
                </a>
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="login-box">
                                <h3 className="mb-4">
                                    साइन अप करण्यासाठी, तुमची
                                    <br />
                                    मूलभूत माहिती प्रविष्ट करा
                                </h3>
                                <div className="row registerpage">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">पूर्ण नाव<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-user" aria-hidden="true" />
                                            </span>
                                            <input
                                                placeholder="तुमचे पूर्ण नाव एंटर करा "
                                                aria-label="तुमचे पूर्ण नाव एंटर करा "
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">ई-मेल आयडी<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-envelope" aria-hidden="true" />
                                            </span>
                                            <input
                                                placeholder="ई-मेल आयडी"
                                                aria-label="ई-मेल आयडी"
                                                aria-describedby="basic-addon1"
                                                type="email"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">पासवर्ड<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-lock" aria-hidden="true" />
                                            </span>
                                            <input
                                                placeholder="पासवर्ड"
                                                aria-label="पासवर्ड"
                                                aria-describedby="basic-addon1"
                                                type={showPassword ? "text" : "password"}
                                                className="form-control"
                                            />
                                            <div className="input-group-btn">
                                                <span
                                                    onClick={togglePasswordVisibility}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    {showPassword ? (
                                                        <i className="fa fa-eye-slash" />
                                                    ) : (
                                                        <i className="fa fa-eye" />
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">पासवर्डची पुष्टी<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-lock" aria-hidden="true" />
                                            </span>
                                            <input
                                                placeholder="पासवर्डची पुष्टी करा"
                                                aria-label="पासवर्डची पुष्टी करा"
                                                aria-describedby="basic-addon1"
                                                type={showPassword ? "text" : "password"}
                                                className="form-control"
                                            />
                                            <div className="input-group-btn">
                                                <span
                                                    onClick={togglePasswordVisibility}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    {showPassword ? (
                                                        <i className="fa fa-eye-slash" />
                                                    ) : (
                                                        <i className="fa fa-eye" />
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">फोन नंबर<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-phone" aria-hidden="true" />
                                            </span>
                                            <input
                                                placeholder="फोन नंबर"
                                                aria-label="फोन नंबर"
                                                aria-describedby="basic-addon1"
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">लिंग<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-venus-double" aria-hidden="true" />
                                            </span>
                                            <select aria-label="User Type Selection" name="gender" placeholder="लिंग" className="form-select">
                                                <option value="gender">लिंग</option>
                                                <option value="male">पुरुष</option>
                                                <option value="female">स्त्री</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">जन्मतारीख<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                            </span>
                                            <input
                                                placeholder="फोन नंबर"
                                                aria-label="फोन नंबर"
                                                aria-describedby="basic-addon1"
                                                type="date"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">वापरकर्ता प्रकार<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-user" aria-hidden="true" />
                                            </span>
                                            <select aria-label="User Type Selection" name="designation" className="form-select">
                                                <option>वापरकर्ता प्रकार निवडा</option>
                                                <option>Researcher(संशोधक)</option>
                                                <option>Student(विद्यार्थी)</option>
                                                <option>Public()</option></select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">प्रोफाइल चित्र</label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-upload" aria-hidden="true" />
                                            </span>
                                            <input label="Upload" placeholder="Profile Picture" accept="image/*" type="file" id="profilePicture" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="mt-3 btn btn-primary" style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%', display: 'block' }}>
                                    साइन अप करा
                                </button>
                                <p className="new_account mt-5">
                                    आधीपासूनच एक खाते आहे?
                                    <a href="/Login">साइन इन करा</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
