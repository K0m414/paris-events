import './App.css';
// import Navbar from './components/Navbar';
// import Data from './components/Data';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Events from './views/Events';
import Event from './views/Event';
import Favoris from './views/Favoris';
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/liste-des-evenements" exact component={Events} />
        <Route path="/favoris" exact component={Favoris} />
        <Route path="/evenement" exact component={Event} /> {/* mettre id de l'evenement => `evenement${id}` */}
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
