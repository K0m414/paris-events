import React from 'react';
import LatestEvent from '../components/LatestEvent';
import Navbar from '../components/Navbar';
import "./css/Home.css"
const Home = () => {
    return (
        <div className="page">
            <Navbar />
            <div className="main-content">
                <h1>Bienvenue sur Paris Events</h1>
                <h2>Voici la dernière actualité</h2>
            
            <LatestEvent />
            </div>
        </div>
    );
};

export default Home;