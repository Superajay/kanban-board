import React from "react";
import "./Board.css";

// Utility function to group tickets based on criteria
const groupTickets = (tickets, groupBy) => {
    if (!groupBy) return { "All Tickets": tickets };

    return tickets.reduce((groups, ticket) => {
        const groupKey =
            groupBy === "status"
                ? ticket.status
                : groupBy === "user"
                    ? ticket.userId
                    : groupBy === "priority"
                        ? ticket.priority
                        : "Other";

        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(ticket);

        return groups;
    }, {});
};

// Utility function to order tickets based on criteria
const orderTickets = (tickets, orderBy) => {
    if (orderBy === "priority") {
        return [...tickets].sort((a, b) => b.priority - a.priority);
    }
    if (orderBy === "title") {
        return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
};

const Board = ({ tickets, users, groupBy, orderBy }) => {
    // Group the tickets based on the selected groupBy criteria
    const groupedTickets = groupTickets(tickets, groupBy);

    return (
        <div className="board">
            {Object.keys(groupedTickets).map((groupKey) => {
                const orderedTickets = orderTickets(groupedTickets[groupKey], orderBy);

                return (
                    <div key={groupKey} className="board-column">
                        <h3>
                            {/* Display appropriate group heading */}
                            {groupBy === "status" && groupKey}
                            {groupBy === "user" && users.find((user) => user.id === groupKey)?.name}
                            {groupBy === "priority" && `Priority: ${groupKey}`}
                        </h3>
                        <div className="ticket-list">
                            {orderedTickets.map((ticket) => (
                                <div key={ticket.id} className="ticket-card">
                                    <h4>{ticket.title}</h4>
                                    <p>{ticket.status}</p>
                                    <p>Priority: {ticket.priority}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Board;
