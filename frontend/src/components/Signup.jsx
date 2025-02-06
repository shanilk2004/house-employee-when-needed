import { useState } from "react";
import "./Signup.css";  

const Signup = () => {
  // State variables for user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // For success or error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create user object to send to the backend
    const user = { email, password };

    try {
      // Send the data to the backend (Node.js server)
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json(); // Get the response as JSON

      // Check if the response is successful
      if (response.ok) {
        setMessage("Signup successful!"); // Display success message
      } else {
        setMessage("Error: " + data.error); // Display error message if signup failed
      }
    } catch (error) {
      setMessage("Error: " + error.message); // Catch any errors like network issues
    }
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

        {/* Display success or error message */}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
