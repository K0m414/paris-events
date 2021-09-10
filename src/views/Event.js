// import axios from 'axios';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import DetailCard from '../components/DetailCard';

const Event = () => {

    const[eventData, setEventData] = useState([]);
    const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/ed7bf90eb37e980ca5bcc2477e6f3375854c3a51?pretty=false&timezone=UTC"
    // changer l'id
    
    useEffect(() =>{
        axios.get(URL)
        .then((response) =>setEventData(response.data.records[0].record));
    },[])
  
    return (
        <div className="page">
            <Navbar />
            <DetailCard eventdata={eventData} />
            </div>

        
    );
};


export default Event;