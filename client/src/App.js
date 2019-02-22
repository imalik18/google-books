import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchPage from './components/SearchPage/SearchPage';
import SavePage from './components/SavePage/SavePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div>
          <Navbar/>

          <Route exact path="/" component={SearchPage} />
          <Route exact path="/save" component={SavePage} />

    
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
