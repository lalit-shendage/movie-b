import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import TicketBookingForm from './components/TicketBookingForm';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element= {<HomePage/>} />
        <Route path="/details/:id" element={<DetailsPage/>} />
        <Route path="/book-ticket/:id/:movieName" element={<TicketBookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
