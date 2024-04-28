//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
import Table from './components/Table';
import Input from './components/Input';
import React, {useState} from 'react';



function App() {
  const [rows, setRows] = useState([]);
  const addRow = (newRow) => {
    setRows([...rows, newRow]);
  };
  return (
    <div className="App">
      <Header />
      <Input addRow={addRow} />
      <Table rows={rows} />
     
    </div>
  );
}

export default App;
