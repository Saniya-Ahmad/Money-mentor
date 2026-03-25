import React from "react";

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
  <div>
  <h2>Financial Summary</h2>

  <div className="section">
    <h3>Plan</h3>
    <p>Strategy: {result.strategy}</p>
    <p>SIP: ₹{result.sip}</p>
    <p>Tax Saved: ₹{result.tax_saved}</p>
    <p>Emergency Fund: ₹{result.emergency_fund}</p>
  </div>

  <div className="section">
    <h3>Goal Planning</h3>
    {result.goal_plan &&
      result.goal_plan.map((g, index) => (
        <p key={index}>
          {g.goal}: ₹{Math.round(g.required_sip)} / month
        </p>
      ))}
  </div>

  <div className="section">
    <h3>Impact</h3>
    <p>Yearly Investment: ₹{result.impact.yearly_investment}</p>
    <p>Savings Before: {result.impact.savings_rate_before}</p>
    <p>Savings After: {result.impact.savings_rate_after}</p>
  </div>

  <div className="section">
  <h3>AI Explanation</h3>
  <p>{result.explanation}</p>
</div>
</div>
);
};

export default ResultDisplay;