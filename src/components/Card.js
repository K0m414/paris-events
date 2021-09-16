import React, {useState } from 'react';
import "./css/Card.css"
import DetailCard from './DetailCard';
import EventServices from '../services/EventServices';
import ManageFavorite from './ManageFavorite';
	
const Card = (props) => {
    // donnée reçu searchevents.js
    const eventdata = props.eventdata;
    const [displayEventDetail, setDisplayEventDetail] =useState(false); // affichage des details

    const SearchDetailEvent = () => { // affiche
        setDisplayEventDetail(true) 
    }

    const CloseDetailEvent = () => {  // ferme
        setDisplayEventDetail(false) 
      }

    return(
        <div className="search-result">
            <div className="all-cards">
            {!displayEventDetail && 
                <div className="card">
                    <h3 key={"title"+eventdata.record.id} onClick={SearchDetailEvent}>{eventdata.record.fields.title}</h3>
                    <div className="card-content">
                    <img key={"img"+eventdata.record.id} src={eventdata.record.fields.cover.url} alt={"image de "+eventdata.record.fields.cover_alt}/>
                    <ul>
                        <li key={"date-start"+eventdata.record.id}>Débute le {EventServices.LocalDate(eventdata.record.fields.date_start)} à {EventServices.LocalHour(eventdata.record.fields.date_start)}</li>
                        <li key={"date-end"+eventdata.record.id}>Termine le {EventServices.LocalDate(eventdata.record.fields.date_end)} à {EventServices.LocalHour(eventdata.record.fields.date_end)}</li>
                        <li key={"category"+eventdata.record.id}>Catégorie : {eventdata.record.fields.category}</li>
                        <li key={"description"+eventdata.record.id}>Description : {eventdata.record.fields.lead_text}</li>
                    </ul>
                    </div>
                    <ManageFavorite id ={eventdata.record.id} />
                </div>
            }
            </div>

            <div>
                { displayEventDetail && 
                    <DetailCard event={eventdata.record} onClose={CloseDetailEvent}/>
                }
            </div>       
        
        </div>
    )
    
    };
    

export default Card;

