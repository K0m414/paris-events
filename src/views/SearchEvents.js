import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import "./css/SearchEvents.css"

const SearchEvents = () => {

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const URL="https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=3&search=" // revoir la limitation
  
    useEffect(() =>{
        axios.get(URL+searchTerm)
        .then((response) =>setDatas(response.data.records));
    }, [searchTerm])

    const handleSearchTerm = (e) =>{
        let value = e.target.value;
        setSearchTerm(value)
    };

    return (
        <div className="page">
            <Navbar />
            
            <div className="main-content">
                <h1>La liste des événements</h1>
                    <input placeholder= "Rechercher un évément par titre" type='search' onChange = {handleSearchTerm} className='searchTermInput'/>
               
                <div className="event-card">
                    {datas
                    .filter((eventdata) => {
                        return eventdata.record.fields.title.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((eventdata)=>{
                        return(
                            <div className="div" key={eventdata.record.id} >
                                <Card eventdata={eventdata} />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        
        </div>
    );


}
export default SearchEvents;