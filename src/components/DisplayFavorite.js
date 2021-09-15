// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// // import StorageService from '../services/StorageService';
// import DetailCard from './DetailCard';
// import ErrorData from './ErrorData';
// import ManageFavorite from './ManageFavorite';

// const DisplayFavorite = () => {
//     const[eventData, setEventData] = useState([]);
//     const [isActive, setActive] = useState("false");
//     const [displayEventDetail, setDisplayEventDetail] =useState(false);
//     const [errorData, setErrorData] = useState(false);

//     const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/"
//     const localData =localStorage.getItem("parisEventsFavoritesID");
//     let IDData =JSON.parse(localData) // pour récupérer id > localData[0].id test avec 0 remplacer par i

//     useEffect(() =>{ // se déclenche au chargement de la page
//         axios.get(URL+IDData[0].id) // recupere données de l'api
//         .then((response) =>setEventData(response.data.record)) // met les données dans eventdata
//         .catch(e => { // attrape erreur au niveau de l'echange entre l'api et le site
//             setErrorData(true) //si il y a une erreur alors changement de l'état l'erreur en true 
//             console.log('erreur')});
//     },[IDData]) // a chaque fois que IDData change
//     function SearchDetailEvent(){ // affiche l'évenement en détail
//         setDisplayEventDetail(true)
//         setActive(!isActive);
//         // console.log(favotitesEventsID);
//     }
//     const CloseDetailEvent = () => { // ferme l'évenement en détail
//         setDisplayEventDetail(false) 
//         setActive(!isActive);
//       }
//     // useEffect(() =>{
//     //     JSON.parse(locale).map((eventdata) =>{ 
//     //         const request = axios.get(URL+eventdata)
//     //         axios.all([request])
//     //                 .then(
//     //                     axios.spread((...responses) => {
//     //                         responses.map((response) =>{
                                
//     //                             setEventData(response)
//     //                             console.log(eventData);
//     //                         })
//     //                         // use/access the results
                            
//     //                       })
//     //                     )
//     //             // console.log(eventdata);  
    
//     //                 },[]) }) 
        
//     return (
//         <div className="favorite-event">

//             {  eventData.fields  &&
                
//             <div>
//                 <h3 onClick={SearchDetailEvent} key={"title"+eventData.id}>{eventData.fields.title}</h3>
//                 <div  className="event-content">
//                     <img key={"img"+eventData.id} src={eventData.fields.cover.url} alt={eventData.fields.cover.filename}/>
//                     <ul>
//                         <li key={"title"+eventData.id}>{eventData.fields.title}</li>
//                         <li key={"date-start"+eventData.id}>Débute le : {eventData.fields.date_start}</li>
//                         <li key={"date-end"+eventData.id}>Termine le : {eventData.fields.date_end}</li>
//                     </ul>
//                 </div>
//                 <ManageFavorite id ={eventData.id} />
//             </div>  
//             }
//             {displayEventDetail &&
//                 <DetailCard event={eventData} onClose={CloseDetailEvent} />
//             }
            
//             {errorData &&
//                 <ErrorData />
//             }
        
//             </div>  

//     );
// };

// export default DisplayFavorite;