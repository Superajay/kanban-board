import React from "react";
import HighPriorityIcon from "../assets/icons/Img - High Priority.svg";
import MediumPriorityIcon from "../assets/icons/Img - Medium Priority.svg";
import LowPriorityIcon from "../assets/icons/Img - Low Priority.svg";
import NoPriorityIcon from "../assets/icons/No-priority.svg";
import UrgentPriorityColorIcon from "../assets/icons/SVG - Urgent Priority colour.svg";
import apiData from "../data/apiData";

const Card = ({ card }) => {
    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 4:
                return <img src={UrgentPriorityColorIcon} alt="Urgent" />;
            case 3:
                return <img src={HighPriorityIcon} alt="High" />;
            case 2:
                return <img src={MediumPriorityIcon} alt="Medium" />;
            case 1:
                return <img src={LowPriorityIcon} alt="Low" />;
            case 0:
                return <img src={NoPriorityIcon} alt="No Priority" />;
            default:
                return null;
        }
    };

    const assignedUser = apiData.users.find(user => user.id === card.userId);

    return (
        <div className="card">
            <h3>{card.title}</h3>
            <p>{card.tag.join(", ")}</p>
            <div className="priority">{getPriorityIcon(card.priority)}</div>
            <div className="user">{assignedUser ? assignedUser.name : "Unassigned"}</div>
        </div>
    );
};

export default Card;