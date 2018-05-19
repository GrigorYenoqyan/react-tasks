import React, { Component } from 'react';
import StudentsTable from "../StudentsTable/StudentsTable";
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="main-container">
            <StudentsTable />
        </div>
    );
  }
}

export default App;
