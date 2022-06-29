const initGameStates = {
	removeOldEventListeners: function () {
		document.removeEventListener("keydown", onKeyDownEvents, true);
		document.removeEventListener("keyup", onKeyUpEvents, true);
	},
	addNewEventListeners: function () {
		document.addEventListener("keydown", onKeyDownEvents, true);
		document.addEventListener("keyup", onKeyUpEvents, true);
	},
};

function onKeyDownEvents(e) {
	pauseGame(e);
	restartGame(e);
	updateMovementControlsObject(e, true);
	enableDisablePlayerMovement();
}

function onKeyUpEvents(e) {
	updateMovementControlsObject(e, false);
	enableDisablePlayerMovement();
}

//movementControls object allows simultaneous movement of both player
const controls = {
	player1Up: false,
	player1Down: false,
	player2Up: false,
	player2Down: false,
};

function updateMovementControlsObject(e, value) {
	if (e.keyCode == W_KEY) controls.player1Up = value;
	if (e.keyCode == S_KEY) controls.player1Down = value;
	if (e.keyCode == UP_KEY) controls.player2Up = value;
	if (e.keyCode == DOWN_KEY) controls.player2Down = value;
}

function enableDisablePlayerMovement() {
	let player1 = app.getNode(PLAYER_ONE);
	let player2 = app.getNode(PLAYER_TWO);

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
	let player1 = app.getNode(PLAYER_ONE);
	let player2 = app.getNode(PLAYER_TWO);
	const ball = app.getNode(BALL);
	const notHoldingKeyDown = !e.repeat;

	if (app.paused && e.keyCode == R_KEY && notHoldingKeyDown) {
		player1.score = 0;
		player2.score = 0;
		resetBall(ball);
	}
}
