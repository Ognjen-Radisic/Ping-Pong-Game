# Ping Pong - Game

Check it out LIVE : [Pong The Game](https://pong-game-oradisc.netlify.app/)

## Run on local machine

Clone repository.
Run script `npm install` to install node_modules.
Start local server with `node index.js`.
Go to http://localhost:3000/

## Todo

- [x] Make the game cover the whole browser
- [x] Add keyboard functionalities for both players, W and S for one player, Up and Down for another player.
- [x] Add players into canvas, make them moveable with keyboard.
- [x] Add ball to the game, make sure ball bounces from boundaries.
- [x] When player scores, increment player score by 1 point on their side of the field. Save it in a state, and roll a new ball after short duration.
- [x] Make sure game has state functions like reset and pause.
- [x] Pressing `SPACE` button should start and pause game and pressing `R` will reset score and ball position when game is in paused state.
- [x] Make sure players and ball dimensions are using app.width and app.height values dynamically.

## Bonus Todo

- [x] Add draw text functionality to the engine.
- [x] Add score system for the game and use this drawText functionality on game.
- [x] Add resize function the engine. With window.resize
- [x] Make the ball round
