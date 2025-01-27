
import React, { useEffect, useState, useRef } from 'react';
// import "../style/sendOtp.css";
import "../../../styles/Auth/otp.css"
import { Link, useNavigate } from 'react-router-dom';
import {makeApi} from "../../../api/callApi.tsx";


import { ToastContainer, toast } from "react-toastify";

function OtpVerifiedForm() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(Array(6).fill(''));
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [IsOTPvalid, setIsOTPvalid] = useState(false);
  const [OTPverified, setOTPverified] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const inputRefs = useRef([]);


  // update password state
  const [password, setPassword] = useState("");

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const enteredOtp = otp.join('');
    const enteredOtp = parseInt(otp.join(''), 10);

    if (!enteredOtp) {
      toast.error('Please fill otp');
      return;
    }
    try {
      setLoading(true);
      const response = await makeApi("/api/check-otp", "POST", { email, OTP: enteredOtp });
      if (response.data.success === true) {
        setOTPverified(true);
        toast.success(response.data.message, {
          // onClose: () => navigate("/")
          onClose: () => {
            setIsOTPvalid(true)
            setOTPverified(false);

          }
        });
      }
    } catch (error) {
      console.error('Error sending data:', error.response.data);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    // const enteredOtp = otp.join('');
    if (!password) {
      toast.error('Please fill new password');
      return;
    }
    try {
      setLoading(true);
      const response = await makeApi("/api/reset-password-with-otp", "POST", { email, newPassword: password });
      if (response.data.success === true) {
        setPasswordUpdated(true);
        toast.success(response.data.message, {
          onClose: () => {
            navigate("/auth/login")
            setPasswordUpdated(false);

          }
        });
      }
    } catch (error) {
      console.error('Error sending data:', error.response.data);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setEmail(localStorage.getItem("send-otp-email", email));
  }, []);

  return (
    <>
      <ToastContainer position="top-center" autoClose={1800} className="w-75" />
      {IsOTPvalid === false ?
        <div className="main_login_page_div main_send_mail_to_email">
          <form className="Otp-verified-form" >
            <p className="Otp-verified-heading">Verify</p>

            <div>
              <div className="Otp-verified-box">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => (inputRefs.current[index] = el)}
                    className="Otp-verified-input"
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                ))}
              </div>
              <div className="button_otp_page">
                {OTPverified === true ?
                  <div>
                    <div className='opt_don_loader_main_div'>
                      <div className="otp_done_loader">
                        <div className="circle">
                          <div className="dot"></div>
                          <div className="outline"></div>
                        </div>
                        <div className="circle">
                          <div className="dot"></div>
                          <div className="outline"></div>
                        </div>
                        <div className="circle">
                          <div className="dot"></div>
                          <div className="outline"></div>
                        </div>
                        <div className="circle">
                          <div className="dot"></div>
                          <div className="outline"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <div>
                    {loading ? <div className='match_OTP_loader'></div> : <div>
                      <button className="form-submit-btn-forgot-password" onClick={(e) => { handleSubmit(e) }}>Submit</button>
                    </div>}
                    <div>
                      <Link to="/Forgot-Password">
                        <button className="Otp-verified-btn2">Back</button>
                      </Link>
                    </div>
                  </div>
                }
              </div>
            </div>
          </form>
        </div>


        :
       
        <div className='main_login_page_div main_send_mail_to_email' >
        <div className="form-container-forgot-password" style={{backgroundColor:"black"}} >
          <div className="logo-container">
          Update Password
          </div>

          <form className="form-forgot-password">
            <div className="form-group-forgot-password">
              <label htmlFor="email">New Password</label>
              <input
                placeholder="Enter New Password"
                type="password"
                value={password}
                style={{fontSize:"20px"}}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className='text-warning' >{password}</small>
            </div>
            <div className='text-center w-100 d-flex justify-content-center p-3' >

              {passwordUpdated === true ?
             <div>
             <div className='opt_don_loader_main_div'>
               <div className="otp_done_loader">
                 <div className="circle">
                   <div className="dot"></div>
                   <div className="outline"></div>
                 </div>
                 <div className="circle">
                   <div className="dot"></div>
                   <div className="outline"></div>
                 </div>
                 <div className="circle">
                   <div className="dot"></div>
                   <div className="outline"></div>
                 </div>
                 <div className="circle">
                   <div className="dot"></div>
                   <div className="outline"></div>
                 </div>
               </div>
             </div>
           </div>
           :  
              // <div>
                <button type="submit" className="form-submit-btn-forgot-password btn btn-dark px-5 py-3"  onClick={(e) => handleSubmitPassword(e)} >Update Password</button>
              // </div>
            }

            </div>
          </form>

        </div>
      </div>
      }


    </>
  );
}

export default OtpVerifiedForm;
