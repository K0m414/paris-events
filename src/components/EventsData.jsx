import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Card from './Card';

const EventsData = () => {
    const[data, setData] = useState([]);
    const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=date_start&limit=1&pretty=false&timezone=UTC"

    useEffect(() =>{
        axios.get(URL)
        .then((response) =>setData(response.data.records[0].record));
        
    },[])
  
    // console.log(data);
    return (
        <div>

            {   data.fields &&

            <div>
                <img src={data.fields.cover.url} alt={data.fields.cover.filename}/>
                <ul>
                    <li>{data.fields.title}</li>
                    <li>Débute le : {data.fields.date_start}</li>
                    <li>Termine le : {data.fields.date_end}</li>
                    <li>Description : {data.fields.description}</li>
                    
                </ul>
                <p>{data.id}</p>
                <button>Favoris</button>
            </div> 
            }
        </div>
    );
};

export default EventsData;