import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const ShowCard = ({ show }) => {
  const imgSrc = show.image
    ? show.image.medium
    : "https://www.shutterstock.com/image-vector/coming-soon-banner-template-design-600nw-2295363725.jpg";
  return (
    <Link to={`/details/${show.id}`} className="card-link">
      <div className="card-container">
        <img src={imgSrc} alt={show.name} />
        <h2 className="h2">{show.name}</h2>
        <p>Status: {show.status}</p>
      </div>
    </Link>
  );
};

export default ShowCard;
