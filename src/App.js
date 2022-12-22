import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Single from './pages/Single'
import Booking from './pages/Booking';
import Everything from './pages/Everything';
import BookingContext from './context/BookingContext';
import Checkout from './pages/Checkout';
import QR from './pages/QR';
import Ticket from './pages/Ticket';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <BookingContext.Provider value={{selectedMovie, setSelectedMovie, selected, setSelected}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/everything" element={<Everything />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/qr/:token" element={<QR />} />
            <Route path="/ticket/:token" element={<Ticket />} />
        </Routes>
        <Footer />
      </BookingContext.Provider>
    </>
  )
}

export default App