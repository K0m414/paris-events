import './App.css';
import Home from './views/Home';
import NotFound from './views/NotFound';
import SearchEvents from './views/SearchEvents';
import Event from './views/Event';
import Favorites from './views/Favorites';
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  // const id='ed7bf90eb37e980ca5bcc2477e6f3375854c3a51';
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recherche-des-evenements" exact component={SearchEvents} />
        <Route path="/vos-favoris" exact component={Favorites} />
        <Route path="/evenement/id=" exact component={Event} /> {/* mettre id de l'evenement => `evenement${id}` */}
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
