import axios from 'axios';
import React, {useEffect, useState} from 'react';
import DetailCard from '../components/DetailCard';

const Event = () => {

    const[eventData, setEventData] = useState([]);
    const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/ed7bf90eb37e980ca5bcc2477e6f3375854c3a51"
    // changer l'id
    
    useEffect(() =>{
        axios.get(URL)
        .then((response) =>setEventData(response.data.record));
    },[])
  
    return (
        <div className="main-content">
            {eventData.fields &&
                <DetailCard eventdata={eventData} />
            }
            </div>

        
    );
};


export default Event;