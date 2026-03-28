import React, { useState } from "react";

const InputForm = ({ onSubmit, darkMode = false }) => {
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    expenses: "",
    savings: "",
    investments: "",
    risk_profile: "medium",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Age validation
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else {
      const ageNum = Number(formData.age);
      if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
        newErrors.age = "Please enter a valid age (1-120)";
      }
    }

    // Income validation
    if (!formData.income.trim()) {
      newErrors.income = "Monthly income is required";
    } else {
      const incomeNum = Number(formData.income);
      if (isNaN(incomeNum) || incomeNum < 0) {
        newErrors.income = "Please enter a valid income amount";
      }
    }

    // Expenses validation
    if (!formData.expenses.trim()) {
      newErrors.expenses = "Monthly expenses is required";
    } else {
      const expensesNum = Number(formData.expenses);
      if (isNaN(expensesNum) || expensesNum < 0) {
        newErrors.expenses = "Please enter a valid expenses amount";
      }
    }

    // Savings validation
    if (!formData.savings.trim()) {
      newErrors.savings = "Current savings is required";
    } else {
      const savingsNum = Number(formData.savings);
      if (isNaN(savingsNum) || savingsNum < 0) {
        newErrors.savings = "Please enter a valid savings amount";
      }
    }

    // Investments validation
    if (!formData.investments.trim()) {
      newErrors.investments = "Current investments is required";
    } else {
      const investmentsNum = Number(formData.investments);
      if (isNaN(investmentsNum) || investmentsNum < 0) {
        newErrors.investments = "Please enter a valid investments amount";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const payload = {
        ...formData,
        age: Number(formData.age),
        income: Number(formData.income),
        expenses: Number(formData.expenses),
        savings: Number(formData.savings),
        investments: Number(formData.investments),
        goals: [
          {
            name: "house",
            target_amount: 5000000,
            years: 10,
          },
        ],
      };

      onSubmit(payload);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-sky-100" : "text-gray-700"} mb-2`}>Age</label>
          <input
            name="age"
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            className={`w-full border p-3 rounded-lg bg-transparent ${darkMode ? "text-white border-white/30 placeholder:text-sky-200 [&::-webkit-outer-spin-button]:bg-gray-700 [&::-webkit-inner-spin-button]:bg-gray-700 [&::-webkit-outer-spin-button]:text-white [&::-webkit-inner-spin-button]:text-white [&::-webkit-outer-spin-button]:hover:bg-gray-600 [&::-webkit-inner-spin-button]:hover:bg-gray-600" : "text-gray-900 border-gray-300 placeholder:text-gray-400"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
              errors.age ? "border-red-500" : ""
            }`}
            onChange={handleChange}
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-sky-100" : "text-gray-700"} mb-2`}>Monthly Income (₹)</label>
          <input
            name="income"
            type="number"
            placeholder="Enter monthly income"
            value={formData.income}
            className={`w-full border p-3 rounded-lg bg-transparent ${darkMode ? "text-white border-white/30 placeholder:text-sky-200 [&::-webkit-outer-spin-button]:bg-gray-700 [&::-webkit-inner-spin-button]:bg-gray-700 [&::-webkit-outer-spin-button]:text-white [&::-webkit-inner-spin-button]:text-white [&::-webkit-outer-spin-button]:hover:bg-gray-600 [&::-webkit-inner-spin-button]:hover:bg-gray-600" : "text-gray-900 border-gray-300 placeholder:text-gray-400"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
              errors.income ? "border-red-500" : ""
            }`}
            onChange={handleChange}
          />
          {errors.income && <p className="text-red-500 text-sm mt-1">{errors.income}</p>}
        </div>

        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-sky-100" : "text-gray-700"} mb-2`}>Monthly Expenses (₹)</label>
          <input
            name="expenses"
            type="number"
            placeholder="Enter monthly expenses"
            value={formData.expenses}
            className={`w-full border p-3 rounded-lg bg-transparent ${darkMode ? "text-white border-white/30 placeholder:text-sky-200 [&::-webkit-outer-spin-button]:bg-gray-700 [&::-webkit-inner-spin-button]:bg-gray-700 [&::-webkit-outer-spin-button]:text-white [&::-webkit-inner-spin-button]:text-white [&::-webkit-outer-spin-button]:hover:bg-gray-600 [&::-webkit-inner-spin-button]:hover:bg-gray-600" : "text-gray-900 border-gray-300 placeholder:text-gray-400"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
              errors.expenses ? "border-red-500" : ""
            }`}
            onChange={handleChange}
          />
          {errors.expenses && <p className="text-red-500 text-sm mt-1">{errors.expenses}</p>}
        </div>

        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-sky-100" : "text-gray-700"} mb-2`}>Current Savings (₹)</label>
          <input
            name="savings"
            type="number"
            placeholder="Enter current savings"
            value={formData.savings}
            className={`w-full border p-3 rounded-lg bg-transparent ${darkMode ? "text-white border-white/30 placeholder:text-sky-200 [&::-webkit-outer-spin-button]:bg-gray-700 [&::-webkit-inner-spin-button]:bg-gray-700 [&::-webkit-outer-spin-button]:text-white [&::-webkit-inner-spin-button]:text-white [&::-webkit-outer-spin-button]:hover:bg-gray-600 [&::-webkit-inner-spin-button]:hover:bg-gray-600" : "text-gray-900 border-gray-300 placeholder:text-gray-400"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
              errors.savings ? "border-red-500" : ""
            }`}
            onChange={handleChange}
          />
          {errors.savings && <p className="text-red-500 text-sm mt-1">{errors.savings}</p>}
        </div>

        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-sky-100" : "text-gray-700"} mb-2`}>Current Investments (₹)</label>
          <input
            name="investments"
            type="number"
            placeholder="Enter current investments"
            value={formData.investments}
            className={`w-full border p-3 rounded-lg bg-transparent ${darkMode ? "text-white border-white/30 placeholder:text-sky-200 [&::-webkit-outer-spin-button]:bg-gray-700 [&::-webkit-inner-spin-button]:bg-gray-700 [&::-webkit-outer-spin-button]:text-white [&::-webkit-inner-spin-button]:text-white [&::-webkit-outer-spin-button]:hover:bg-gray-600 [&::-webkit-inner-spin-button]:hover:bg-gray-600" : "text-gray-900 border-gray-300 placeholder:text-gray-400"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
              errors.investments ? "border-red-500" : ""
            }`}
            onChange={handleChange}
          />
          {errors.investments && <p className="text-red-500 text-sm mt-1">{errors.investments}</p>}
        </div>

        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-sky-100" : "text-gray-700"} mb-2`}>Risk Profile</label>
          <select
            name="risk_profile"
            className={`w-full border p-3 rounded-lg bg-transparent ${darkMode ? "text-white border-white/30 [&>option]:bg-gray-800 [&>option]:text-white" : "text-gray-900 border-gray-300"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200`}
            onChange={handleChange}
            value={formData.risk_profile}
          >
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
          </select>
        </div>
      </div>

      <button
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-semibold shadow-lg"
        onClick={handleSubmit}
      >
        Analyze Financial Plan
      </button>
    </div>
  );
};

export default InputForm;