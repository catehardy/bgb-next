import React from "react";

// search.js (../pages/search.js) works without importing it here,
// because it's imported in index.js
// but it doesn't work when the code is transferred directly into this file

export default function Search() {
  return (
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
  )
}
