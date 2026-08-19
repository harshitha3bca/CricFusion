import React from "react";
import "./Matches.css";

function Matches({ onBackToHome }) {
  return (
    <div className="matches-page">

      {/* ================= NAVBAR ================= */}
      <nav className="matches-navbar">

        <div className="matches-logo">
          <img
            src="/cricfusion-logo-transparent.png"
            alt="CricFusion"
          />
          <span>CricFusion</span>
        </div>

        <div className="matches-nav-links">
          <a href="#" onClick={onBackToHome}>
            Home
          </a>

          <a href="#" className="active">
            Matches
          </a>

          <a href="#">Teams</a>
          <a href="#">Players</a>
          <a href="#">Stadiums</a>
          <a href="#">Offers</a>
        </div>

      </nav>


      {/* ================= PAGE HEADER ================= */}
      <section className="matches-header">

        <p className="matches-small-title">
          IPL & WPL
        </p>

        <h1>
          Upcoming <span>Matches</span>
        </h1>

        <p>
          Choose your match and book your perfect seat.
        </p>

      </section>


      {/* ================= MATCHES ================= */}
      <section className="matches-container">

        {/* MATCH 1 */}
        <div className="match-card">

          <div className="match-status">
            UPCOMING
          </div>

          <div className="match-date">
            22 MARCH 2026
          </div>

          <div className="match-teams">

            <div className="team">
              <div className="team-logo purple">
                T
              </div>
              <h3>Team Titans</h3>
            </div>

            <div className="vs">
              VS
            </div>

            <div className="team">
              <div className="team-logo blue">
                W
              </div>
              <h3>Warriors</h3>
            </div>

          </div>

          <div className="match-info">
            <span>🏟 Mumbai Stadium</span>
            <span>🕗 7:30 PM</span>
          </div>

          <button className="book-btn">
            Book Tickets →
          </button>

        </div>


        {/* MATCH 2 */}
        <div className="match-card">

          <div className="match-status">
            UPCOMING
          </div>

          <div className="match-date">
            25 MARCH 2026
          </div>

          <div className="match-teams">

            <div className="team">
              <div className="team-logo orange">
                R
              </div>
              <h3>Royal Strikers</h3>
            </div>

            <div className="vs">
              VS
            </div>

            <div className="team">
              <div className="team-logo red">
                K
              </div>
              <h3>King Riders</h3>
            </div>

          </div>

          <div className="match-info">
            <span>🏟 Bangalore Stadium</span>
            <span>🕗 7:30 PM</span>
          </div>

          <button className="book-btn">
            Book Tickets →
          </button>

        </div>


        {/* MATCH 3 */}
        <div className="match-card">

          <div className="match-status">
            UPCOMING
          </div>

          <div className="match-date">
            28 MARCH 2026
          </div>

          <div className="match-teams">

            <div className="team">
              <div className="team-logo pink">
                G
              </div>
              <h3>Giant Queens</h3>
            </div>

            <div className="vs">
              VS
            </div>

            <div className="team">
              <div className="team-logo green">
                S
              </div>
              <h3>Super Queens</h3>
            </div>

          </div>

          <div className="match-info">
            <span>🏟 Delhi Stadium</span>
            <span>🕗 7:30 PM</span>
          </div>

          <button className="book-btn">
            Book Tickets →
          </button>

        </div>

      </section>


      {/* ================= BACK HOME ================= */}
      <div className="matches-back">

        <button onClick={onBackToHome}>
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default Matches;