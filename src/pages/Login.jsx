import { useState } from "react";
import logo from "../assets/logo.png";
const Login = () => {
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
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="login-box">
                <h3 className="mb-4">
                  साइन इन करण्यासाठी, कृपया
                  <br />
                  तुमचा इमेल पत्ता लिहा
                </h3>
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
                    defaultValue="sidd@hit.com"
                  />
                </div>
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
                    defaultValue="siddhit"
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
                <a className="Forgot-Pass" href="/forget-password">
                  पासवर्ड विसरलात?
                </a>
                <button type="button" className="mt-3 btn btn-primary">
                  साइन इन करा
                </button>
                <div className="horizontal-lines mt-5 mb-3">
                  <div className="horizontal-line" />
                  <div className="text">किंवा</div>
                  <div className="horizontal-line" />
                </div>
                <div className="text-center mt-5 mb-5">
                  <a href="/phone-login">
                    <button className="phone-login ">
                      <i className="fa fa-phone" style={{ marginRight: 5 }} />
                      फोन नंबरसह साइन इन करा
                    </button>
                  </a>
                </div>
                <p className="new_account">
                  खाते नाही?
                  <a href="/register">साइन अप करा</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
