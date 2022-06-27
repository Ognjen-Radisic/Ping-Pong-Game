const W_KEY = 87;
const S_KEY = 83;
const UP_KEY = 38;
const DOWN_KEY = 40;
const SPACE_KEY = 32;
const R_KEY = 82;

function updateMovementControlsObject(e, controls, value) {
	if (e.keyCode == W_KEY) controls.player1Up = value;
	if (e.keyCode == S_KEY) controls.player1Down = value;
	if (e.keyCode == UP_KEY) controls.player2Up = value;
	if (e.keyCode == DOWN_KEY) controls.player2Down = value;
}

function enableDisablePlayerMovement(controls) {
	let player1 = app.getNode("player-1");
	let player2 = app.getNode("player-2");

	player1.up = controls.player1Up;
	player1.down = controls.player1Down;
	player2.up = controls.player2Up;
	player2.down = controls.player2Down;
}

function pauseGame(e) {
	const notHoldingKeyDown = !e.repeat;
	if (e.keyCode == SPACE_KEY && notHoldingKeyDown) app.paused = !app.paused;
}

function restartGame(e) {
	let player1 = app.getNode("player-1");
	let player2 = app.getNode("player-2");
	const ball = app.getNode("ball");
	const notHoldingKeyDown = !e.repeat;

	if (app.paused && e.keyCode == R_KEY && notHoldingKeyDown) {
		player1.score = 0;
		player2.score = 0;
		resetBall(ball);
	}
}
