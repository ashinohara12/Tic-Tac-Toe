//If the game ends in a win display this message
//if not have this message remain invisible
import React, { Component } from 'react';
import './Wins.css';

export default class Wins extends Component {
  render() {
    return (
      <div className = {this.state.winsPlayer1 ? 'visible' : 'hidden'}>
        <h3>"The Winner is {this.props.winsPlayer1}"</h3>
      </div>
    )
  }
}
