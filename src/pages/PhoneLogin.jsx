import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const PhoneLogin = () => {
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
                <button type="button" className="mt-3 btn btn-primary">
                  <Link to="/verify-otp">OTP मिळवा</Link>
                </button>
                <div className="horizontal-lines mt-5 mb-3">
                  <div className="horizontal-line" />
                  <div className="text">किंवा</div>
                  <div className="horizontal-line" />
                </div>
                <div className="text-center mt-5 mb-5">
                  <a href="/phone-login">
                    <button className="phone-login ">
                      <i
                        className="fa fa-envelope"
                        style={{ marginRight: 5 }}
                      />
                      ईमेल आयडीने साइन इन करा
                    </button>
                  </a>
                </div>
                <p className="new_account">
                  खाते नाही?
                  <a href="/Register">साइन अप करा</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLogin;
