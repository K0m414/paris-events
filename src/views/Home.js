import React from 'react';
import EventsData from '../components/EventsData';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Bienvenue sur Paris Events</h1>
            <h2>La dernière actualité</h2>
            <EventsData />
            
        </div>
    );
};

export default Home;