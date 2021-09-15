import React from 'react';
import LatestEvent from '../components/LatestEvent';

import "./css/Home.css"
const Home = () => {
    
    return (
        <div className="main-content">
            <h1>Bienvenue sur Paris Events</h1>
            <h2>Voici la dernière actualité</h2>
            <LatestEvent />
        </div>
    );
};

export default Home;