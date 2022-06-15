function updateMovementControls(e, controls, value) {
	if (e.keyCode == 87) {
		controls.player1Up = value;
	}
	if (e.keyCode == 83) {
		controls.player1Down = value;
	}
	if (e.keyCode == 38) {
		controls.player2Up = value;
	}
	if (e.keyCode == 40) {
		controls.player2Down = value;
	}
}

function pauseGame(e) {
	const notHoldingKeyDown = !e.repeat;

	if (e.keyCode == 32 && notHoldingKeyDown) {
		app.paused = !app.paused;
	}
}

function enableDisablePlayerMovement(controls) {
	let player1 = app.getNode("player-1");
	let player2 = app.getNode("player-2");

	player1.up = controls.player1Up;
	player1.down = controls.player1Down;
	player2.up = controls.player2Up;
	player2.down = controls.player2Down;
}

//make players move in game loop if their movement is enabled
function movePlayer(player, time) {
	if (player.up) {
		player.y -= time * player.speed;
		if (player.y < 0) player.y = 0;
	}

	if (player.down) {
		player.y += time * player.speed;
		if (player.y + player.height > app.height)
			player.y = app.height - player.height;
	}
}

function collision(ball, player) {
	player.top = player.y;
	player.bottom = player.y + player.height;
	player.left = player.x;
	player.right = player.x + player.width;

	ball.top = ball.y - ball.r;
	ball.bottom = ball.y + ball.r;
	ball.left = ball.x - ball.r;
	ball.right = ball.x + ball.r;

	return (
		player.left < ball.right &&
		player.top < ball.bottom &&
		player.right > ball.left &&
		player.bottom > ball.top
	);
}

function drawPausedTitle() {
	app.context.font = `bold ${app.width / 14}px sans-serif`;
	app.context.fillStyle = "black";
	app.context.textAlign = "center";
	app.context.textBaseLine = "middle";
	app.context.fillText("Game Paused", app.width / 2, app.height / 4);
}
function drawPausedSubtitle() {
	app.context.font = `${app.width / 30}px sans-serif`;
	app.context.fillStyle = "black";
	app.context.textAlign = "center";
	app.context.textBaseLine = "middle";
	app.context.fillText(
		"press 'SPACE' to continue",
		app.width / 2,
		app.height / 2.9
	);
}
