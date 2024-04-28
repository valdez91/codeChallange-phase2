import React, { useState } from 'react';
// Define the Input component
const Input = ({ addRow }) => {
  // Define a state variable for the input data and its setter function
  const [inputData, setInputData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (inputData.date && inputData.description && inputData.category && inputData.amount) {
      addRow(inputData); // Pass the inputData to the Table.js file
    }
  };

  return (
    <div className="input-container" >
      <input
        type="date"
        name="date"
        value={inputData.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder='Description'
        value={inputData.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder='Category'
        value={inputData.category}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="amount"
        placeholder='Amount'
        value={inputData.amount}
        onChange={handleInputChange}
      />
      <div className="button-container">
        <button className='Btn' onClick={handleSubmit}>Add Transaction</button>
      </div>
    </div>
  );
  
};

export default Input;