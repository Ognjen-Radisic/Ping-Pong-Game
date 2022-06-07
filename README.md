# Ping Pong - Game

## Run on local machine

Install node_modules with running script `npm install`.
Then, start server with `node index.js`.

## Todo

- Make the game cover the whole browser
- Add keyboard functionalities for both players, W and S for one player, Up and Down for another player.
- Add players into canvas, make sure we can move players with keyboard.
- Add ball to the game, pressing `SPACE` button should start and pause game, make sure ball bounces from boundries.
- When player scores, show scoring with console.log. And reset game.
- Make sure game has state functions like reset, start and pause. We should be able to trigger them with `app.reset()` or `app.pause()`.
- Make sure players or ball uses app.width and app.height values dynamicly,

## Bonus Todo

- Add draw text functionality to the engine. You can modify app.js for that part.
- Add score system for the game and use this drawText functionality on game.
- Add resize function the engine. With window.resize
- Make the ball round
