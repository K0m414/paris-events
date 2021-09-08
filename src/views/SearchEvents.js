import React from 'react';
import EventsData from '../components/EventsData';
import Navbar from '../components/Navbar';

const SearchEvents = () => {
    class MyComponent extends React.Component {

        constructor(props){
            super(props);
            this.onSubmit = this.onSubmit.bind(this);
          }
        render(){
    return (
        <div>
            <Navbar />
            <h1>La liste des événements</h1>
            <form>
                <input type='search' className='input'/>
                <input type="submit"  value="Rechercher" onClick={this.onSubmit} />
            </form>
            <EventsData />
        </div>
    );
};
}

}
export default SearchEvents;