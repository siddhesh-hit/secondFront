import logo from "../assets/logo.png";
const ForgetPassword = () => {
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
                                        defaultValue="sidd@hit.com"
                                    />
                                </div>
                                <button type="button" className="mt-3 btn btn-primary">
                                    सुरू ठेवा
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
