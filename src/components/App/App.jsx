import React, { Component } from 'react';
import TaskList from "../TaskList/TaskList";
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="main-container">
            <TaskList />
        </div>
    );
  }
}

export default App;
