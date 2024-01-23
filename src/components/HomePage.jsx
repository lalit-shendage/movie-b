import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import "../styles/Home.css";

const HomePage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <div className="container">
        {shows.map(({ show }) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
