import './App.css';
// import Navbar from './components/Navbar';
// import Data from './components/Data';
import Home from './views/Home';
import NotFound from './views/NotFound';
import SearchEvents from './views/SearchEvents';
import Event from './views/Event';
import Favorites from './views/Favorites';
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recherche-des-evenements" exact component={SearchEvents} />
        <Route path="/vos-favoris" exact component={Favorites} />
        <Route path="/evenement" exact component={Event} /> {/* mettre id de l'evenement => `evenement${id}` */}
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
