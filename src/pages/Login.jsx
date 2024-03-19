import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import Captcha from "demos-react-captcha";

import { postApi } from "../services/axiosInterceptors";
import { encrypt } from "../utils/encrypt";
import { login } from "../redux/reducers/UserReducer";
import { userLoginValidation } from "../validators/UserSchema";
import { header, loginpage } from "../data/constant";
import useLang from "../hooks/useLang";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { lang, checkLang } = useLang();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [captcha, setCaptcha] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (name, value) => {
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateUser = await userLoginValidation(userData);
    if (validateUser) {
      toast.error(validateUser);
    }

    if (!captcha) {
      toast.error("Captcha is filled wrong");
      return;
    }

    await postApi("user/loginEmail", userData)
      .then((res) => {
        console.log(res);
        if (res.data.data.user_verified) {
          console.log("sd");
          let enData = encrypt(res.data.data);
          sessionStorage.setItem("userInfo", enData);
          sessionStorage.removeItem("temp_email");
          dispatch(login(enData));
          navigate("/");
        } else {
          toast.error("User Does Not exist");
          navigate("/Register");
        }
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message.replace(/^Error: |"/g, ""));
        }
      });
  };

  const handleCaptchaChange = (value) => {
    value ? setCaptcha(true) : setCaptcha(false);
  };

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
                <h3 className="mb-4">{loginpage[checkLang].home}</h3>
                <div className="mb-4 input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                  <input
                    placeholder={loginpage[checkLang].email}
                    aria-label="ई-मेल आयडी"
                    aria-describedby="basic-addon1"
                    type="email"
                    className="form-control"
                    value={userData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
                <div className="mb-4 input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                  <input
                    placeholder={loginpage[checkLang].password}
                    aria-label="पासवर्ड"
                    aria-describedby="basic-addon1"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={userData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
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
                <Captcha
                  onChange={handleCaptchaChange}
                  // onRefresh={true}
                  placeholder={loginpage[checkLang].captacha}
                  length={10}
                />
                <a className="Forgot-Pass" href="/forgetpassword">
                  {loginpage[checkLang].forgetpassword}
                </a>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mt-3 btn btn-primary"
                >
                  {loginpage[checkLang].signin}
                </button>
                <div className="horizontal-lines mt-5 mb-3">
                  <div className="horizontal-line" />
                  <div className="text">{loginpage[checkLang].or}</div>
                  <div className="horizontal-line" />
                </div>
                <div className="text-center mt-5 mb-5">
                  <a href="/phone-login">
                    <button className="phone-login ">
                      <i className="fa fa-phone" style={{ marginRight: 5 }} />
                      {loginpage[checkLang].phonesign}
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

export default Login;
