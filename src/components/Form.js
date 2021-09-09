import React from "react";

export default class Form extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
      e.preventDefault();
      var title = this.title.value;
      console.log(title);

  }

  render(){
    
      return(
          <div>

            <form className="form">
              <label>Rechercher un évément par titre</label>
              <input type="text" className="input-value" ref={(c) => this.title = c} name="title" />
            </form>

      <button type="button" onClick={this.onSubmit} className="btn">Rechercher</button>
          </div>
      )
  }

};
