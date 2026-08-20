import React, { useState } from "react";
import "./Matches.css";

// ================= IPL TEAM LOGOS =================
import miLogo from "./assets/teams/mi.png";
import cskLogo from "./assets/teams/csk.png";
import rcbLogo from "./assets/teams/rcb.png";
import kkrLogo from "./assets/teams/kkr.png";
import rrLogo from "./assets/teams/rr.png";
import srhLogo from "./assets/teams/srh.png";
import dcLogo from "./assets/teams/dc.png";
import pbksLogo from "./assets/teams/pbks.png";
import gtLogo from "./assets/teams/gt.png";
import lsgLogo from "./assets/teams/lsg.png";

// ================= WPL TEAM LOGOS =================
// Change these filenames if your WPL logo files have different names.
import dcWplLogo from "./assets/teams/dc-wpl.png";
import miWplLogo from "./assets/teams/mi-wpl.png";
import rcbWplLogo from "./assets/teams/rcb-wpl.png";
import upwLogo from "./assets/teams/upw-wpl.png";
import ggWplLogo from "./assets/teams/gg-wpl.png";


function Matches({ onBackToHome }) {

  const [activeLeague, setActiveLeague] = useState("IPL");


  // ================= IPL MATCHES =================

  const iplMatches = [
    {
      date: "22 MARCH 2026",
      team1: "Mumbai Indians",
      team1Logo: miLogo,
      team2: "Chennai Super Kings",
      team2Logo: cskLogo,
      stadium: "Wankhede Stadium, Mumbai",
      time: "7:30 PM",
    },

    {
      date: "25 MARCH 2026",
      team1: "Royal Challengers Bengaluru",
      team1Logo: rcbLogo,
      team2: "Kolkata Knight Riders",
      team2Logo: kkrLogo,
      stadium: "M. Chinnaswamy Stadium, Bengaluru",
      time: "7:30 PM",
    },

    {
      date: "28 MARCH 2026",
      team1: "Rajasthan Royals",
      team1Logo: rrLogo,
      team2: "Sunrisers Hyderabad",
      team2Logo: srhLogo,
      stadium: "Rajiv Gandhi International Stadium, Hyderabad",
      time: "7:30 PM",
    },

    {
      date: "30 MARCH 2026",
      team1: "Delhi Capitals",
      team1Logo: dcLogo,
      team2: "Punjab Kings",
      team2Logo: pbksLogo,
      stadium: "Arun Jaitley Stadium, Delhi",
      time: "7:30 PM",
    },

    {
      date: "2 APRIL 2026",
      team1: "Gujarat Titans",
      team1Logo: gtLogo,
      team2: "Lucknow Super Giants",
      team2Logo: lsgLogo,
      stadium: "Narendra Modi Stadium, Ahmedabad",
      time: "7:30 PM",
    },
  ];


  // ================= WPL MATCHES =================

  const wplMatches = [
    {
      date: "10 JANUARY 2026",
      team1: "Delhi Capitals",
      team1Logo: dcWplLogo,
      team2: "Mumbai Indians",
      team2Logo: miWplLogo,
      stadium: "M. Chinnaswamy Stadium, Bengaluru",
      time: "7:30 PM",
    },

    {
      date: "12 JANUARY 2026",
      team1: "Royal Challengers Bengaluru",
      team1Logo: rcbWplLogo,
      team2: "UP Warriorz",
      team2Logo: upwLogo,
      stadium: "M. Chinnaswamy Stadium, Bengaluru",
      time: "7:30 PM",
    },

    {
      date: "15 JANUARY 2026",
      team1: "Gujarat Giants",
      team1Logo: ggWplLogo,
      team2: "Mumbai Indians",
      team2Logo: miWplLogo,
      stadium: "Narendra Modi Stadium, Ahmedabad",
      time: "7:30 PM",
    },

    {
      date: "18 JANUARY 2026",
      team1: "UP Warriorz",
      team1Logo: upwLogo,
      team2: "Delhi Capitals",
      team2Logo: dcWplLogo,
      stadium: "BRSABVE Cricket Stadium, Lucknow",
      time: "7:30 PM",
    },

    {
      date: "20 JANUARY 2026",
      team1: "Royal Challengers Bengaluru",
      team1Logo: rcbWplLogo,
      team2: "Gujarat Giants",
      team2Logo: ggWplLogo,
      stadium: "M. Chinnaswamy Stadium, Bengaluru",
      time: "7:30 PM",
    },
  ];


  const matches =
    activeLeague === "IPL"
      ? iplMatches
      : wplMatches;


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

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();

              if (onBackToHome) {
                onBackToHome();
              }
            }}
          >
            Home
          </a>

          <a
            href="#matches"
            className="active"
          >
            Matches
          </a>

          <a href="#teams">
            Teams
          </a>

          <a href="#players">
            Players
          </a>

          <a href="#stadiums">
            Stadiums
          </a>

          <a href="#offers">
            Offers
          </a>

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


      {/* ================= IPL / WPL BUTTONS ================= */}

      <div className="league-buttons">

        <button
          className={
            activeLeague === "IPL"
              ? "league-btn active"
              : "league-btn"
          }
          onClick={() => setActiveLeague("IPL")}
        >
          🏏 IPL
        </button>


        <button
          className={
            activeLeague === "WPL"
              ? "league-btn active"
              : "league-btn"
          }
          onClick={() => setActiveLeague("WPL")}
        >
          🏏 WPL
        </button>

      </div>


      {/* ================= CURRENT LEAGUE TITLE ================= */}

      <div className="current-league">

        <h2>
          {activeLeague} Matches
        </h2>

        <p>
          {activeLeague === "IPL"
            ? "Indian Premier League"
            : "Women's Premier League"}
        </p>

      </div>


      {/* ================= MATCHES ================= */}

      <section className="matches-container">

        {matches.map((match, index) => (

          <div
            className="match-card"
            key={index}
          >

            {/* STATUS */}

            <div className="match-status">
              UPCOMING
            </div>


            {/* DATE */}

            <div className="match-date">
              {match.date}
            </div>


            {/* TEAMS */}

            <div className="match-teams">


              {/* TEAM 1 */}

              <div className="team">

                <div className="team-logo">

                  <img
                    src={match.team1Logo}
                    alt={match.team1}
                  />

                </div>

                <h3>
                  {match.team1}
                </h3>

              </div>


              {/* VS */}

              <div className="vs">
                VS
              </div>


              {/* TEAM 2 */}

              <div className="team">

                <div className="team-logo">

                  <img
                    src={match.team2Logo}
                    alt={match.team2}
                  />

                </div>

                <h3>
                  {match.team2}
                </h3>

              </div>

            </div>


            {/* MATCH INFO */}

            <div className="match-info">

              <span>
                🏟 {match.stadium}
              </span>

              <span>
                🕗 {match.time}
              </span>

            </div>


            {/* BOOK BUTTON */}

            <button
              className="book-btn"
              onClick={() => {
                console.log(
                  "Booking:",
                  match.team1,
                  "vs",
                  match.team2
                );
              }}
            >
              Book Tickets →
            </button>

          </div>

        ))}

      </section>


      {/* ================= BACK HOME ================= */}

      <div className="matches-back">

        <button
          onClick={onBackToHome}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default Matches;