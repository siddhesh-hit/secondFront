import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { getApi, postApi } from "../services/axiosInterceptors";
import { userRegisterValidation } from "../validators/UserSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { header, register } from "../data/constant";
import useLang from "../hooks/useLang";

const Register = () => {
  const [intrest, seIntrest] = useState([]);
  const { lang, checkLang } = useLang();
  const navigate = useNavigate();
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setuserData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    gender: "",
    intrest_area: "",
    date_of_birth: eighteenYearsAgo,
    designation: "Public",
    user_image: null,
  });

  console.log(userData)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (name, value) => {

    console.log(name, value)

    setuserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateUser = await userRegisterValidation(userData);
    console.log();
    if (validateUser) {
      toast.error(validateUser);
    } else {
      let obj = { ...userData };
      delete obj.confirmPassword;
      obj.user_image == null && delete obj.user_image;
      const formdata = new FormData();
      for (let data in obj) {
        formdata.append(data, obj[data]);
      }
      await postApi("user/registerEmail", formdata)
        .then((response) => {
          console.log("response", response.data.data.email);
          if (response.data.data.email) {
            sessionStorage.setItem("temp_email", response.data.data.email);
            navigate("/verify-otp");
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
  const handleLanguage = (newLang) => {
    console.log(newLang);

    window.sessionStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange"));
  };


  const fetchData = async () => {
    await getApi("/navigation")
      .then((res) => {
        if (res.data.success) {
          seIntrest(res.data.data);

        }
      })
      .catch((err) => console.log(err));
  };
  // console.log(register[checkLang].intrest);

  useEffect(() => {
    fetchData();
  }, []);

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
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <div className="login-box">
                <h3 className="mb-4">
                  {register[checkLang].title}
                </h3>
                <div className="row registerpage">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].fullname}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-user" aria-hidden="true" />
                      </span>
                      <input
                        placeholder={register[checkLang].entername}
                        aria-label={register[checkLang].entername}
                        aria-describedby="basic-addon1"
                        type="text"
                        className="form-control"
                        value={userData.full_name}
                        onChange={(e) =>
                          handleChange("full_name", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].email}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>
                      <input
                        placeholder={register[checkLang].enteremail}
                        aria-label={register[checkLang].enteremail}
                        aria-describedby="basic-addon1"
                        type="email"
                        className="form-control"
                        value={userData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].password}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-lock" aria-hidden="true" />
                      </span>
                      <input
                        placeholder={register[checkLang].enterpass}
                        aria-label={register[checkLang].enterpass}
                        aria-describedby="basic-addon1"
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        value={userData.password}
                        onChange={(e) =>
                          handleChange("password", e.target.value)
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
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].confirmpassword}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-lock" aria-hidden="true" />
                      </span>
                      <input
                        placeholder={register[checkLang].confpass}
                        aria-label={register[checkLang].confpass}
                        aria-describedby="basic-addon1"
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        value={userData.confirmPassword}
                        onChange={(e) =>
                          handleChange("confirmPassword", e.target.value)
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
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].intrest}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-user" aria-hidden="true" />
                      </span>
                      <select
                        aria-label="User Type Selection"
                        name="intrest_area"
                        // value={userData.intrest_area}
                        onChange={(e) => handleChange("intrest_area", e.target.value)}
                        placeholder="लिंग"
                        className="form-select"
                      >
                        <option hidden>{register[checkLang].intrest}</option>
                        {intrest?.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item[checkLang].navigation}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].mobile}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </span>
                      <input
                        placeholder={register[checkLang].entermobile}
                        aria-label={register[checkLang].entermobile}
                        aria-describedby="basic-addon1"
                        type="number"
                        onKeyDown={(evt) =>
                          (evt.key === "-" || evt.key === "e") &&
                          evt.preventDefault()
                        }
                        className="form-control"
                        value={userData.phone_number}
                        onChange={(e) =>
                          handleChange("phone_number", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].gender}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-venus-double" aria-hidden="true" />
                      </span>
                      <select
                        aria-label="User Type Selection"
                        name="gender"
                        value={userData.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                        placeholder="लिंग"
                        className="form-select"
                      >
                        <option value="">{register[checkLang].selectgen}</option>
                        <option value="male">{register[checkLang].male}</option>
                        <option value="female">{register[checkLang].female}</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].dob}<span className="required">*</span>
                    </label>
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
                        value={userData.date_of_birth}
                        onChange={(e) =>
                          handleChange("date_of_birth", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">
                      {register[checkLang].user}<span className="required">*</span>
                    </label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-user" aria-hidden="true" />
                      </span>
                      <select
                        aria-label="User Type Selection"
                        value={userData.designation}
                        onChange={(e) =>
                          handleChange("designation", e.target.value)
                        }
                        name="designation"
                        className="form-select"
                      >
                        <option value="">{register[checkLang].selectuser}</option>
                        <option value={"Researcher"}>{register[checkLang].research}</option>
                        <option value={"Student"}>{register[checkLang].stud}</option>
                        <option value={"Public"}>{register[checkLang].public}()</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label className="form-label">{register[checkLang].profile}</label>
                    <div className="mb-4 input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-upload" aria-hidden="true" />
                      </span>
                      <input
                        label="Upload"
                        placeholder="Profile Picture"
                        // value={userData.user_image}
                        onChange={(e) =>
                          handleChange("user_image", e.target.files[0])
                        }
                        accept="image/*"
                        type="file"
                        id="profilePicture"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-3 btn btn-primary"
                  onClick={handleSubmit}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    display: "block",
                  }}
                >
                  {register[checkLang].signup}
                </button>
                <p className="new_account mt-5">
                  {register[checkLang].already}
                  <a href="/Login">{register[checkLang].signin}</a>
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
