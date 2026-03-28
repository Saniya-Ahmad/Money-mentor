import React from "react";

const FeaturesPage = ({ onBackToHome }) => {
  const features = [
    {
      icon: "📊",
      title: "Data-driven Allocations",
      description: "Get AI-grade portfolio weight suggestions based on your objectives, age, income, and risk profile. Our ML models analyze market conditions and recommend optimal asset allocation.",
      details: [
        "Real-time market analysis",
        "Personalized asset allocation",
        "Quarterly rebalancing suggestions",
        "Risk-adjusted returns calculation",
      ],
    },
    {
      icon: "🛡️",
      title: "Risk-first Strategy",
      description: "Simulate market scenarios and guard against volatility with automatic rebalancing alerts. We prioritize capital preservation while maximizing long-term growth.",
      details: [
        "Scenario simulation engine",
        "Volatility tracking",
        "Auto-rebalancing alerts",
        "Portfolio stress testing",
        "Downside protection strategies",
      ],
    },
    {
      icon: "🤖",
      title: "Personal Finance AI",
      description: "Receive personalized action plans, tax optimization strategies, and paycheck insights instantly. Our AI analyzes your complete financial picture.",
      details: [
        "Tax-loss harvesting recommendations",
        "Emergency fund planning",
        "Goal-based investment strategies",
        "Monthly cash flow optimization",
        "AI-powered financial coaching",
      ],
    },
    {
      icon: "💰",
      title: "Tax Optimization",
      description: "Maximize tax savings with intelligent deduction planning and investment strategies. Save up to ₹2,50,000 annually through smart tax planning.",
      details: [
        "Section 80C optimization",
        "Tax-loss harvesting",
        "LTCG/STCG management",
        "HRA/LTA deduction planning",
        "Investment tax efficiency reports",
      ],
    },
    {
      icon: "🎯",
      title: "Goal Planning",
      description: "Set and track multiple financial goals with milestone-based investment strategies. Get monthly SIP recommendations for each goal.",
      details: [
        "Education planning",
        "Home purchase planning",
        "Retirement planning",
        "Wealth creation strategies",
        "Goal milestone tracking",
      ],
    },
    {
      icon: "📱",
      title: "Real-time Dashboards",
      description: "Monitor your portfolio performance, allocations, and goals 24/7 with real-time data. Get instant alerts on market movements.",
      details: [
        "Live portfolio tracking",
        "Performance analytics",
        "Allocation monitoring",
        "Email & SMS alerts",
        "Mobile app access",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-sky-900 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={onBackToHome} className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg">
                <span className="text-xl">💰</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Money Mentor</h1>
            </button>
            <button
              onClick={onBackToHome}
              className="py-2 px-6 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:scale-105 transform transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,_rgba(43,211,255,0.4),_transparent_40%),radial-gradient(circle_at_80%_40%,_rgba(148,163,255,0.45),_transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
            Powerful Features for Modern Investors
          </h2>
          <p className="text-xl text-sky-100 text-center max-w-3xl mx-auto">
            Everything you need to plan, invest, and grow your wealth with confidence
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-lg hover:shadow-xl hover:border-cyan-400/50 transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sky-100 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sky-200">
                    <span className="text-cyan-400">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/10 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to take control of your finances?</h3>
          <p className="text-lg text-sky-100 mb-8">
            Join thousands of investors already using Money Mentor to achieve their financial goals
          </p>
          <button
            onClick={onBackToHome}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-bold shadow-xl hover:scale-105 transition"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 text-slate-200 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 Money Mentor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;
