import React, { useState } from 'react';
import EventServices from '../services/EventServices';
import "./css/LatestEvent.css"
import DetailCard from './DetailCard';
import ManageFavorite from './ManageFavorite';
    
const LatestEvent = (props) => {
    const eventData = props.eventdata;
    const [displayEventDetail, setDisplayEventDetail] =useState(false); 
    const [isActive, setActive] = useState("false"); // pour le changement de class 
   
    function SearchDetailEvent(){ // affiche l'évenement en détail
        setDisplayEventDetail(true)
        setActive(!isActive);
    }
    const CloseDetailEvent = () => { // ferme l'évenement en détail
        setDisplayEventDetail(false) 
        setActive(!isActive);
      }

    return (
        <div className="latest-event">
            {   eventData.fields &&
                <div  className={isActive ? "latest-event" : "none"}> {/* change de class selon isActive */}
                    <h3 key={"title"+eventData.id} onClick={SearchDetailEvent}>{eventData.fields.title}</h3>
                    <div  className="event-content">
                        <img key={"img"+eventData.id} src={eventData.fields.cover.url} alt={eventData.fields.cover.filename}/>
                        <ul>
                            <li key={"title"+eventData.id}>{eventData.fields.title}</li>
                            <li key={"date-start"+eventData.id}>Débute le {EventServices.LocalDate(eventData.fields.date_start)} à {EventServices.LocalHour(eventData.fields.date_start)}</li>
                            <li key={"date-end"+eventData.id}>Termine le {EventServices.LocalDate(eventData.fields.date_end)} à {EventServices.LocalHour(eventData.fields.date_end)}</li>
                            <li key={"category"+eventData.id}>Catégorie : {eventData.fields.category}</li>
                            <li key={"description"+eventData.id}>Description : {eventData.fields.lead_text}</li>
                        </ul>
                    </div>
                    <ManageFavorite id ={eventData.id} />
                </div>  
            }
            
            {displayEventDetail &&
                <DetailCard event={eventData} onClose={CloseDetailEvent}/>
            }
                
        </div>
    );
};

export default LatestEvent;