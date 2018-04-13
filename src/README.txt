Tic-Tac-Toe

Author: Adam Shinohara

I created this Tic-Tac-Toe project in react. The design of this web-application includes a 
gameboard that can be clicked on to make a move for the current player, a header to display the application
name, a header to display what players turn it is, a message that displays the game result, and a button to go 
from the current game state to a new game state. I choose to use react so that eventually websockets could be 
implemented in Node; however, due to the time constraints of this project and other school and interview 
commitments, websockets were not implemented. 

I included the elements described above, because I determined that they are the minimum elements to play
a game of tic-tac-toe. My code works by having a board state and the game logic in the App.js file, these
handle the logical elements for a game of tic-tac-toe. I seperated the new game button and message function
into seperate files for usability in react and readibility. 

Design Process: Before implementing this project I had never used react or writeen any javascript, html, or css
code. Therefore, after downloading and setting up a project in react, I began learning basic elements in 
each of these 3 languages so that I could create my tic-tac-toe application. To do this I layed out what
elements that I would need for my applications, such as a gameboard, and then went about learning the 
necessary syntax and methods to implement those elements (this mainly consisted of learning the basics
in javascript). One of the last elements I was not able to set up for my project was websockets. If I were to
implement these, I would set up a server that contained the state of the game board, and then have two
clients connect to this server and sign in. Any moves that the clients made that altered the state of the
game board on the server would then be broadcasted to both clients through the websockets. 