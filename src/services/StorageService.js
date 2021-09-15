const KEY = "parisEventsFavoritesID";

const StorageService = {
  getFavorisID() {
    let favoriteID = window.localStorage.getItem(KEY); 
    favoriteID = favoriteID ? JSON.parse(favoriteID) : [];
    return favoriteID;
  },

  setFavorisID(ID) {
    let storedID = window.localStorage.setItem(KEY, JSON.stringify(ID));
    return storedID;
  },
};

export default StorageService;