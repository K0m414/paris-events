import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import ErrorData from '../components/ErrorData';
import "./css/SearchEvents.css"

const SearchEvents = () => {

    const [datas, setDatas] = useState([]);
    const [errorData, setErrorData] = useState(false);
    const [errorTerm, setErrorTerm] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // term dans la barre de recherche
    const URL="https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=10&search="
  
    useEffect(() =>{ // se déclenche va chercher les elements dans l'api
        axios.get(URL)
        .then((response) =>setDatas(response.data.records)) // les elements sont dans datas
        .catch(e => {
            setErrorData(true) //si il y a une erreur alors changement de l'état l'erreur en true 
            console.log('erreur')});
    }, [])

    const Reload = () => { // active au click
        axios.get(URL+searchTerm)
        .then((response) =>setDatas(response.data.records)) // les elements dans datas sont rechargés
        .catch(e => {
            setErrorData(true)
            console.log('erreur')});
            ErrorTermCheck();
    };
    const ErrorTermCheck = ()=>{ // vérifie si plus aucun élément ne correspond a la recherche 
        if(datas.length  === 0){
            // console.log(datas.length)
            setErrorTerm(true)
        }
     };
     
    const handleSearchTerm = (e) =>{ // recupère dans le input le term
        let value = e.target.value;
        setSearchTerm(value) // sa valeur est dans searchTerm
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
                    return(
                        <div className="div" key={eventdata.record.id} >
                            <Card eventdata={eventdata} />
                        </div>
                    )
                })
                }
            </div>
            {/* message apparait des que les evenements recherché sont infirieur a 1o */}
            {errorTerm &&
                <div className="error-term">
                    <p>Plus aucun événement ne correspond a votre recherche. Pour avoir plus de résultats réessayer avec un autre mot.</p>
                </div>
            }
            {errorData &&
            <ErrorData />
            }
        </div>
    
    );


}
export default SearchEvents;