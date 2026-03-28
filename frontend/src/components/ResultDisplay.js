import React from "react";

const ResultDisplay = ({ result, darkMode = true }) => {
  if (!result) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📊</div>
        <p className={`text-lg ${darkMode ? "text-sky-200" : "text-gray-500"}`}>Enter your financial details and click "Analyze" to see your personalized financial plan.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Financial Summary */}
      <div className={`p-4 rounded-lg border backdrop-blur-sm ${darkMode ? "bg-white/10 border-white/20" : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"}`}>
        <h3 className={`text-lg font-semibold mb-3 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          <span className="mr-2">📋</span>
          Financial Plan Summary
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className={`font-medium ${darkMode ? "text-sky-200" : "text-gray-700"}`}>Strategy:</span>
            <p className={`${darkMode ? "text-white" : "text-gray-900"}`}>{result.strategy}</p>
          </div>
          <div>
            <span className={`font-medium ${darkMode ? "text-sky-200" : "text-gray-700"}`}>Monthly SIP:</span>
            <p className={`${darkMode ? "text-white" : "text-gray-900"}`}>₹{result.sip?.toLocaleString()}</p>
          </div>
          <div>
            <span className={`font-medium ${darkMode ? "text-sky-200" : "text-gray-700"}`}>Tax Savings:</span>
            <p className="text-green-400 font-semibold">₹{result.tax_saved?.toLocaleString()}</p>
          </div>
          <div>
            <span className={`font-medium ${darkMode ? "text-sky-200" : "text-gray-700"}`}>Emergency Fund:</span>
            <p className={`${darkMode ? "text-white" : "text-gray-900"}`}>₹{result.emergency_fund?.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Goal Planning */}
      <div className={`p-4 rounded-lg border backdrop-blur-sm ${darkMode ? "bg-white/10 border-white/20" : "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"}`}>
        <h3 className={`text-lg font-semibold mb-3 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          <span className="mr-2">🎯</span>
          Goal Planning
        </h3>
        <div className="space-y-2">
          {result.goal_plan &&
            result.goal_plan.map((g, index) => (
              <div key={index} className={`flex justify-between items-center p-3 rounded ${darkMode ? "bg-white/5" : "bg-white bg-opacity-50"}`}>
                <span className={`font-medium capitalize ${darkMode ? "text-sky-200" : "text-gray-700"}`}>{g.goal}</span>
                <span className="text-cyan-300 font-semibold">₹{Math.round(g.required_sip).toLocaleString()} / month</span>
              </div>
            ))}
        </div>
      </div>

      {/* Impact */}
      <div className={`p-4 rounded-lg border backdrop-blur-sm ${darkMode ? "bg-white/10 border-white/20" : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200"}`}>
        <h3 className={`text-lg font-semibold mb-3 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          <span className="mr-2">📈</span>
          Financial Impact
        </h3>
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex justify-between">
            <span className={`font-medium ${darkMode ? "text-sky-200" : "text-gray-700"}`}>Yearly Investment:</span>
            <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>₹{result.impact?.yearly_investment?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className={`font-medium ${darkMode ? "text-sky-200" : "text-gray-700"}`}>Savings Rate Before:</span>
            <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>{result.impact?.savings_rate_before}%</span>
          </div>
          <div className="flex justify-between">
            <span className={`font-medium ${darkMode ? "text-sky-200" : "text-gray-700"}`}>Savings Rate After:</span>
            <span className="text-green-400 font-semibold">{result.impact?.savings_rate_after}%</span>
          </div>
        </div>
      </div>

      {/* AI Explanation */}
      <div className={`p-4 rounded-lg border backdrop-blur-sm ${darkMode ? "bg-white/10 border-white/20" : "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"}`}>
        <h3 className={`text-lg font-semibold mb-3 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          <span className="mr-2">🤖</span>
          AI Analysis
        </h3>
        <p className={`leading-relaxed ${darkMode ? "text-sky-100" : "text-gray-700"}`}>{result.explanation}</p>
      </div>
    </div>
  );
};

export default ResultDisplay;