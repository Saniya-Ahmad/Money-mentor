import React from "react";

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">💰</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Money Mentor</h1>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Money Mentor
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your personal financial advisor powered by AI. Plan your investments, track expenses,
            and achieve your financial goals with smart insights and personalized recommendations.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-semibold text-lg shadow-lg"
          >
            Start Your Financial Journey
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Money Mentor?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Analysis</h4>
              <p className="text-gray-600">Get AI-powered insights into your financial health and investment opportunities.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Goal Planning</h4>
              <p className="text-gray-600">Set and achieve your financial goals with personalized investment strategies.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-6xl mb-4">🛡️</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Risk Assessment</h4>
              <p className="text-gray-600">Understand your risk profile and get recommendations tailored to your comfort level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Financial Planning Made Simple</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-8xl mb-4">💼</div>
              <h4 className="text-lg font-semibold text-gray-900">Investment Planning</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-8xl mb-4">📈</div>
              <h4 className="text-lg font-semibold text-gray-900">Portfolio Tracking</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-8xl mb-4">🏠</div>
              <h4 className="text-lg font-semibold text-gray-900">Goal Achievement</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-8xl mb-4">💡</div>
              <h4 className="text-lg font-semibold text-gray-900">Smart Insights</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💰</span>
                </div>
                <h4 className="text-lg font-bold">Money Mentor</h4>
              </div>
              <p className="text-gray-400">
                Empowering your financial future with AI-driven insights and personalized planning.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>📍 India</p>
                <p>📧 support@moneymentor.com</p>
                <p>📞 +91-XXXX-XXXXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Money Mentor. All rights reserved. | Built for ET Hackathon
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;