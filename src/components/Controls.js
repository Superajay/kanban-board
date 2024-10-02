import React from "react";

const Controls = ({ onGroupingChange, onOrderingChange }) => {
    return (
        <div className="controls">
            <button onClick={() => onGroupingChange("Status")}>Group by Status</button>
            <button onClick={() => onGroupingChange("User")}>Group by User</button>
            <button onClick={() => onGroupingChange("Priority")}>Group by Priority</button>
            <button onClick={() => onOrderingChange("Priority")}>Sort by Priority</button>
            <button onClick={() => onOrderingChange("Title")}>Sort by Title</button>
        </div>
    );
};

export default Controls;
