import React, { Component } from 'react';
import './App.css';

class App extends Component { 
  constructor(props) {
    super(props); 
   } 
   state = 
    { users: [],
      name : '', 
      surname : ''
     };
  
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }); 
   }

  handleSubmit = (event) => {
    event.preventDefault();
    const fullName = this.state.name + ' ' + this.state.surname;
    const Updatefullnames = [...this.state.users,fullName];
    this.setState({users: Updatefullnames, name: '', surname: ''});
    console.log({Updatefullnames}); //console log   
  }

  render() { 
    const fullnames = this.state.users.map((user) => <li>{user}</li>);

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
            <input type="text" name="name" value = {this.state.name} onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
            Last Name: 
            <input type="text" name="surname" value = {this.state.surname} onChange={this.handleChange}/>
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        <hr/>   
      <h3>Hi ...  {this.state.users[this.state.users.length -1]}, Welcome ! </h3>
      <hr/>
      <br/>
      <ul>Previous users' list {fullnames}</ul>
  </div>
    );
  }
}
export default App;