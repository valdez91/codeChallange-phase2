
import './App.css';
import Header from './components/Header'; 
import Table from './components/Table';
import Input from './components/Input';
import React, {useState} from 'react';

// Define the transactions array with sample data
const transactions = [
  {
    date: '2024-01-04',
    description: 'Grocery shopping',
    category: 'Groceries',
    amount: 100,
  },
  {
    date: '2024-01-25',
    description: 'Restaurant meal',
    category: 'Dining',
    amount: 50,
  },
  {
    date: '2024-02-05',
    description: 'Pizza at La Piazzetta Nairobi',
    category: 'Dining',
    amount: 25,
  },
  {
    date: '2024-02-20',
    description: 'nyama choma at The Carnivore Restaurant',
    category: 'Dining',
    amount: 50,
  },
  {
    date: '2024-04-10',
    description: 'Road Trip to Kampala',
    category: 'Travelling',
    amount: 100,
  },
];
// Define the main App component
function App() {
  // Define a function to add a new row to the rows state
  const [rows, setRows] = useState([]);
  const addRow = (newRow) => {
     // Use the spread operator to create a new array with the new row added
    setRows([...rows, newRow]);
  };
    // Return the JSX for the App component
  return (
    <div className="App">
      <Header />
      <Input addRow={addRow} />
      <Table rows={rows} transactions={transactions} />
     
     
    </div>
  );
}
// Export the App component
export default App;
