// src/pages/Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Successfully logged out");
        navigate("/login"); // Redirect to login page
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }, [navigate]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
