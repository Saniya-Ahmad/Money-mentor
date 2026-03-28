import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import IntroScreen from "./components/IntroScreen";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState("landing"); // landing, features, pricing
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  // 🔥 Intro first
  if (showIntro) {
    return (
      <IntroScreen
        onFinish={() => {
          setShowIntro(false);
        }}
      />
    );
  }

  // 🔥 Landing page
  if (currentPage === "landing") {
    return (
      <LandingPage
        onGetStarted={() => setCurrentPage("auth")}
        onNavigateFeatures={() => setCurrentPage("features")}
        onNavigatePricing={() => setCurrentPage("pricing")}
        analysisData={analysisData}
      />
    );
  }

  // 🔥 Features page
  if (currentPage === "features") {
    return (
      <FeaturesPage
        onBackToHome={() => setCurrentPage("landing")}
      />
    );
  }

  // 🔥 Pricing page
  if (currentPage === "pricing") {
    return (
      <PricingPage
        onBackToHome={() => setCurrentPage("landing")}
      />
    );
  }

  // 🔥 Auth / Dashboard
  return (
    <>
      {isLoggedIn ? (
        <Dashboard
          setIsLoggedIn={setIsLoggedIn}
          onBackToHome={() => {
            setIsLoggedIn(false);
            setCurrentPage("landing");
          }}
          setAnalysisData={setAnalysisData}
        />
      ) : (
        <AuthPage
          setIsLoggedIn={setIsLoggedIn}
          onBackToHome={() => setCurrentPage("landing")}
        />
      )}
    </>
  );
}

export default App;