import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import logo from "../assets/logo.png";

import { userResetPasswordValidation } from "../validators/UserSchema";
import { postApi } from "../services/axiosInterceptors";
import { login } from "../redux/reducers/userReducer";
import { encrypt } from "../utils/encrypt";
import { resetpassword } from "../data/constant";

import useLang from "../hooks/useLang";
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { lang, checkLang } = useLang();
  const [userData, setUserData] = useState({
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { password: userData.password, token };
    const validateUser = await userResetPasswordValidation(userData);
    if (validateUser) {
      toast.error(validateUser);
    } else {
      await postApi("user/reset", data)
        .then((res) => {
          console.log("res", res.data);
          if (res.data.data.user_verified) {
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
            let message = error.response.data.message.replace(
              /^Error: |"/g,
              ""
            );
            message = message.toLowerCase();
            if (error.response.status === 403 && message.includes("session")) {
              navigate("/forgetpassword");
              toast.error(message);
            }
            toast.error(message);
          }
        });
    }
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
                <h3 className="mb-4">{resetpassword[checkLang].newpas}</h3>
                <div className="mb-4 input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                  <input
                    placeholder={resetpassword[checkLang].newpass}
                    aria-label="पासवर्ड"
                    aria-describedby="basic-addon1"
                    className="form-control"
                    type={showPassword ? "text" : "password"}
                    value={userData.password}
                    onChange={(e) =>
                      setUserData((p) => ({ ...p, password: e.target.value }))
                    }
                  />
                </div>
                <div className="mb-4 input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                  <input
                    placeholder={resetpassword[checkLang].confipass}
                    aria-label="पासवर्ड"
                    aria-describedby="basic-addon1"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={userData.confirmPassword}
                    onChange={(e) =>
                      setUserData((p) => ({
                        ...p,
                        confirmPassword: e.target.value,
                      }))
                    }
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
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mt-3 btn btn-primary"
                >
                  {resetpassword[checkLang].signin}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
