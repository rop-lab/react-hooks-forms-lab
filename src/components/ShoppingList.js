import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState(""); // State for search text

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    // Filtering based on category and search text
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return (
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      {/* Pass onSearchChange prop to the Filter component */}
      <Filter onSearchChange={setSearchText} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
