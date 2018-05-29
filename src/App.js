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
  
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleLastNameChange= this.handleLastNameChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this); 
  }
  
  handleNameChange(event){
    this.setState({Name: event.target.value});
  }
  handleLastNameChange(event){
    this.setState({LastName: event.target.value});
  }
  handleSubmit(event){
    var fullName = this.state.Name + ' ' + this.state.LastName;
    this.setState({Name_Last : fullName});
    values = values.concat(fullName);
    console.log({values});
    event.preventDefault();
  }

  render() { 
    let listItems = values.map((values) => <li>{values}</li>);
   
  return (
  <div className="App">
      <header className="App-header">
      <h1 >Welcome on User List </h1>
      </header>
      <h2>Please, insert your data.. </h2>
        <hr/>
        <form onSubmit={this.handleSubmit} >
          <label>
            Name: 
          <input type="text" value = {this.state.Name} onChange={this.handleNameChange}/>
          </label>
        <br/>
          <label>
            Last Name: 
            <input type="text" value = {this.state.LastName} onChange={this.handleLastNameChange}/>
          </label>
        <br/>
        <input type="submit" value="Submit" />
        </form>

        <hr/>   
        <h3>Hi ...  {this.state.Name_Last}, Welcome ! </h3>
                <hr/>
                <br/>
                <ul>Previous users' list {listItems}</ul>
  </div>
    );
  }
}
export default App;
