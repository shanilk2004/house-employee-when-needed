const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

// 1️⃣ Initialize express app
const app = express();

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(bodyParser.json()); // Parse JSON requests

// 2️⃣ Connect to MySQL Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",  // Change if your MySQL username is different
    password: "shanil@2004",  // Add your MySQL password
    database: "mini_linkedin",
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database!");
    }
});

// 3️⃣ API to Handle Signup Requests
app.post("/signup", (req, res) => {
    const { email, password } = req.body;

    // 3.1 Check if email already exists
    const checkEmailSql = "SELECT * FROM users WHERE email = ?";
    db.query(checkEmailSql, [email], (err, result) => {
        if (err) {
            console.error("Database error during email check:", err);
            return res.status(500).json({ error: "Signup failed: " + err.message });
        }

        if (result.length > 0) {
            // Email already exists
            return res.status(400).json({ error: "Email already exists" });
        }

        // 3.2 Insert new user with the current date and time
        const sql = "INSERT INTO users (email, password, datejoined) VALUES (?, ?, NOW())";
        db.query(sql, [email, password], (err, result) => {
            if (err) {
                console.error("Database error during user insertion:", err);
                return res.status(500).json({ error: "Signup failed: " + err.message });
            }
            res.json({ message: "User registered successfully!" });
        });
    });
});

// 3️⃣ API to Handle Login Requests
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if user exists with the given email and password
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error("Database error during login:", err);
            return res.status(500).json({ error: "Login failed: " + err.message });
        }

        if (result.length > 0) {
            res.json({ message: "Login successful!" });
        } else {
            res.status(400).json({ error: "Invalid email or password" });
        }
    });
});


// 4️⃣ Start the Server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
