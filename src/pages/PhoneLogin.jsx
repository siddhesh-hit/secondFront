import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import useLang from "../hooks/useLang";
import { header, loginpage } from "../data/constant";

const PhoneLogin = () => {
  const { lang, checkLang } = useLang();
  const handleLanguage = (newLang) => {
    console.log(newLang);

    window.sessionStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange"));
  };
  return (
    <div>
      <div className="container-fluid loginboxpage">
        <button
          className="languagechanges loginn mx-2"
          onClick={() => handleLanguage(lang === "mr" ? "en" : "mr")}
        >
          {header[checkLang].language}
        </button>
        <a href="/">
          <img src={logo} alt="logo" className="loginbg" />
        </a>
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="login-box">
                <h3 className="mb-4">
                  {loginpage[checkLang].home1}
                </h3>
                <div className="mb-4 input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                  <input
                    placeholder={loginpage[checkLang].mobile}
                    aria-label="फोन नंबर"
                    aria-describedby="basic-addon1"
                    type="number"
                    className="form-control"
                  />
                </div>
                <Link to="/verify-otp">
                  <button type="button" className="mt-3 btn btn-primary">
                    {loginpage[checkLang].sendotp}
                  </button>
                </Link>
                <div className="horizontal-lines mt-5 mb-3">
                  <div className="horizontal-line" />
                  <div className="text">{loginpage[checkLang].or}</div>
                  <div className="horizontal-line" />
                </div>
                <div className="text-center mt-5 mb-5">
                  <a href="/Login">
                    <button className="phone-login ">
                      <i
                        className="fa fa-envelope"
                        style={{ marginRight: 5 }}
                      />
                      {loginpage[checkLang].emailid}
                    </button>
                  </a>
                </div>
                <p className="new_account">
                  {loginpage[checkLang].noaccount}
                  <a href="/Register">{loginpage[checkLang].signup}</a>
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
