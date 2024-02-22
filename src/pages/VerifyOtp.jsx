import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { postApi } from "../services/axiosInterceptors";
import { encrypt } from "../utils/encrypt";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userReducer";

const VerifyOtp = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);

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
        email: localStorage.getItem("temp_email"),
      };

      try {
        const res = await postApi("user/verifyEmail", data);
        if (res.data.data.user_verified) {
          let enData = encrypt(res.data.data);
          localStorage.setItem("userInfo", enData);
          localStorage.removeItem("temp_email");
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
        <button
          className="btn btn-danger"
          disabled={otp.some((element) => element === "") ? true : false}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
