import React, { Component } from 'react';
import logo from './logo-giotto.png';
import DT from './logoDT.png';
import './App.css';

// we put fake data outside our component
const users = ['Simone', 'Dario', 'Michele', 'Laura'];

class App extends Component { 

  // state is not linked to props, so it can be initialized here
  // and we can avoid using the constructor
  state = {
	number: 0
  };
  
  // always use an argument name which can be understood
  // by people reading your code. Using "buttonNumber" is more
  // expressive than "x"
  handleClickButton = (userNumber) => this.setState({ number: buttonNumber });
  
  // this function deals with rendering the correct image for each user
  // using the number to indentify it
  populateUserImage = (userNumber) => {
	switch (userNumber) {
		case 1:
			return <img src={DT} className="App-logo" alt="logo" />;
		case 2:
			return <img src={DT} className="App-logo" alt="logo" />;
		case 3:
		default:
			return null;
	}
  }

  // this function deals with rendering the correct description for each user
  // using the number to identify it
  populateUserDescription = (userNumber) => {
  	switch (userNumber) {
		case 1:
			return <small>Dario Della Vecchia <br/> Front-End <br/> test@almaviva.it <br/></small>;
		case 2:
			return <small>Michele Curci <br/> Back-End <br/> test@almaviva.it <br/></small>;
		case 3:
			return <small>Simone Marzoli <br/> Full-Stack <br/> test@almaviva.it <br/></small>;
		default:
			return null;
	}
  }
	
  // this function is called inside render
  renderUsers = () => {
	return users.map((user, index) => (
			<div className="App-p">
				<p>{this.populateUserImage(index)} {this.populateUserDescription(index)}</p>
				<button type="button" className="App-button" title="Mostra info dipendente" onClick={() => this.handleClickButton(index)}>{user}</button>
			</div>
		);
	)
  }
  
  render() { 

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Pagina Presentazione dei dipendenti AlmavivA <br /> Progetto Giotto</h1>
			</header>    
          
			<h1 className="App-intro">Benvenuto nella pagina di presentazione del progetto Giotto Almaviva<br/></h1>
			<p className="App-body">
				Basata su componenti OpenSource fruibile on-premises e in as-a-Service, che abilita la realizzazione di qualsiasi applicazione IoT partendo da un sistema di Back-End già disponibile e integrato in tutte le sue componenti (Advanced Analytics, Rules Engine, Message Broker, IAM).<br/>
				Maggiori info su <a href="http://giotto.almaviva.it/">AlmavivA Giotto</a>
			</p>
			<div className="App-div">
				{this.renderUsers()}
			</div>
		</div>
    );
  }
}

export default App;
