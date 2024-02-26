import React, { useState } from "react";
import "./AuthPage.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Implement login logic
    } else {
      // Implement signup logic
    }
  };

  return (
    <div className="fullscreen-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="auth-form">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={handleFormToggle}>
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
