import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Charts = ({ result, monthlyPlan = [], darkMode = true }) => {
  if (!result) return null;

  // 📊 Savings chart
  const savingsData = {
    labels: ["Savings Rate Comparison"],
    datasets: [
      {
        label: "Before Plan",
        data: [result.impact?.savings_rate_before || 0],
        backgroundColor: "#ef4444",
        borderColor: "#dc2626",
        borderWidth: 1,
      },
      {
        label: "After Plan",
        data: [result.impact?.savings_rate_after || 0],
        backgroundColor: "#10b981",
        borderColor: "#059669",
        borderWidth: 1,
      },
    ],
  };

  // 💰 Investment chart
  const investmentData = {
    labels: ["Financial Metrics"],
    datasets: [
      {
        label: "Yearly Investment",
        data: [result.impact?.yearly_investment || 0],
        backgroundColor: "#3b82f6",
        borderColor: "#2563eb",
        borderWidth: 1,
      },
      {
        label: "Tax Savings",
        data: [result.tax_saved || 0],
        backgroundColor: "#f59e0b",
        borderColor: "#d97706",
        borderWidth: 1,
      },
    ],
  };

  const monthlyPlanData = {
    labels: monthlyPlan.map((item) => item.month),
    datasets: [
      {
        label: 'Projected SIP',
        data: monthlyPlan.map((item) => item.amount),
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        fill: true,
        tension: 0.35,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#e0f2fe' : '#374151'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += '₹' + context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? '#e0f2fe' : '#374151'
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#e0f2fe' : '#374151',
          callback: function(value) {
            return '₹' + value.toLocaleString();
          }
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className={`p-6 rounded-lg backdrop-blur-sm border ${darkMode ? "bg-white/10 border-white/20" : "bg-white shadow-sm border-gray-200"}`}>
        <h3 className={`text-lg font-semibold mb-4 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          <span className="mr-2">📊</span>
          Savings Rate Comparison
        </h3>
        <Bar data={savingsData} options={{
          ...chartOptions,
          scales: {
            ...chartOptions.scales,
            y: {
              ...chartOptions.scales.y,
              ticks: {
                ...chartOptions.scales.y.ticks,
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          }
        }} />
      </div>

      <div className={`p-6 rounded-lg backdrop-blur-sm border ${darkMode ? "bg-white/10 border-white/20" : "bg-white shadow-sm border-gray-200"}`}>
        <h3 className={`text-lg font-semibold mb-4 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          <span className="mr-2">💰</span>
          Investment & Tax Savings
        </h3>
        <Bar data={investmentData} options={chartOptions} />
      </div>

      <div className={`p-6 rounded-lg backdrop-blur-sm border ${darkMode ? "bg-white/10 border-white/20" : "bg-white shadow-sm border-gray-200"}`}>
        <h3 className={`text-lg font-semibold mb-4 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          <span className="mr-2">📈</span>
          Monthly SIP Forecast
        </h3>
        {monthlyPlan.length > 0 ? (
          <Line data={monthlyPlanData} options={chartOptions} />
        ) : (
          <p className={darkMode ? "text-sky-200" : "text-gray-600"}>No monthly projection available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Charts;