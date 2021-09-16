import "./css/DetailCard.css"
import EventServices from '../services/EventServices';
import ManageFavorite from "./ManageFavorite";

const DetailCard = ({event, onClose}) => {
    // donnée envoyé par les'parents'
    const eventID = event.id; 
    const EventData = event;

    return(
        <div className="main-content">
            {EventData &&
            <div>
            <div className="overlay"></div>
                <div className="detail-card">
                    <button className="close-detail" onClick={() =>  onClose()}>Fermer</button>
                    <h1>{EventData.fields.title}</h1>
                    <div  className="event-detail">
                        <img key={"img"+eventID} src={EventData.fields.cover.url} alt={"image de "+EventData.fields.cover_alt}/>
                        <div className="event-description">
                            <h4>Description : </h4>
                            <p dangerouslySetInnerHTML={{ __html: EventData.fields.description }}></p>
                        </div>
                            <div className="event-infos">
                                <h4>Dates : </h4>
                                <p>Du {EventServices.LocalDate(EventData.fields.date_start)} au {EventServices.LocalDate(EventData.fields.date_end)}</p>
                                <h4>Prix : </h4>
                                    <p>{EventData.fields.price_detail}</p>
                                <h4>S'y rendre : </h4>
                                <h5>Adresse : </h5>
                                    <ul className="address">
                                        <li key={"address_name"+eventID}>{EventData.fields.address_name}</li>
                                        <li key={"address_street"+eventID}>{EventData.fields.address_street}</li>
                                        <li key={"address_zipcode"+eventID}>{EventData.fields.address_zipcode} {EventData.fields.address_city}</li>
                                    </ul>      
                                <h5>En transport : </h5>
                                <p>{EventData.fields.transport}</p>
                                <h4>Plus d'info : </h4>
                                    <ul>
                                        <li key={"contact_phone"+eventID}>{EventData.fields.contact_phone}</li>
                                        <li key={"contact_mail"+eventID}>{EventData.fields.contact_mail}</li>
                                        <li key={"contact_twitter"+eventID}>{EventData.fields.contact_twitter}</li>
                                        <li key={"contact_facebook"+eventID}>{EventData.fields.contact_facebook}</li>
                                        
                                    </ul>
                            </div>
                        </div>
                    <ManageFavorite id ={eventID} />
                    </div>
                    </div>}
            
            </div>  
    )
    
    };
    
export default DetailCard;