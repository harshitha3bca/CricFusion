import React, { useState } from "react";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Matches from "./Matches.jsx";

function App() {
  const [page, setPage] = useState("home");

  /* ================= LOGIN PAGE ================= */

  if (page === "login") {
    return (
      <Login
        onBackToHome={() => setPage("home")}
        onRegister={() => setPage("register")}
      />
    );
  }

  /* ================= REGISTER PAGE ================= */

  if (page === "register") {
    return (
      <Register
        onBackToHome={() => setPage("home")}
        onLogin={() => setPage("login")}
      />
    );
  }

  /* ================= MATCHES PAGE ================= */

  if (page === "matches") {
    return (
      <Matches
        onBackToHome={() => setPage("home")}
      />
    );
  }

  /* ================= HOME PAGE ================= */

  return (
    <Home
      onLogin={() => setPage("login")}
      onRegister={() => setPage("register")}
      onMatches={() => setPage("matches")}
    />
  );
}

export default App;