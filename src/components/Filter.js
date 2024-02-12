import React, { useState, useEffect } from 'react';

const Filter = ({ search, onSearchChange }) => {
  const [searchText, setSearchText] = useState(search); // Initialize searchText with the search prop

  useEffect(() => {
    // Update searchText if the search prop changes
    setSearchText(search);
  }, [search]);

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
