import React, { Component } from 'react';
import Weather from "../Weather/Weather";

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Weather />
            </div>
        );
  }
}

export default App;
