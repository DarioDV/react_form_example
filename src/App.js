import React, { Component } from 'react';
import './App.css';

let values = [];
class App extends Component { 
  constructor(props) {
    super(props);
  //default state 
    this.state = 
    { Name : '', 
      LastName : '', 
      Name_Last : ''};
  }
  handleNameChange(event){
    this.setState({Name: event.target.value});
  }
  handleLastNameChange(event){
    this.setState({LastName: event.target.value});
  }
  handleNameCognome(){
    var fullName = this.state.Name + ' ' + this.state.LastName;
    this.setState({Name_Last : fullName});   
    values.push(fullName);   
    console.log({values});
  }

  render() { 
    let listItems = values.map((values) => <p>{values}</p>);
   
  return (
  <div className="App">
      <header className="App-header">
      <h1 >Welcome on User List </h1>
      </header>
      <h2>Please, insert your data.. </h2>
        <hr/>
        <p>
        <label>Name:   </label>
        <input type="text" value = {this.state.Name} onChange={this.handleNameChange.bind(this)}/>
        <br/>
        </p>
        <p>
        <label>Last Name: </label>
        <input type="text" value = {this.state.LastName} onChange={this.handleLastNameChange.bind(this)}/>
        <br/>
        </p>
        <button type="button" title="Invia" onClick={this.handleNameCognome.bind(this)}>Invia i dati</button> 
        <hr/>   
        <h3>Hi ...  {this.state.Name_Last}, Welcome ! </h3>
                <hr/>
                <br/>
                <h3>Previous users' list {listItems}</h3>
  </div>
    );
  }
}
export default App;
