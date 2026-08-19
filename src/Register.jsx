import React, { useState } from "react";
import "./Register.css";

function Register({ onBackToLogin, onBackToHome }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend only for now.
    // Backend registration will be added later.
    console.log("Registration submitted");
  };

  return (
    <div className="register-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="register-left">

        {/* LOGO */}

        <div className="register-left-logo">
          <img
            src="/cricfusion-logo-transparent.png"
            alt="CricFusion Logo"
          />
        </div>


        {/* LEFT CONTENT */}

        <div className="register-hero-content">

          <div className="register-live-badge">
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


          <p className="register-hero-text">
            Create your CricFusion account, book your favourite
            IPL & WPL matches, choose your perfect seat and enjoy
            a seamless match-day experience.
          </p>


          {/* FEATURES */}

          <div className="register-features">

            <div className="register-feature-card">

              <div className="register-feature-icon">
                🏏
              </div>

              <div>
                <strong>IPL & WPL</strong>
                <small>Live Match Booking</small>
              </div>

            </div>


            <div className="register-feature-card">

              <div className="register-feature-icon blue">
                ◉
              </div>

              <div>
                <strong>Smart Seats</strong>
                <small>Choose Your Seat</small>
              </div>

            </div>


            <div className="register-feature-card">

              <div className="register-feature-icon pink">
                ▣
              </div>

              <div>
                <strong>Digital Ticket</strong>
                <small>Instant QR Ticket</small>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="register-right">

        <div className="register-card">

          {/* LOGO */}

          <div className="register-logo-container">

            <img
              src="/cricfusion-logo-transparent.png"
              alt="CricFusion Logo"
              className="register-main-logo"
            />

          </div>


          {/* HEADING */}

          <div className="register-heading">

            <p>WELCOME TO CRICFUSION</p>

            <h2>Create your account</h2>

            <span>
              Start your match-day journey.
            </span>

          </div>


          {/* FORM */}

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}

            <div className="register-input-group">

              <label htmlFor="name">
                Full Name
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  👤
                </span>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="register-input-group">

              <label htmlFor="register-email">
                Email Address
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  ✉
                </span>

                <input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="register-input-group">

              <label htmlFor="register-password">
                Password
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  🔒
                </span>

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="register-input-group">

              <label htmlFor="confirm-password">
                Confirm Password
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  🔒
                </span>

                <input
                  id="confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* TERMS */}

            <label className="register-terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the CricFusion terms and conditions.
              </span>

            </label>


            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="register-create-button"
            >
              Create Account
              <span>→</span>
            </button>

          </form>


          {/* DIVIDER */}

          <div className="register-divider">
            <span>OR CONTINUE WITH</span>
          </div>


          {/* SOCIAL */}

          <div className="register-social-buttons">

            <button
              type="button"
              className="register-social-button"
            >
              <span className="register-google-icon">
                G
              </span>

              Google
            </button>


            <button
              type="button"
              className="register-social-button"
            >
              <span className="register-facebook-icon">
                f
              </span>

              Facebook
            </button>

          </div>


          {/* LOGIN */}

          <p className="register-login">

            Already have an account?

            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();

                if (onBackToLogin) {
                  onBackToLogin();
                }
              }}
            >
              {" "}Sign In
            </a>

          </p>

        </div>


        {/* FOOTER */}

        <p className="register-footer">
          🏟 IPL &nbsp; • &nbsp; WPL &nbsp; • &nbsp; MATCH DAY
        </p>

      </div>

    </div>
  );
}

export default Register;