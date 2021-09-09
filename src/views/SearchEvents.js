import React, { useEffect, useState } from 'react';
// import EventsData from '../components/EventsData';
import Navbar from '../components/Navbar';

const SearchEvents = () => {
    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() =>{
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records')
        .then(response => response.json())
        .then(json => setDatas(json.records[0].record))
    }, [])
    

    const handleSearchTermClick = (e) =>{
        e.preventDefault()
        let value = e.target;
        console.log(value);
    };
    console.log(searchTerm)
    console.log(datas)
    
    return (
        
        <div>
            <Navbar />
            <h1>La liste des événements</h1>
            <form>
                <label>Rechercher un évément par titre</label>
                <input type='search' className='input'/>
                <input type="submit" onClick = {handleSearchTermClick}  value="Rechercher"/>
            </form>
             <div>
                {/* {datas
                // .filter((eventdata) => {
                //      return eventdata.title.includes(searchTerm);
                // })

                // .map((eventdata)=>{
                //     return(
                //         <div key={eventdata.id} >
                //             {eventdata.title}
                //         </div>
                //         )
                   
                // })    
            } */}
            </div> 
        </div>
    );


}
export default SearchEvents;