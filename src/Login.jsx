import React from "react";
import "./Login.css";

function Login({ onBackToHome, onRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend only for now.
    // Backend authentication will be added later.
    console.log("Login submitted");
  };

  return (
    <div className="login-page">

      {/* ================= LEFT SIDE ================= */}
      <div className="login-left">

        {/* CRICFUSION LOGO */}
        <div className="left-logo-container">
          <img
            src="/cricfusion-logo-transparent.png"
            alt="CricFusion Logo"
            className="left-logo"
          />
        </div>

        <div className="hero-content">

          <div className="live-badge">
            <span></span>
            IPL & WPL TICKET BOOKING
          </div>

          <h1>
            Your Match.
            <br />
            <span>Your Seat.</span>
            <br />
            Your Experience.
          </h1>

          <p className="hero-text">
            Book your favourite IPL & WPL matches, choose your perfect seat,
            reserve parking and get your digital ticket — all in one seamless
            platform.
          </p>

          <div className="features">

            <div className="feature-card">
              <div className="feature-icon">🏏</div>

              <div>
                <strong>IPL & WPL</strong>
                <small>Live Match Booking</small>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">◉</div>

              <div>
                <strong>Smart Seats</strong>
                <small>Choose Your Seat</small>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon pink">▣</div>

              <div>
                <strong>Digital Ticket</strong>
                <small>Instant QR Ticket</small>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="login-right">

        <div className="login-card">

          {/* CRICFUSION LOGO */}
          <div className="logo-container">
            <img
              src="/cricfusion-logo-transparent.png"
              alt="CricFusion Logo"
              className="main-logo"
            />
          </div>


          {/* LOGIN HEADING */}
          <div className="login-heading">

            <p>WELCOME BACK</p>

            <h2>Sign in to CricFusion</h2>

            <span>
              Continue your match-day journey.
            </span>

          </div>


          {/* LOGIN FORM */}
          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="input-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ✉
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="input-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <a href="#forgot-password">
                  Forgot password?
                </a>

              </div>

              <div className="input-wrapper">

                <span className="input-icon password-icon">
                  🔒
                </span>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />

              </div>

            </div>


            {/* REMEMBER ME */}
            <label className="remember">

              <input
                type="checkbox"
                name="remember"
              />

              <span>
                Remember me
              </span>

            </label>


            {/* SIGN IN */}
            <button
              type="submit"
              className="login-button"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          {/* DIVIDER */}
          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>


          {/* SOCIAL LOGIN */}
          <div className="social-buttons">

            <button
              type="button"
              className="social-button"
            >
              <span className="google-icon">
                G
              </span>

              Google
            </button>

            <button
              type="button"
              className="social-button"
            >
              <span className="facebook-icon">
                f
              </span>

              Facebook
            </button>

          </div>


          {/* REGISTER */}
          <p className="signup">

            Don't have an account?

            <a
              href="#create-account"
              onClick={(e) => {
                e.preventDefault();

                if (onRegister) {
                  onRegister();
                }
              }}
            >
              {" "}Create Account
            </a>

          </p>

        </div>


        {/* FOOTER */}
        <p className="footer-text">
          🏟 IPL &nbsp; • &nbsp; WPL &nbsp; • &nbsp; MATCH DAY
        </p>

      </div>

    </div>
  );
}

export default Login;