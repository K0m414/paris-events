import './App.css';
import Home from './views/Home';
import NotFound from './views/NotFound';
import SearchEvents from './views/SearchEvents';
import Event from './views/Event';
import Favorites from './views/Favorites';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';


function App() {
  return(
    <div className="page">
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recherche-des-evenements" exact component={SearchEvents} />
        <Route path="/vos-favoris" exact component={Favorites} />
        <Route path="/evenement/id=" exact component={Event} /> 
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
