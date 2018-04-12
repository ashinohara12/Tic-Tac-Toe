//This button is used to reset the game of Tic-Tac-Toe that is being played
import React, { Component } from 'react';
import './Square.css';
export default class Square extends Component {

  squareClick(props){
    props.updateBoard(props.location, props.turn);
  }

  render() {
    return (
      <div className={"square " + this.props.location} onClick={() => this.squareClick(this.props)}>
        <p>{this.props.value}</p>
      </div>
    )
  }
}
