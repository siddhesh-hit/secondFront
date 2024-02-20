import { useState } from "react";
import logo from "../assets/logo.png";
import { postApi } from "../services/axiosInterceptors";
import { userRegisterSchema } from "../validators/UserSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate()
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setuserData] = useState({
        full_name: "shivam SHukla", email: "shivam@mail.com", password: "Shivam@123", confirmPassword: "Shivam@123", phone_number: "8459784241",
        gender: "male", date_of_birth: eighteenYearsAgo,
        designation: "Public",
        user_image: null

    })
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (name, value) => {
        setuserData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const validateUser = await userRegisterSchema.validate(userData, { abortEarly: false }).catch((e) => e)
        console.log()
        if (validateUser.errors && validateUser.errors.length > 0) {
            toast.error(validateUser.errors[0])
        } else {
            let obj = { ...userData }
            delete obj.confirmPassword
            obj.user_image == null && delete obj.user_image
            const formdata = new FormData()
            for (let data in obj) {
                formdata.append(data, obj[data])
            }
            await postApi("user/registerEmail", formdata).then((response) => {
                console.log("response", response.data.data.email)
                if (response.data.data.email) {
                    localStorage.setItem("temp_email", response.data.data.email)
                    navigate("/verify-otp")
                }

            }).catch((error) => {
                console.log("error", error)
                if (error.response && error.response.data.message) {
                    toast.error(error.response.data.message.replace(/^Error: |"/g, ''));
                }
            })
        }

    }
    console.log("userData", userData)
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
                                                value={userData.full_name}
                                                onChange={(e) => handleChange("full_name", e.target.value)}
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
                                                value={userData.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
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
                                                value={userData.confirmPassword}
                                                onChange={(e) => handleChange("confirmPassword", e.target.value)}
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
                                                onKeyDown={(evt) =>
                                                    (evt.key === "-" || evt.key === "e") && evt.preventDefault()
                                                }
                                                className="form-control"
                                                value={userData.phone_number}
                                                onChange={(e) => handleChange("phone_number", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">लिंग<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-venus-double" aria-hidden="true" />
                                            </span>
                                            <select aria-label="User Type Selection" name="gender" value={userData.gender}
                                                onChange={(e) => handleChange("gender", e.target.value)} placeholder="लिंग" className="form-select">
                                                <option value="">लिंग</option>
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
                                                value={userData.date_of_birth}
                                                onChange={(e) => handleChange("date_of_birth", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">वापरकर्ता प्रकार<span className="required">*</span></label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-user" aria-hidden="true" />
                                            </span>
                                            <select aria-label="User Type Selection"
                                                value={userData.designation}
                                                onChange={(e) => handleChange("designation", e.target.value)}
                                                name="designation" className="form-select">
                                                <option value="">वापरकर्ता प्रकार निवडा</option>
                                                <option value={"Researcher"}>Researcher(संशोधक)</option>
                                                <option value={"Student"}>Student(विद्यार्थी)</option>
                                                <option value={"Public"}>Public()</option></select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label className="form-label">प्रोफाइल चित्र</label>
                                        <div className="mb-4 input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-upload" aria-hidden="true" />
                                            </span>
                                            <input label="Upload" placeholder="Profile Picture"

                                                // value={userData.user_image}
                                                onChange={(e) => handleChange("user_image", e.target.files[0])}
                                                accept="image/*" type="file" id="profilePicture" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="mt-3 btn btn-primary" onClick={handleSubmit} style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%', display: 'block' }}>
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
