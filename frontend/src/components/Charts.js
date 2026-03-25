import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Charts = ({ result }) => {
  if (!result) return null;

  // 📊 Savings chart
 const savingsData = {
  labels: ["Savings Rate"],
  datasets: [
    {
      label: "Before",
      data: [result.impact.savings_rate_before],
      backgroundColor: "#e74c3c",
    },
    {
      label: "After",
      data: [result.impact.savings_rate_after],
      backgroundColor: "#2ecc71",
    },
  ],
};

  // 💰 Investment chart
  const investmentData = {
  labels: ["Amount"],
  datasets: [
    {
      label: "Yearly Investment",
      data: [result.impact.yearly_investment],
      backgroundColor: "#3498db",
    },
    {
      label: "Tax Saved",
      data: [result.impact.tax_saved],
      backgroundColor: "#f39c12",
    },
  ],
};

  return (
    <div>
      <h3>Visual Insights</h3>

      <div style={{ marginBottom: "30px" }}>
        <Bar data={savingsData} />
      </div>

      <div>
        <Bar data={investmentData} />
      </div>
    </div>
  );
};

export default Charts;