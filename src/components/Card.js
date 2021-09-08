import React from 'react';

const Card = (props) => {
    const eventdata = props.eventdata;
    console.log(eventdata);

    return(
        <div className="card">
            <img src={eventdata.cover}/>
            <ul>
                <li>{eventdata.title}</li>
                <li>{eventdata.address_street} </li>
                <li>{eventdata.description} </li>
            </ul>
        </div>
    )
    
    };
    

export default Card;