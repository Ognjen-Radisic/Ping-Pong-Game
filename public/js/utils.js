function collision(ball, player) {
	return (
		player.x < ball.x + ball.r &&
		player.y < ball.y + ball.r &&
		player.x + player.width > ball.x - ball.r &&
		player.y + player.height > ball.y - ball.r
	);
}

function resetBall(ball) {
	ball.x = app.width / 2;
	ball.y = app.height / 2;
	ball.speed = app.width / 360;
	ball.velocityX = -1;
	ball.velocityY = 1;
}

function getPlayerInCollision(ball) {
	const player1 = app.getNode(PLAYER_ONE);
	const player2 = app.getNode(PLAYER_TWO);
	return ball.x < FIELD_CENTER_X_AXIS() ? player1 : player2;
}

function getPlayerThatScored(ball) {
	const player1 = app.getNode(PLAYER_ONE);
	const player2 = app.getNode(PLAYER_TWO);
	return ball.x < FIELD_CENTER_X_AXIS() ? player2 : player1;
}

async function givePlayerPoint(ball, playerThatScored) {
	app.freezeGame = true;
	playerThatScored.score += 1;
	await new Promise((resolve) => setTimeout(resolve, 1500));
	resetBall(ball);
	app.freezeGame = false;
}
