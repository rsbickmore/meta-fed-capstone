import React from 'react';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import BookingForm from './components/BookingForm'
import Booking from './components/booking';
import BookingConfirm from './components/BookingConfirm';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <BookingForm/>
    <Booking/>
    <BookingConfirm/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
