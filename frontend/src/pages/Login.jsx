import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, error, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setFormError("");

    if (!email || !password) {
      setFormError("Please enter both email and password.");
      return;
    }

    const response = await login(email, password);
    if (!response.success) {
      setFormError(response.message); // e.g., "Invalid credentials"
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {formError && <p style={{ color: "red" }}>{formError}</p>}
    </div>
  );
};

export default Login;
