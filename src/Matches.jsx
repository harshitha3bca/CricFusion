import React, { useState } from "react";
import "./Matches.css";
import StadiumDetails from "./StadiumDetails.jsx";

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
import dcWplLogo from "./assets/teams/dc-wpl.png";
import miWplLogo from "./assets/teams/mi-wpl.png";
import rcbWplLogo from "./assets/teams/rcb-wpl.png";
import upwLogo from "./assets/teams/upw-wpl.png";
import ggWplLogo from "./assets/teams/gg-wpl.png";


function Matches({ onBackToHome }) {

  const [activeLeague, setActiveLeague] = useState("IPL");

  const [selectedStadium, setSelectedStadium] = useState(null);


  // =====================================================
  // STADIUM DETAILS
  // =====================================================

  const stadiumDetails = {

    // ===================================================
    // WANKHEDE
    // ===================================================

    "Wankhede Stadium, Mumbai": {
      name: "Wankhede Stadium",

      image: "/src/assets/stadiums/wankhede.jpg",

      address:
        "D Road, Churchgate, Mumbai, Maharashtra 400020, India",

      parking:
        "Match-day parking arrangements may vary according to event instructions.",

      pitch:
        "Batting-friendly",

      pitchDescription:
        "Generally known for good batting conditions, with good pace and bounce. Fast bowlers may get some early assistance.",

      facilities: [
        {
          icon: "♿",
          name: "Wheelchair Access"
        },
        {
          icon: "🍴",
          name: "Food & Beverages"
        },
        {
          icon: "🛍️",
          name: "Team Store"
        }
      ]
    },


    // ===================================================
    // CHINNASWAMY
    // ===================================================

    "M. Chinnaswamy Stadium, Bengaluru": {
      name: "M. Chinnaswamy Stadium",

      image: "/src/assets/stadiums/chinnaswamy.jpg",

      address:
        "Cubbon Road, Bengaluru, Karnataka 560001, India",

      parking:
        "Parking arrangements may vary depending on the match and event.",

      pitch:
        "Batting-friendly",

      pitchDescription:
        "Known for high-scoring matches and generally favorable conditions for stroke-making. The short boundaries can make it a challenging venue for bowlers.",

      facilities: [
        {
          icon: "♿",
          name: "Wheelchair Access"
        },
        {
          icon: "🍴",
          name: "Food & Beverages"
        },
        {
          icon: "🏏",
          name: "Indoor Training Facility"
        },
        {
          icon: "🏋️",
          name: "Health Club & Gym"
        }
      ]
    },


    // ===================================================
    // RAJIV GANDHI
    // ===================================================

    "Rajiv Gandhi International Stadium, Hyderabad": {
      name: "Rajiv Gandhi International Stadium",

      image: "/src/assets/stadiums/rajiv-gandhi.jpg",

      address:
        "Uppal, Hyderabad, Telangana, India",

      parking:
        "Parking arrangements depend on the individual match and event.",

      pitch:
        "Balanced",

      pitchDescription:
        "Generally provides a reasonable contest between bat and ball, with conditions changing during the match.",

      facilities: [
        {
          icon: "♿",
          name: "Wheelchair Access"
        },
        {
          icon: "🍴",
          name: "Food & Beverages"
        }
      ]
    },


    // ===================================================
    // ARUN JAITLEY
    // ===================================================

    "Arun Jaitley Stadium, Delhi": {
      name: "Arun Jaitley Stadium",

      image: "/src/assets/stadiums/arun-jaitley.jpg",

      address:
        "Bahadur Shah Zafar Marg, New Delhi, Delhi, India",

      parking:
        "Parking arrangements depend on match-day and event instructions.",

      pitch:
        "Spin-friendly",

      pitchDescription:
        "The surface can assist spin bowling, particularly as the match progresses. Batters need to adapt to the slower conditions and pace of the pitch.",

      facilities: [
        {
          icon: "♿",
          name: "Wheelchair Access"
        },
        {
          icon: "🍴",
          name: "Food & Catering"
        }
      ]
    },


    // ===================================================
    // NARENDRA MODI
    // ===================================================

    "Narendra Modi Stadium, Ahmedabad": {
      name: "Narendra Modi Stadium",

      image: "/src/assets/stadiums/narendra-modi.jpg",

      address:
        "Motera, Ahmedabad, Gujarat, India",

      parking:
        "Match-day parking arrangements depend on the event traffic plan.",

      pitch:
        "Balanced",

      pitchDescription:
        "Pitch conditions can vary depending on the surface prepared for the match. The large ground can provide an interesting contest between batters and bowlers.",

      facilities: [
        {
          icon: "♿",
          name: "Wheelchair Access"
        },
        {
          icon: "🍴",
          name: "Food Courts"
        },
        {
          icon: "🏢",
          name: "Corporate Boxes"
        }
      ]
    },


    // ===================================================
    // EKANA / BRSABVE
    // ===================================================

    "BRSABVE Cricket Stadium, Lucknow": {
      name: "BRSABVE Cricket Stadium",

      image: "/src/assets/stadiums/ekana.jpg",

      address:
        "Ekana Sports City, Lucknow, Uttar Pradesh, India",

      parking:
        "Parking arrangements depend on the individual match and event.",

      pitch:
        "Bowling-friendly",

      pitchDescription:
        "The surface can provide assistance to bowlers and may become slower as the match progresses. Batters may need to spend time at the crease before attacking.",

      facilities: [
        {
          icon: "♿",
          name: "Wheelchair Access"
        },
        {
          icon: "🍴",
          name: "Food & Beverages"
        }
      ]
    }

  };


  // =====================================================
  // IPL MATCHES
  // =====================================================

  const iplMatches = [

    {
      date: "22 MARCH 2026",

      team1: "Mumbai Indians",
      team1Logo: miLogo,

      team2: "Chennai Super Kings",
      team2Logo: cskLogo,

      stadium: "Wankhede Stadium, Mumbai",

      time: "7:30 PM"
    },


    {
      date: "25 MARCH 2026",

      team1: "Royal Challengers Bengaluru",
      team1Logo: rcbLogo,

      team2: "Kolkata Knight Riders",
      team2Logo: kkrLogo,

      stadium: "M. Chinnaswamy Stadium, Bengaluru",

      time: "7:30 PM"
    },


    {
      date: "28 MARCH 2026",

      team1: "Rajasthan Royals",
      team1Logo: rrLogo,

      team2: "Sunrisers Hyderabad",
      team2Logo: srhLogo,

      stadium: "Rajiv Gandhi International Stadium, Hyderabad",

      time: "7:30 PM"
    },


    {
      date: "30 MARCH 2026",

      team1: "Delhi Capitals",
      team1Logo: dcLogo,

      team2: "Punjab Kings",
      team2Logo: pbksLogo,

      stadium: "Arun Jaitley Stadium, Delhi",

      time: "7:30 PM"
    },


    {
      date: "2 APRIL 2026",

      team1: "Gujarat Titans",
      team1Logo: gtLogo,

      team2: "Lucknow Super Giants",
      team2Logo: lsgLogo,

      stadium: "Narendra Modi Stadium, Ahmedabad",

      time: "7:30 PM"
    }

  ];


  // =====================================================
  // WPL MATCHES
  // =====================================================

  const wplMatches = [

    // ===================================================
    // DC VS MI
    // NOW ARUN JAITLEY STADIUM
    // ===================================================

    {
      date: "10 JANUARY 2026",

      team1: "Delhi Capitals",
      team1Logo: dcWplLogo,

      team2: "Mumbai Indians",
      team2Logo: miWplLogo,

      stadium: "Arun Jaitley Stadium, Delhi",

      time: "7:30 PM"
    },


    {
      date: "12 JANUARY 2026",

      team1: "Royal Challengers Bengaluru",
      team1Logo: rcbWplLogo,

      team2: "UP Warriorz",
      team2Logo: upwLogo,

      stadium: "M. Chinnaswamy Stadium, Bengaluru",

      time: "7:30 PM"
    },


    {
      date: "15 JANUARY 2026",

      team1: "Gujarat Giants",
      team1Logo: ggWplLogo,

      team2: "Mumbai Indians",
      team2Logo: miWplLogo,

      stadium: "Narendra Modi Stadium, Ahmedabad",

      time: "7:30 PM"
    },


    {
      date: "18 JANUARY 2026",

      team1: "UP Warriorz",
      team1Logo: upwLogo,

      team2: "Delhi Capitals",
      team2Logo: dcWplLogo,

      stadium: "BRSABVE Cricket Stadium, Lucknow",

      time: "7:30 PM"
    },


    {
      date: "20 JANUARY 2026",

      team1: "Royal Challengers Bengaluru",
      team1Logo: rcbWplLogo,

      team2: "Gujarat Giants",
      team2Logo: ggWplLogo,

      stadium: "M. Chinnaswamy Stadium, Bengaluru",

      time: "7:30 PM"
    }

  ];


  // =====================================================
  // CURRENT MATCH LIST
  // =====================================================

  const matches =
    activeLeague === "IPL"
      ? iplMatches
      : wplMatches;


  // =====================================================
  // STADIUM DETAILS PAGE
  // =====================================================

  if (selectedStadium) {

    return (
      <StadiumDetails
        stadium={selectedStadium}
        onBack={() => setSelectedStadium(null)}
      />
    );

  }


  // =====================================================
  // MAIN PAGE
  // =====================================================

  return (

    <div className="matches-page">


      {/* ================= NAVBAR ================= */}

      <nav className="matches-navbar">

        <div className="matches-logo">

          <img
            src="/cricfusion-logo-transparent.png"
            alt="CricFusion"
          />

          <span>
            CricFusion
          </span>

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

          onClick={() =>
            setActiveLeague("IPL")
          }
        >
          🏏 IPL
        </button>


        <button
          className={
            activeLeague === "WPL"
              ? "league-btn active"
              : "league-btn"
          }

          onClick={() =>
            setActiveLeague("WPL")
          }
        >
          🏏 WPL
        </button>

      </div>


      {/* ================= CURRENT LEAGUE ================= */}

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


            {/* BOOK TICKETS */}

            <button
              className="book-btn"

              onClick={() => {

                const details =
                  stadiumDetails[match.stadium];

                if (details) {

                  setSelectedStadium(details);

                } else {

                  alert(
                    `Stadium details are not available for ${match.stadium}.`
                  );

                }

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