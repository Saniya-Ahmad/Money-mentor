import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    expenses: "",
    savings: "",
    investments: "",
    risk_profile: "medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value) || e.target.value,
    });
  };

  const handleSubmit = () => {
    const payload = {
      ...formData,
      goals: [
        {
          name: "house",
          target_amount: 5000000,
          years: 10,
        },
      ],
    };

    onSubmit(payload);
  };

  return (
  <div>
    <h2>Enter Financial Details</h2>

    <input name="age" placeholder="Age" onChange={handleChange} /><br /><br />
    <input name="income" placeholder="Monthly Income" onChange={handleChange} /><br /><br />
    <input name="expenses" placeholder="Monthly Expenses" onChange={handleChange} /><br /><br />
    <input name="savings" placeholder="Current Savings" onChange={handleChange} /><br /><br />
    <input name="investments" placeholder="Current Investments" onChange={handleChange} /><br /><br />

    <button style={{ padding: "10px 20px", cursor: "pointer" }} onClick={handleSubmit}>
      Analyze
    </button>
  </div>
);
};

export default InputForm;