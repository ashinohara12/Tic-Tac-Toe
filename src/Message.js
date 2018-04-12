//If the game ends in a win display this message
//if not have this message remain invisible
import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  render() {
    return (
      <div className = {this.props.won ? 'visible' : 'hidden'}>
        <h2>The Winner is {this.props.won}</h2>
      </div>
    )
  }
}
