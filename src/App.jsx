import React, { useState } from "react";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Matches from "./Matches.jsx";

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
        onBackToLogin={() => setPage("login")}
        onBackToHome={() => setPage("home")}
      />
    );
  }

  if (page === "matches") {
    return (
      <Matches
        onBackToHome={() => setPage("home")}
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