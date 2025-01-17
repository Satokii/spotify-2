"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import "./styles/login-page.css";

function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({ username: "", password: "" });
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (user.username === "test" && user.password === "testpassword") {
      router.push("/welcome-page");
      setUser({ username: "", password: "" });
    } else {
      setLoginMessage("Username or password is incorrect. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <section className="login-page--container">
      <div className="login-page--subcontainer">
        <div className="login-page--content">
          <h2>Welcome to Spotify2</h2>
          <h2 className="login-page--header">Sign In</h2>
          <form className="login-page--login-form" onSubmit={handleLogin}>
            <div className="login-page--login-form-input-container">
              <input
                className="login-page--login-form-input"
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                required
              />
              <i>Username</i>
            </div>
            <div className="login-page--login-form-input-container">
              <input
                className="login-page--login-form-input"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <i>Password</i>
            </div>
            <div className="login-page--links">
              <a className="login-page--forgot-password" href="#">
                Forgot Password
              </a>
              <p
                className="login-page--signup"
                href="#"
                // onClick={() => navigate("/sign-up")}
              >
                Sign up today
              </p>
            </div>
            <div className="login-page--login-form-input-container">
              <input
                className="login-page--login-form-input"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          {loginMessage && (
            <p className="login-page--error-message">{loginMessage}</p>
          )}
        </div>
        <p className="login-page--copyright">&#169; 2025 Spotify2</p>
      </div>
    </section>
  );
}

export default LoginPage;
