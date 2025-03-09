import React, { useState } from "react";
import "./components/styles/Auth.css"

export default function Auth({ setIsAuth }) {
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });

  // Handle input changes
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle Login/Register
  const handleAuth = (e) => {
    e.preventDefault();

    if (isRegister) {
      // Store user in localStorage (simulating a real database)
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Registration successful! Please log in.");
      setIsRegister(false); // Switch to login mode
    } else {
      // Retrieve stored user
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === userData.email &&
        storedUser.password === userData.password
      ) {
        setIsAuth(true); // Grant access
        localStorage.setItem("isAuth", "true"); // Save login state
      } else {
        alert("Invalid credentials! Please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleAuth}>
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
