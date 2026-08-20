import React, { useState } from "react";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Matches from "./Matches.jsx";
import HowItWorks from "./HowItWorks.jsx";

function App() {
  const [page, setPage] = useState("home");

  // ================= LOGIN =================

  if (page === "login") {
    return (
      <Login
        onBackToHome={() => setPage("home")}
      />
    );
  }

  // ================= REGISTER =================

  if (page === "register") {
    return (
      <Register
        onBackToLogin={() => setPage("login")}
        onBackToHome={() => setPage("home")}
      />
    );
  }

  // ================= MATCHES =================

  if (page === "matches") {
    return (
      <Matches
        onBackToHome={() => setPage("home")}
      />
    );
  }

  // ================= HOW IT WORKS =================

  if (page === "how") {
    return (
      <HowItWorks
        onBackToHome={() => setPage("home")}
      />
    );
  }

  // ================= HOME =================

  return (
    <Home
      onLogin={() => setPage("login")}
      onRegister={() => setPage("register")}
      onMatches={() => setPage("matches")}
      onHowItWorks={() => setPage("how")}
    />
  );
}

export default App;