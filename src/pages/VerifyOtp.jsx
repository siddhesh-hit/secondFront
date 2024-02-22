import { useState } from "react";
import { postApi } from "../services/axiosInterceptors";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import { SecretKey } from "../services/config";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [otp, setOTP] = useState(['', '', '', '']);

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
                email_otp: otp.join(''), // Join the OTP array into a string
                email: localStorage.getItem("temp_email")
            };

            try {
                const response = await postApi("user/verifyEmail", data);
                console.log("response", response.data.data)
                if (response.data.data.user_verfied) {
                    const userdetails = {
                        notificationId: response.data.data.notificationId,
                        _id: response.data.data._id,
                        role_taskId: response.data.data.role_taskId,
                        user_verfied: response.data.data.user_verfied
                    }
                    let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(userdetails), SecretKey).toString();
                    localStorage.setItem("user", encryptedData)
                    localStorage.removeItem("temp_email")
                    dispatch(setUserDetails({ ...userdetails }))
                    navigate("/")


                } else {
                    toast.error("Something is Wrong")
                }

            } catch (error) {
                console.log("error", error);
                if (error.response && error.response.data.message) {
                    toast.error(error.response.data.message.replace(/^Error: |"/g, ''));
                }
            }
        }
    };

    return (
        <div>
            <form>
                {[0, 1, 2, 3].map((index) => (
                    <input
                        key={index}
                        id={`input${index + 1}`}
                        type="text"
                        value={otp[index]}
                        onChange={(event) => handleInputChange(index, event)}
                        maxLength={1}
                    />
                ))}
                <button className="btn btn-danger" disabled={otp.some((element) => element === "") ? true : false} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default VerifyOtp;
