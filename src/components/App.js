import React, { useState } from 'react';
import ItemForm from './ItemForm';

function App() {
  const handleItemFormSubmit = (newItem) => {
    // Handle the submission of the new item
    console.log('New Item:', newItem);
  };

  return (
    <div>
      <h1>My Shopping List</h1>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
