import React from 'react';

const DetailCard = (props) => {
    const eventdata = props.eventdata;
    // console.log(eventdata.fields.title);

    return(
        <div className="main-content">
            <h1 key={"title"+eventdata.id}>{eventdata.fields.title}</h1>
            <div  className="event-content">
                <img key={"img"+eventdata.id} src={eventdata.fields.cover.url} alt={eventdata.fields.cover.filename}/>
                <ul>
                    <li key={"title"+eventdata.id}>{eventdata.fields.title}</li>
                    <li key={"date-start"+eventdata.id}>Débute le : {eventdata.fields.date_start}</li>
                    <li key={"date-end"+eventdata.id}>Termine le : {eventdata.fields.date_end}</li>
                    
                    <li key={"description"+eventdata.id}>Description :
                        <div dangerouslySetInnerHTML={{ __html: eventdata.fields.description }}>
                        </div>
                    </li>
                </ul>
            </div>
            <button className="btn">Favoris</button>
            </div>  

    )
    
    };
    

export default DetailCard;