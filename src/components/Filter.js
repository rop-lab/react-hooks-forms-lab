import React, { useState } from 'react';

const Filter = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText);
    onSearchChange(newText); // Pass the new search text to the parent component
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Filter;
