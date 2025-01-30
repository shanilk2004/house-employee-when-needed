import { useState } from "react";
import "./Signup.css";  

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Signup successful! (Backend connection pending)");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="input-group">
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="input-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input"
            />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
