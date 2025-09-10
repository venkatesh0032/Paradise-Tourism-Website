import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';

const auth = getAuth(app);
const db = getDatabase(app);

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    age: '',
    country: '',
    phone: '',
    email: '',
    password: ''
  });
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState('form');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

  const sendOtp = async () => {
    if (!form.phone) return alert('Please enter phone number');

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, '+91' + form.phone, appVerifier);
      setConfirmationResult(result);
      setStep('otp');
    } catch (error) {
      alert('Error sending OTP: ' + error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      await saveUserToDatabase();
      alert('Phone registration successful!');
      navigate('/Login');
    } catch (error) {
      alert('OTP verification failed: ' + error.message);
    }
  };

  const registerWithEmail = async () => {
    const { email, password } = form;
    if (!email || !password) return alert('Enter email and password');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await saveUserToDatabase();
      alert('Email registration successful!');
      navigate('/designation');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('User already exists. Redirecting...');
        navigate('/Login');
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  const saveUserToDatabase = async () => {
    const user = auth.currentUser;
    if (!user) return;

    await set(ref(db, 'users/' + user.uid), {
      name: form.name,
      age: form.age,
      country: form.country,
      email: form.email || '',
      phone: form.phone || ''
    });
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      await saveUserToDatabase();
      navigate('/designation');
    } catch (error) {
      alert('Google login failed: ' + error.message);
    }
  };

  const facebookLogin = async () => {
    try {
      await signInWithPopup(auth, new FacebookAuthProvider());
      await saveUserToDatabase();
      navigate('/designation');
    } catch (error) {
      alert('Facebook login failed: ' + error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="form-box">
        <h2>Register</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone (OTP)" onChange={handleChange} />

        <button onClick={sendOtp}>Send OTP</button>

        {step === 'otp' && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify OTP</button>
          </>
        )}

        <input type="email" name="email" placeholder="Email (for email registration)" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button onClick={registerWithEmail}>Register with Email</button>

        <div id="recaptcha-container"></div>

        <h4>Or register using</h4>
        <button onClick={googleLogin}>Google</button>
        <button onClick={facebookLogin}>Facebook</button>
      </div>
    </div>
  );
}

export default Register;
