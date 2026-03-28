import React from "react";

const PricingPage = ({ onBackToHome }) => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Basic financial analysis",
        "Single goal planning",
        "Limited portfolio tracking",
        "Email support",
        "Basic reports",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹599",
      period: "/month",
      description: "Most popular for active investors",
      features: [
        "Advanced AI analysis",
        "Unlimited goals",
        "Real-time portfolio tracking",
        "Tax optimization tools",
        "Scenario simulations",
        "Priority email support",
        "Monthly reports",
        "Risk scoring",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "₹1,499",
      period: "/month",
      description: "For serious wealth builders",
      features: [
        "Everything in Pro",
        "1-on-1 financial coaching",
        "Personalized strategy reviews",
        "24/7 priority support",
        "Advanced analytics",
        "API access",
        "Custom reports",
        "White-glove onboarding",
      ],
      cta: "Contact Sales",
      highlighted: false,
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
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Choose the perfect plan for your financial goals. No hidden charges, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border transition ${
                plan.highlighted
                  ? "border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 shadow-2xl transform md:scale-105"
                  : "border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-lg hover:shadow-xl hover:border-cyan-400/50"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-bold px-4 py-2 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sky-200 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sky-200 ml-2">{plan.period}</span>}
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-black hover:scale-105"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/15"
                }`}
              >
                {plan.cta}
              </button>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-cyan-400">✓</span>
                    <span className="text-sky-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/10 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold mb-2">Can I switch plans anytime?</h4>
              <p className="text-sky-100">Yes! You can upgrade, downgrade, or cancel your subscription anytime without penalties.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold mb-2">Is there a free trial?</h4>
              <p className="text-sky-100">Yes! All Pro and Premium plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-sky-100">We accept all major credit cards, debit cards, UPI, and netbanking for hassle-free payments.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold mb-2">Do you offer yearly discounts?</h4>
              <p className="text-sky-100">Yes! Save 20% when you subscribe annually instead of monthly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to invest smarter?</h3>
          <p className="text-lg text-sky-100 mb-8">
            Start your free trial today. No credit card required.
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

export default PricingPage;
