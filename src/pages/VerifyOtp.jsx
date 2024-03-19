import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { postApi } from "../services/axiosInterceptors";
import { encrypt } from "../utils/encrypt";
import { login } from "../redux/reducers/UserReducer";
import { header, loginpage } from "../data/constant";
import useLang from "../hooks/useLang";

const VerifyOtp = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const { lang, checkLang } = useLang();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    // Assuming your OTP length is 4
    if (value.length <= 1) {
      setOTP((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      // Automatically move to the next input after the first data entry
      if (value.length === 1 && index < 3) {
        document.getElementById(`input${index + 2}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any element in the OTP array is empty
    if (otp.some((element) => element === "")) {
      toast.error("Please enter a valid OTP");
    } else {
      const data = {
        email_otp: otp.join(""), // Join the OTP array into a string
        email: sessionStorage.getItem("temp_email"),
      };

      try {
        const res = await postApi("user/verifyEmail", data);
        if (res.data.data.user_verified) {
          let enData = encrypt(res.data.data);
          sessionStorage.setItem("userInfo", enData);
          sessionStorage.removeItem("temp_email");
          dispatch(login(enData));
          navigate("/");
        } else {
          toast.error("Something went Wrong");
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message.replace(/^Error: |"/g, ""));
        }
      }
    }
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
                <h3 className="mb-4">{loginpage[checkLang].codetype}</h3>
                <div className="mb-4">
                  <form>
                    <div className="form-top">
                      {[0, 1, 2, 3].map((index) => (
                        <input
                          key={index}
                          id={`input${index + 1}`}
                          type="text"
                          className="form-control-otp"
                          value={otp[index]}
                          onChange={(event) => handleInputChange(index, event)}
                          maxLength={1}
                        />
                      ))}
                    </div>
                    <button
                      className="mt-3 btn btn-primary"
                      disabled={
                        otp.some((element) => element === "") ? true : false
                      }
                      onClick={handleSubmit}
                    >
                      {loginpage[checkLang].submit}
                    </button>
                  </form>
                </div>
                <div className="horizontal-lines mt-5 mb-3">
                  <div className="horizontal-line" />
                  <div className="text">{loginpage[checkLang].or}</div>
                  <div className="horizontal-line" />
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

export default VerifyOtp;
