const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // Allow frontend to connect
app.use(bodyParser.json()); // Parse JSON requests

// 1️⃣ Connect to MySQL Database
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

// 2️⃣ API to Handle Signup Requests
app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Signup failed" });
        }
        res.json({ message: "User registered successfully!" });
    });
});

// 3️⃣ Start the Server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
