import React, { useState } from "react";
import classes from "./CSS/AuthForm.module.css";

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email === "user@example.com" && password === "password") {
      onLogin();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex h-screen items-center w-screen">
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p className="mt-5">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <div className={classes.actions}>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
