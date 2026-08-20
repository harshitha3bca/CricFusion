import React, { useState } from "react";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Matches from "./Matches.jsx";
import StadiumDetails from "./StadiumDetails.jsx";

function App() {

  const [page, setPage] = useState("home");

  if (page === "login") {
    return (
      <Login
        onBackToHome={() => setPage("home")}
      />
    );
  }

  if (page === "register") {
    return (
      <Register
        onBackToHome={() => setPage("home")}
      />
    );
  }

  if (page === "matches") {
    return (
      <Matches
        onBackToHome={() => setPage("home")}
        onStadiumDetails={() => setPage("stadium")}
      />
    );
  }

  if (page === "stadium") {
    return (
      <StadiumDetails
        onBackToMatches={() => setPage("matches")}
        onSelectSeats={() => setPage("seats")}
      />
    );
  }

  return (
    <Home
      onLogin={() => setPage("login")}
      onRegister={() => setPage("register")}
      onMatches={() => setPage("matches")}
    />
  );
}

export default App;