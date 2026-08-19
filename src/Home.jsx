import React from "react";
import "./Home.css";

function Home({ onLogin, onRegister,onMatches }) {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo-section">
          <img
            src="/cricfusion-logo-transparent.png"
            alt="CricFusion"
          />

          <span>CricFusion</span>
        </div>

        <div className="nav-links">
  <a href="#" className="active">Home</a>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onMatches();
    }}
  >
    Matches
  </a>

  <a href="#">Teams</a>
  <a href="#">Players</a>
  <a href="#">Stadiums</a>
  <a href="#">Offers</a>
</div>

        <div className="auth-buttons">

          <button
            className="login-btn"
            onClick={onLogin}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={onRegister}
          >
            Register
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-content">

          {/* ================= LEFT TEXT ================= */}
          <div className="hero-left">

            <div className="small-title">
              IPL & WPL
            </div>

            <h1>
              LIVE THE
              <br />
              <span>THRILL</span>
            </h1>

            <p className="hero-description">
              Book your favorite match tickets,
              <br />
              choose the best seats,
              <br />
              enjoy the game!
            </p>

            <div className="hero-buttons">

              <button className="explore-btn">
                Explore Matches
              </button>

              <button className="how-btn">
                How It Works
              </button>

            </div>

          </div>


          {/* ================= RIGHT LOGO ================= */}
          <div className="hero-right">

            <div className="stadium-glow"></div>

            <img
              src="/cricfusion-logo-transparent.png"
              alt="CricFusion Logo"
              className="hero-logo"
            />

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="features">

        <div className="feature-card">
          <div className="feature-icon">▣</div>
          <h3>All Matches</h3>
          <p>IPL & WPL</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">♧</div>
          <h3>Best Seats</h3>
          <p>Interactive Seat Map</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon secure">✓</div>
          <h3>Secure Booking</h3>
          <p>100% Safe Payments</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">▣</div>
          <h3>Instant Tickets</h3>
          <p>E-Ticket Available</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">▤</div>
          <h3>Parking Pass</h3>
          <p>Reserve Parking Slot</p>
        </div>

      </section>


      {/* ================= BOTTOM ================= */}
      <div className="bottom-text">
        Your Match. Your Seat. <span>Our Fusion.</span>
      </div>

    </div>
  );
}

export default Home;