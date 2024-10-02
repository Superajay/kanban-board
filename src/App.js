import React, { useState } from "react";
import Board from "./components/Board";
import apiData from "./data/apiData"; // Import from apiData.js
import "./App.css";

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [groupBy, setGroupBy] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="App">
      <button onClick={toggleOptions} className="display-button">
        Display
      </button>

      {showOptions && (
        <div className="options">
          <div className="grouping">
            <label>Grouping:</label>
            <select onChange={(e) => setGroupBy(e.target.value)}>
              <option value="">None</option>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="ordering">
            <label>Ordering:</label>
            <select onChange={(e) => setOrderBy(e.target.value)}>
              <option value="">None</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}

      <Board tickets={apiData.tickets} users={apiData.users} groupBy={groupBy} orderBy={orderBy} />
    </div>
  );
}

export default App;
