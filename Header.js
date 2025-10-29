import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Fashionista</h1>
      <nav>
        <a href="#categories">Shop</a>
        <a href="#products">New Arrivals</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
