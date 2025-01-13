


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value); // Update local search state
    onSearch(e.target.value); // Call the parent-provided callback
  };

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">ShoppyGlobe</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={search}
          onChange={handleSearch}
        />
      </nav>
    </header>
  );
};

export default Header;


