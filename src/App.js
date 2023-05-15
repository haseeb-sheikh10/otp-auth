import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import InputNumber from './InputNumber';
import InputOTP from './InputOTP';
import Welcome from './Welcome';
import { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from "./firebase.config";
import { Toaster, toast, } from 'react-hot-toast';

function App() {

  const nav = useNavigate();
  const location = useLocation("");

  useEffect(() => {
    if (location.pathname === "/") {
      nav("/input-num");
    }

  })

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          handleSendOTP();
        },
        'expired-callback': () => {
        }
      }, auth);
    }
  }

  const [ph, setPh] = useState()
  const [OTP, setOTP] = useState("");
  
  const handleSendOTP = () => {

    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = '+' + ph;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        nav('/input-otp');
        toast.success('OTP SENDED SUCCESSFULLY');
      }).catch((error) => {
        console.log("its an error")
        console.log(error);
      });

  }

  const handleVerifyOtp = () => {
    const code = OTP;
    window.confirmationResult.confirm(code).then(async (result) => {
      // User signed in successfully.
      nav('/welcome')
      toast.success('USER LOGGED IN SUCCESSFULLY');
      // ...
    }).catch((error) => {
      console.log(error)
    });

  }
  
  return (
    <>
      <div className='bg-purple-800 w-[100vw] h-[100vh]'>
        <div id="recaptcha-container"></div>
        <Toaster toastOptions={{duration: 4000}}/>
        <Routes>
          <Route path="/input-num" element={<InputNumber handleSendOTP={handleSendOTP} ph={ph} setPh={setPh} />}></Route>
          <Route path="/input-otp" element={<InputOTP OTP={OTP} setOTP={setOTP} handleVerifyOtp={handleVerifyOtp}/>}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
