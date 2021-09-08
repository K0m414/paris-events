import React from 'react';
import EventsData from '../components/EventsData';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Bienvenue sur Paris Events</h1>
            <EventsData />
            <Form />
        </div>
    );
};

export default Home;