import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const loginWithEmail = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Email login success:", result.user);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('Email login failed: ' + error.message);
      console.error(error);
    }
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        { size: 'invisible' },
        auth
      );
    }
  };

  const sendOTP = async () => {
    if (!phone) return alert('Enter phone number');
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, '+91' + phone, appVerifier);
      setConfirmationResult(result);
      alert('OTP sent!');
    } catch (error) {
      alert('OTP error: ' + error.message);
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      console.log("✅ Phone OTP success:", result.user);
      alert('Phone login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('OTP verification failed: ' + error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log("✅ Google login success:", result.user);
      alert('Google login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('Google login error: ' + error.message);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      console.log("✅ Facebook login success:", result.user);
      alert('Facebook login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert('Facebook login error: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginWithEmail}>Login with Email</button>

        <hr />
        <h4>Login with Phone</h4>
        <input
          type="text"
          placeholder="Phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={sendOTP}>Send OTP</button>

        {confirmationResult && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOTP}>Verify OTP</button>
          </>
        )}

        <div id="recaptcha-container"></div>

        <h4>Or login with</h4>
        <button onClick={loginWithGoogle}>Google</button>
        <button onClick={loginWithFacebook}>Facebook</button>

        {/* ✅ Back to Home Button placed at the end */}
        <button className="back-button" onClick={() => navigate('/home')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;
