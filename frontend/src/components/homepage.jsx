import { Link } from "react-router-dom";
import "./homepage.css";

export default function HomePage() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/sign">Sign Up</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h2>Welcome to Our Website</h2>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}

