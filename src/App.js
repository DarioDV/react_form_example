import React, { Component } from 'react';
import './App.css';

let users = [];
class App extends Component { 
  constructor(props) {
    super(props);
  //default state 
    this.state = 
    { 
      name : '', 
      surname : '' 
     };
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this); 
  }
  
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }); 
   }

  handleSubmit(event){
    event.preventDefault();
    const fullName = this.state.name + ' ' + this.state.surname;
    users = [...users, fullName]; // spread operator
    this.setState({name: '', surname: ''}); //clear
    console.log({users}); //console log   
  }

  render() { 
    let listItems = users.map((users) => <li>{users}</li>);
   
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
          <input type="text" name="name" value = {this.state.Name} onChange={this.handleChange}/>
          </label>
        <br/>
          <label>
            Last Name: 
            <input type="text" name="surname" value = {this.state.LastName} onChange={this.handleChange}/>
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