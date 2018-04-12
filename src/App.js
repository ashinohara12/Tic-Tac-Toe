// Author: Adam Shinohara
//The point of this project is to create a Tic-Tac-Toe web application
//Eventually this project will involve websokets so that moves can
//be broadcasted to opponents and two players can sign in. However,
//websockets have not yet been yet implemented at this point.
//Currently this application allows two local users to play
//Tic-Tac-Toe agaisnt each other. This project was developed
//using React

import React, { Component } from 'react';
import './App.css';
import Square from './Square';
import Message from './Message';
import NewGameButton from './NewGameButton';
class App extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        '', '', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ],
      turn: 'x',
      playerTurn: "Player 1: X",
      winsPlayer1: 0,
      winsPlayer2: 0,
      won: null
    }
  }

//This function is called to reset the board for a newgame
newBoard(){
  this.setState({
    gameBoard: [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' ',
    ],
    turn: 'x',
    playerTurn: "Player 1: X",
    won: null
  });
}

  updateBoard(location, player){

    //Check to see if a move is valid or the game is over
    if (this.state.gameBoard[location] ==='x' || this.state.gameBoard[location] ==='o' || this.state.won){
      //Not a valid move
      return;
    }

    let activeGame = this.state.gameBoard;
    activeGame.splice(location, 1, this.state.turn);
    this.setState({gameBoard: activeGame});

    //The following logic is used to check the rows, columns, and diagnals
    //of the game board to see if the game has ended
    let rowOnTop = null;
    for (var i = 0; i<3; i++){
      rowOnTop += this.state.gameBoard[i];
    }

    let rowOnMiddle = null;
    for (i = 3; i<6; i++){
      rowOnMiddle += this.state.gameBoard[i];
    }

    let rowOnBottom = null;
    for (i = 6; i<9; i++){
      rowOnBottom += this.state.gameBoard[i];
    }

    let leftCol = null;
    for (i = 0; i<9; i += 3){
      leftCol += this.state.gameBoard[i];
    }

    let middleCol = null;
    for (i = 1; i<9; i += 3){
      middleCol += this.state.gameBoard[i];
    }

    let rightCol = null;
    for (i = 2; i<9; i += 3){
      rightCol += this.state.gameBoard[i];
    }

    let leftDiagnal = null;
    for (i = 0; i<9; i += 4){
      leftDiagnal += this.state.gameBoard[i];
    }

    let rightDiagnal = null;
    for (i = 2; i<7; i += 2){
      rightDiagnal += this.state.gameBoard[i];
    }

    if (rowOnTop.match(/ooo|xxx/) || rowOnMiddle.match(/ooo|xxx/) || rowOnBottom.match(/ooo|xxx/)
        || leftCol.match(/ooo|xxx/) || middleCol.match(/ooo|xxx/) || rightCol.match(/ooo|xxx/)
        || leftDiagnal.match(/ooo|xxx/) || rightDiagnal.match(/ooo|xxx/)){
      this.setState({won: this.state.playerTurn});
      if (this.state.won === 'Player 1: X'){
        this.setState({winsPlayer1: this.state.winsPlayer1 + 1});
      }
      if (this.state.won === 'Player 2: O'){
        this.setState({winsPlayer2: this.state.winsPlayer2 + 1});
      }
      return;
    }

    //If nine moves have been made then the game has ended in a draw
    let movesMade = this.state.gameBoard.join('').replace(/ /g, '');
    if (movesMade.length === 9){
      this.setState({winner: 'd'});
      this.setState({playerTurn: "Draw"});
    }
    //If a turn has been taken and the game didn't end, then switch \
    //whose turn it is
    else{
    this.setState({turn: (this.state.turn === 'o') ? 'x' : 'o'});
    this.setState({playerTurn: (this.state.playerTurn === "Player 2: O") ? "Player 1: X" : "Player 2: O"});
    }
  }
//render the necessary html elements for the tick tac toe gameboard
  render() {
    return (
      <div className = "contain">
        <div className = "menu">
          <h1>Tic-Tac-Toe</h1>
          <h2>Turn = {this.state.playerTurn}</h2>
          <Message won = {this.state.won}/>
          <NewGameButton reset = {this.newBoard.bind(this)}/>

          </div>
          {this.state.gameBoard.map(function(value, i){
            return(
              <Square
              key={i}
              location={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn}/>
            )
            }.bind(this))}
            {/*
            Was unable to make the below code work correctly due to time
            constraints. I was expecting to use it to display the number
            of wins and losses for each player
            <p id = "p1">Player 1 Wins: {this.props.winsPlayer1}</p>
            <script>
            document.getElementById("p1").append() = "New text!";
            </script>
            <p>Player 2 Wins: {this.props.winsPlayer1}</p>
            */}
        </div>

    );
  }
}

export default App;
