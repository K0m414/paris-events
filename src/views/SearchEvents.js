import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import ErrorData from '../components/ErrorData';
import "./css/SearchEvents.css"

const SearchEvents = () => {

    const [datas, setDatas] = useState([]);
    const [errorData, setErrorData] = useState(false);
    const [errorTerm, setErrorTerm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const URL="https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=10&search="
  
    useEffect(() =>{
        axios.get(URL)
        .then((response) =>setDatas(response.data.records))
        .catch(e => {
            setErrorData(true)
            console.log('erreur')});
    }, [])

    const Reload = () => {
        axios.get(URL+searchTerm)
        .then((response) =>setDatas(response.data.records))
        .catch(e => {
            setErrorData(true)
            console.log('erreur')});
            ErrorTermCheck();
    };
    const ErrorTermCheck = ()=>{
        if([] && datas.length){
         setErrorTerm(true)
        }
     };
     
    const handleSearchTerm = (e) =>{
        let value = e.target.value;
        setSearchTerm(value)
    };
 
    return (        
        <div className="main-content">
            <h1>La liste des événements</h1>
            <div className="search">
                <input placeholder= "Rechercher un événement" type='search' onInput = {handleSearchTerm} className='searchTermInput'/>
                <button className="search-button" onClick={Reload}>Rechercher</button>
            </div>
            <div className="event-card">
                {datas
                .map((eventdata)=>{
                    // console.log(eventdata.record.id);
                    return(
                        
                        <div className="div" key={eventdata.record.id} >
                            <Card eventdata={eventdata} />
                        </div>
                    )
                })
                }
            </div>
            {errorTerm &&
                <div className="error-term">
                    <p>Aucun événement ne correspond a votre recherche. Veuillez réessayer avec un autre mot.</p>
                </div>
            }
            {errorData &&
            <ErrorData />
            }
        </div>
    
    );


}
export default SearchEvents;