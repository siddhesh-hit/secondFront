import { useState } from "react";
import logo from "../assets/logo.png";
import { userForgetPasswordValidation } from "../validators/UserSchema";
import { toast } from "react-toastify";
import { postApi } from "../services/axiosInterceptors";
const ForgetPassword = () => {
    const [email, setEmail] = useState("")
    const handleSubmit = async (e) => {
        console.log("run ")
        e.preventDefault()
        const data = { email: email }
        const validateUser = await userForgetPasswordValidation(data)
        console.log()
        if (validateUser) {
            toast.error(validateUser)
        } else {
            await postApi("user/forgot", data).then((response) => {
                console.log("response", response.data)
                toast.success(response.data.message)

            }).catch((error) => {
                console.log("error", error)
                if (error.response && error.response.data.message) {
                    toast.error(error.response.data.message.replace(/^Error: |"/g, ''));
                }
            })
        }
    }
    return (
        <div>
            <div className="container-fluid loginboxpage">
                <a href="/">
                    <img src={logo} alt="logo" className="loginbg" />
                </a>
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="login-box">
                                    <h3 className="mb-4">
                                        पासवर्ड रीसेट करा
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button type="button"
                                        onClick={handleSubmit}
                                        className="mt-3 btn btn-primary">
                                        सुरू ठेवा
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
