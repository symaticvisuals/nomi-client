import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="slanting-background">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZgpadvnLQBPqEzSM5yQ32yOUqH5tGtEFKpGIiqQ8ReSGPQHn-N8XvxAjHoZ9lBFu_g&usqp=CAU"
            alt=""
          />
          <h1>Logo</h1>
        </div>
      </div>
      <nav className="navbar">
        <h3 className="navbar-link">NavLink</h3>
        <h3 className="navbar-link">NavLink</h3>
        <h3 className="navbar-link">NavLink</h3>
        <h3 className="navbar-link">NavLink</h3>
      </nav>
      <div className="header-button">
        <button>Button</button>
      </div>
    </div>
  );
}

export default Header;
