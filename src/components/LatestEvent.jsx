import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import StorageService from '../services/StorageService';
// import Card from './Card';
import "./css/LatestEvent.css"
import DetailCard from './DetailCard';
import ErrorData from './ErrorData';
import ManageFavorite from './ManageFavorite';
    
const LatestEvent = () => {
    const[eventData, setEventData] = useState([]);
    const [displayEventDetail, setDisplayEventDetail] =useState(false);
    const [isActive, setActive] = useState("false");
    const [errorData, setErrorData] = useState(false);

    const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=date_end&limit=1&pretty=false&timezone=UTC"

    useEffect(() =>{// se déclenche au chargement de la page 1 fois
        axios.get(URL)// recupere données de l'api
        .then((response) =>setEventData(response.data.records[0].record))
            .catch(e => { // attrape erreur au niveau de l'echange entre l'api et le site
                setErrorData(true) //si il y a une erreur alors changement de l'état l'erreur en true 
                console.log('erreur')});
        }, [])
   
    function SearchDetailEvent(){ // affiche l'évenement en détail
        setDisplayEventDetail(true)
        setActive(!isActive);
        // console.log(favotitesEventsID);
    }
    const CloseDetailEvent = () => { // ferme l'évenement en détail
        setDisplayEventDetail(false) 
        setActive(!isActive);
      }

    return (
        <div className="latest-event">
            {   eventData.fields &&
                <div  className={isActive ? "latest-event" : "none"}>
                    <h3 key={"title"+eventData.id} onClick={SearchDetailEvent}>{eventData.fields.title}</h3>
                    <div  className="event-content">
                        <img key={"img"+eventData.id} src={eventData.fields.cover.url} alt={eventData.fields.cover.filename}/>
                        <ul>
                            <li key={"title"+eventData.id}>{eventData.fields.title}</li>
                            <li key={"date-start"+eventData.id}>Débute le : {eventData.fields.date_start}</li>
                            <li key={"date-end"+eventData.id}>Termine le : {eventData.fields.date_end}</li>
                        </ul>
                    </div>
                    <ManageFavorite id ={eventData.id} />
                </div>  
            }
            
            {displayEventDetail &&
                <DetailCard event={eventData} onClose={CloseDetailEvent}/>
            }
            
            {errorData &&
            <ErrorData />
            }
                
        </div>
    );
};

export default LatestEvent;