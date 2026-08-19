import React, { useState } from "react";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function App() {
  const [page, setPage] = useState("home");

  if (page === "login") {
    return (
      <Login
        onBackToHome={() => setPage("home")}
        onRegister={() => setPage("register")}
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

  return (
    <Home
      onLogin={() => setPage("login")}
      onRegister={() => setPage("register")}
    />
  );
}

export default App;