import React, { useState } from "react";
import "./components/styles/Auth.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth({ setIsAuth }) {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle Login/Register
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userData.email;
    const password = userData.password;
    try {
      const response = await axios.post('http://localhost:5000/user/Register', { email, password });
      console.log(response.data);
      setIsRegister(!isRegister)
    } catch (err) {
      console.error(err);
      setError('Error signing up. Please try again.');
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = userData.email;
    const password = userData.password;
    try {
      const response = await axios.post('http://localhost:5000/user/Login', { email, password });
      console.log(response.data);
      navigate('/Home');
    } catch (err) {
      console.error(err);
      navigate('/Home');
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={isRegister ? handleSubmit : handleLoginSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>

      <p onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </p>
    </div>
  );
}
