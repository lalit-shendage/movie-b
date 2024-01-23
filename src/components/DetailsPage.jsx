import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Details.css";

const DetailsPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!show) {
    return <p>Loading...</p>;
  }

  const imgSrc = show.image
    ? show.image.medium
    : "https://www.shutterstock.com/image-vector/coming-soon-banner-template-design-600nw-2295363725.jpg";

  const isRunning = show.status === "Running";

  return (
    <div className="details-container">
      <h1>{show.name}</h1>
      <img src={show.image.medium} alt={show.name} />
      <p className="Status">
        <b>{show.status}</b>
      </p>
      <p>Type: {show.type}</p>
      <p>Language: {show.language}</p>
      <p>Genres: {show.genres.join(", ")}</p>
      {show.rating?.average && <p>Rating: {show.rating?.average}</p>}
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />

      {isRunning && (
        <Link to={`/book-ticket/${id}/${encodeURIComponent(show.name)}`}>
          <button>Book Ticket</button>
        </Link>
      )}
    </div>
  );
};

export default DetailsPage;
