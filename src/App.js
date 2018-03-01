import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/getData')
      .then(response => this.setState({people: response.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {this.state.people[0] && 
            this.state.people.map(val => {
              return ( 
                <div className="person-card">
                <p>{val.name}</p>
                </div>
              )
            })
          }
      </div>
    );
  }
}

export default App;
