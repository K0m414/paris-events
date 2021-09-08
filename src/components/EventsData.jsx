import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const EventsData = () => {
    const[data, setData] = useState([]);
    const url = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records"

    useEffect(() =>{
        axios.get(url)
        .then((res) => console.log(res.data.records));
        //console.log(data);

    },[])
    
    return (
        <div>
            {/* <ul>
                {data.map((eventdata)=>(
                    <Card eventdata={eventdata} key={eventdata.name} />
                ))}
                
            </ul> */}
        </div>
    );
};

export default EventsData;