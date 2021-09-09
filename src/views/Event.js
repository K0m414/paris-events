// import axios from 'axios';
import React from 'react';
import Navbar from '../components/Navbar';

const event = () => {
    // const [event,setEvent] = useState('');
    // const URL = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=date_start&limit=1&pretty=false&timezone=UTC"

    // useEffect(() =>{
    //     axios.get(URL)
    //     .then((response) =>console.log(response.data.records[0].record));
    // },[])
    
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default event;