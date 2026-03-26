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

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
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
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '₹' + value.toLocaleString();
          }
        }
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">📊</span>
          Savings Rate Comparison
        </h3>
        <Bar data={savingsData} options={{
          ...chartOptions,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          }
        }} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">💰</span>
          Investment & Tax Savings
        </h3>
        <Bar data={investmentData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Charts;