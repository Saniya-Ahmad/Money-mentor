import React, { useState } from "react";
import InputForm from "../components/InputForm";
import ResultDisplay from "../components/ResultDisplay";
import Charts from "../components/Charts";

function Dashboard({ setIsLoggedIn, onBackToHome }) {
  const [result, setResult] = useState(null);

  const API = "http://127.0.0.1:8000";

  const handleSubmit = async (data) => {
    const token = localStorage.getItem("token");

    const res = await fetch(API + "/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setResult(result);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const KPICard = ({ title, value, icon, color }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color} hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
          <div className="flex items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">💰</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Money Mentor Dashboard</h1>
            </div>
            <div className="flex space-x-4 ml-8">
              <button
                onClick={onBackToHome}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium shadow-sm"
              >
                Home
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium shadow-sm"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard
              title="Monthly SIP"
              value={`₹${result.sip?.toLocaleString() || 0}`}
              icon="💸"
              color="border-indigo-500"
            />
            <KPICard
              title="Tax Savings"
              value={`₹${result.tax_saved?.toLocaleString() || 0}`}
              icon="💼"
              color="border-green-500"
            />
            <KPICard
              title="Emergency Fund"
              value={`₹${result.emergency_fund?.toLocaleString() || 0}`}
              icon="🛡️"
              color="border-yellow-500"
            />
            <KPICard
              title="Goals"
              value={result.goal_plan?.length || 0}
              icon="🎯"
              color="border-purple-500"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📝</span>
              Financial Input
            </h2>
            <InputForm onSubmit={handleSubmit} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📊</span>
              Analysis Results
            </h2>
            <ResultDisplay result={result} />
          </div>
        </div>

        {/* Charts */}
        {result && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📈</span>
              Financial Charts
            </h2>
            <Charts result={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;