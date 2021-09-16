import React, { useEffect, useState } from 'react';
import StorageService from '../services/StorageService';
import "./css/ManageFavorite.css"
const ManageFavorite = (id) => {
    const [favotitesEventsID, setFavotitesEventsID] = useState(false); // initialise à false
    // const KEY = "parisEventsFavoritesID";
    
        const favoriteButton = () => { // fonction qui permet de vérifier le local storage, d'ajouter et supprimer des événements
            setFavotitesEventsID(!favotitesEventsID); // si le local storage est vide = false et si il y qqch = true 
            let favoriteID = StorageService.getFavorisID(); // récupère la valeur dans le local
                
            if (favoriteID.find(element => element = id )) { //si ID est déjà dans le local storage alors enlève le
                setFavotitesEventsID(false);    //et passer favotitesEventsID a true 
                favoriteID.splice(favoriteID.indexOf(id), 1); 
            }
            
            else { // ID n'est pas déjà dans le local storage alors
                setFavotitesEventsID(true); //passer favotitesEventsID a true 
                favoriteID.push(id); // et ajouter le nouvel ID 
            }
             StorageService.setFavorisID(favoriteID); // met a jour la nouvelle valeur favoriteID
            // StorageService.setFavorisID([...favoriteID, id]); // met a jour la nouvelle valeur favoriteID
             }
             
            useEffect(() => {
            let favoriteID = StorageService.getFavorisID();
            StorageService.setFavorisID(favoriteID); // sauvegarde id dans le local storage 
            }, [id]) 
          
    return (
        <div>
            {/* se declenche au click sur le button */}
            <button className="favorite-button" onClick={favoriteButton}>favoris</button>
        </div>
    );
};

export default ManageFavorite;