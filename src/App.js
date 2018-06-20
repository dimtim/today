import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  startDate = new Date('2018-06-14T00:00:00.000Z');

  addDays(days) {
    let day = new Date();
    day.setDate(day.getDate() + days);
    return day >= this.startDate ? day.toLocaleDateString('ru') : '';
  }

  render() {
    return (
      <div className="App">
        <div>Dates:</div>
        <div>{this.addDays(-1)}</div>
        <div>{this.addDays(-2)}</div>
        <div>{this.addDays(-5)}</div>
        <div>{this.addDays(-10)}</div>
        <div>{this.addDays(-20)}</div>
        <div>{this.addDays(-60)}</div>
      </div>
    );
  }
}

export default App;
