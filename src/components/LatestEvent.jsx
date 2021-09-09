import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Card from './Card';
import "./css/LatestEvent.css"
    
const LatestEvent = () => {
    const[eventData, setEventData] = useState([]);
    const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=date_start&limit=1&pretty=false&timezone=UTC"

    useEffect(() =>{
        axios.get(URL)
        .then((response) =>setEventData(response.data.records[0].record));
        
    },[])
    // console.log(data);

    return (
        <div className="latest-event">

            {   eventData.fields &&
                
            <div>
                <h3 key={"title"+eventData.id}><a href="ghf">{eventData.fields.title}</a></h3>
                <div  className="event-content">
                    <img key={"img"+eventData.id} src={eventData.fields.cover.url} alt={eventData.fields.cover.filename}/>
                    <ul>
                        <li key={"title"+eventData.id}>{eventData.fields.title}</li>
                        <li key={"date-start"+eventData.id}>Débute le : {eventData.fields.date_start}</li>
                        <li key={"date-end"+eventData.id}>Termine le : {eventData.fields.date_end}</li>
                        
                        <li key={"description"+eventData.id}>Description :
                            <div dangerouslySetInnerHTML={{ __html: eventData.fields.description }}>
                            </div>
                        </li>
                    </ul>
                </div>
                <button className="btn">Favoris</button>
            </div>  
            }
        </div>
    );
};

export default LatestEvent;