import { useState } from "react";
import logo from "../assets/logo.png";
import { userForgetPasswordValidation } from "../validators/UserSchema";
import { toast } from "react-toastify";
import { postApi } from "../services/axiosInterceptors";
import { useNavigate } from "react-router-dom";
import { header, resetpassword } from "../data/constant";
import useLang from "../hooks/useLang";
const ForgetPassword = () => {
  const { lang, checkLang } = useLang();
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email };
    const validateUser = await userForgetPasswordValidation(data);
    console.log();
    if (validateUser) {
      toast.error(validateUser);
    } else {
      await postApi("user/forgot", data)
        .then((response) => {
          console.log("response", response.data);
          toast.success(response.data.message);
          navigate("/");
        })
        .catch((error) => {
          console.log("error", error);
          if (error.response && error.response.data.message) {
            toast.error(error.response.data.message.replace(/^Error: |"/g, ""));
          }
        });
    }
  };
  const handleLanguage = (newLang) => {
    console.log(newLang);

    window.localStorage.setItem("lang", newLang);
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
              <form onSubmit={handleSubmit}>
                <div className="login-box">
                  <h3 className="mb-4">{resetpassword[checkLang].title}</h3>
                  <div className="mb-4 input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                    <input
                      placeholder={resetpassword[checkLang].email}
                      aria-label="ई-मेल आयडी"
                      aria-describedby="basic-addon1"
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-3 btn btn-primary"
                  >
                    {resetpassword[checkLang].button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
