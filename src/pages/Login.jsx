import { useState } from "react";
import { postApi } from "../services/axiosInterceptors";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import { SecretKey } from "../services/config";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/reducers/UserReducer";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { userLoginValidation } from "../validators/UserSchema";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [userData, setuserData] = useState({
    email: "shivam@mail.com",
    password: "Shivam@123",
  });
  const handleChange = (name, value) => {
    setuserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateUser = await userLoginValidation(userData);
    console.log();
    if (validateUser) {
      toast.error(validateUser);
    } else {
      await postApi("user/loginEmail", userData)
        .then((response) => {
          console.log("response", response.data.data.email);
          if (response.data.data.user_verfied) {
            const userdetails = {
              notificationId: response.data.data.notificationId,
              _id: response.data.data._id,
              role_taskId: response.data.data.role_taskId,
              user_verfied: response.data.data.user_verfied,
            };
            let encryptedData = CryptoJS.AES.encrypt(
              JSON.stringify(userdetails),
              SecretKey
            ).toString();
            localStorage.setItem("user", encryptedData);
            localStorage.removeItem("temp_email");
            dispatch(setUserDetails({ ...userdetails }));
            navigate("/");
          } else {
            toast.error("User Does Not exist");
            navigate("/register");
          }
        })
        .catch((error) => {
          console.log("error", error);
          if (error.response && error.response.data.message) {
            toast.error(error.response.data.message.replace(/^Error: |"/g, ""));
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
                    value={userData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
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
                <a className="Forgot-Pass" href="/forgetpassword">
                  पासवर्ड विसरलात?
                </a>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mt-3 btn btn-primary"
                >
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
