import React, { useState } from "react";
import Home from "./Home.jsx";
import Login from "./Login.jsx";

function App() {
  const [page, setPage] = useState("home");

  if (page === "login") {
    return <Login onBackToHome={() => setPage("home")} />;
  }

  return <Home onLogin={() => setPage("login")} />;
}

export default App;