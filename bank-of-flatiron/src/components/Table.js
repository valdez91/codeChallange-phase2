import React, { useState } from 'react';
const Table = ({ rows }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows.filter(row => row.description.toLowerCase().includes(searchTerm.toLowerCase()));

  
  return (
    <div >
      <div className='search'>
      <input
        type='text'
        placeholder='Search your Resent Transactforms'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className='table-content'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.description}</td>
              <td>{row.category}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Table;