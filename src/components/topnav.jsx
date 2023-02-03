import React from "react";

export default function TopNav() {
  return (
    <header>
      <input type="checkbox" id="check" title="toggle menu" />

      <nav>
        <h1 className="icon gradient-text">
          <a href="./">BGB</a>
        </h1>
        <div className="search-box">
          <div className="dropdown">
            <form id="boardgame-search" className="search-box">
              <input
                id="boardgame-searchfield"
                type="search"
                placeholder="Search for a game..."
              />
              <span className="fa fa-search" id="user-submission"></span>
            </form>
            <div id="search-dropdown" className="dropdown-content">
              <div id="api-spot"></div>
            </div>
          </div>
        </div>
        <ol>
          <li>
            <a href="#">My Games</a>
          </li>
          <li>
            <a href="#">Friends</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ol>
        <label htmlFor="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>
    </header>
  );
}
