import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

const TicketBookingForm = ({ showName }) => {
  const [formData, setFormData] = useState({
    name: "",
    numberOfTickets: 1,
    snacksIncluded: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      showName,
      ...formData,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Book a Ticket for {showName}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Tickets:
          <input
            type="number"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <label className="checkbox-label">
          <div className="checkbox">
            Snacks Included
            <input
              type="checkbox"
              name="snacksIncluded"
              checked={formData.snacksIncluded}
              onChange={handleChange}
            />
          </div>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketBookingForm;
