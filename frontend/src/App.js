import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  return (
    <>
      {isLoggedIn ? (
        <Dashboard setIsLoggedIn={setIsLoggedIn} onBackToHome={() => { setIsLoggedIn(false); setShowLanding(true); }} />
      ) : (
        <AuthPage setIsLoggedIn={setIsLoggedIn} onBackToHome={() => setShowLanding(true)} />
      )}
    </>
  );
}

export default App;