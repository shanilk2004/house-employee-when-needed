import { Link } from "react-router-dom";
import "./homepage.css";

export default function HomePage() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
  <div className="nav-container">
    <h1 className="logo"> 🛠 Handy Man</h1> {/* Added Company Name */}
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/Signup">Sign Up</Link></li>
    </ul>
  </div>
</nav>


      {/* Main Content */}
      <main className="main-content">
        <div className="looking-job">
        <h3>Looking for job?Want job right now.</h3>
        <h3>Register for free right now</h3>
        <button>Register</button>
        </div>
        <div className="looking-handyman">
        <h3>Looking for <b>handy man..??</b></h3>
        <h3>Find the best one near you</h3>
        <button>Hire now</button>

        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}

