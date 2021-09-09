import React from 'react';
import "./css/Card.css"

const Card = (props) => {
    const eventdata = props.eventdata;
    console.log(eventdata.record.fields.title);

    return(
        <div className="event-card">
        <div className="card">
        <h3 key={"title"+eventdata.record.id}><a href="ghf">{eventdata.record.fields.title}</a></h3>
            <img key={"img"+eventdata.record.id} src={eventdata.record.fields.cover.url} alt={eventdata.record.fields.cover.filename}/>
            <ul>
                    <li key={"date-start"+eventdata.record.id}>Débute le : {eventdata.record.fields.date_start}</li>
                    <li key={"date-end"+eventdata.record.id}>Termine le : {eventdata.record.fields.date_end}</li>
                    <li key={"description"+eventdata.record.id}>Description :
                        <div dangerouslySetInnerHTML={{ __html: eventdata.record.fields.description }}></div>
                    </li>
                    
                </ul>

            <button>Favoris</button>
        </div>
        </div>
    )
    
    };
    

export default Card;