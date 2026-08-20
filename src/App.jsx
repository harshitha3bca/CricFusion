import React, { useState } from "react";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Matches from "./Matches";
import StadiumDetails from "./StadiumDetails";

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  // This stores the match/stadium that the user selected
  const [selectedMatch, setSelectedMatch] = useState(null);


  // =====================================================
  // HOME
  // =====================================================

  const handleHome = () => {
    setCurrentPage("home");
  };


  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = () => {
    setCurrentPage("login");
  };


  // =====================================================
  // REGISTER
  // =====================================================

  const handleRegister = () => {
    setCurrentPage("register");
  };


  // =====================================================
  // MATCHES
  // =====================================================

  const handleMatches = () => {
    setCurrentPage("matches");
  };


  // =====================================================
  // STADIUM DETAILS
  // =====================================================

  const handleStadiumDetails = (match) => {

    console.log("Selected match:", match);

    // Save the complete selected match
    setSelectedMatch(match);

    // Open stadium details page
    setCurrentPage("stadium");
  };


  // =====================================================
  // BACK TO MATCHES
  // =====================================================

  const handleBackToMatches = () => {
    setCurrentPage("matches");
  };


  // =====================================================
  // PAGE DISPLAY
  // =====================================================

  return (

    <>

      {/* ================= HOME ================= */}

      {currentPage === "home" && (

        <Home
          onLogin={handleLogin}
          onRegister={handleRegister}
          onMatches={handleMatches}
        />

      )}


      {/* ================= LOGIN ================= */}

      {currentPage === "login" && (

        <Login
          onBack={handleHome}
          onRegister={handleRegister}
        />

      )}


      {/* ================= REGISTER ================= */}

      {currentPage === "register" && (

        <Register
          onBack={handleHome}
          onLogin={handleLogin}
        />

      )}


      {/* ================= MATCHES ================= */}

      {currentPage === "matches" && (

        <Matches
          onBackToHome={handleHome}
          onStadiumDetails={handleStadiumDetails}
        />

      )}


      {/* ================= STADIUM DETAILS ================= */}

      {currentPage === "stadium" && (

        <StadiumDetails
          stadium={selectedMatch}
          onBack={handleBackToMatches}
        />

      )}

    </>

  );
}

export default App;