import React, { useState, useEffect } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setFilteredItems(items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())));
  }, [items]);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleSearchChange = (searchText) => {
    setSearchText(searchText);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onSearchChange={handleSearchChange} />
      <ShoppingList items={filteredItems.length > 0 ? filteredItems : items} />
    </div>
  );
}

export default App;
