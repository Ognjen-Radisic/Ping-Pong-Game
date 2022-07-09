const utils = {
	collision: function (ball, player) {
		return (
			player.x < ball.x + ball.r &&
			player.y < ball.y + ball.r &&
			player.x + player.width > ball.x - ball.r &&
			player.y + player.height > ball.y - ball.r
		);
	},
	resetBall: function (ball) {
		ball.x = FIELD_CENTER_X_AXIS();
		ball.y = FIELD_CENTER_Y_AXIS();
		ball.speed = BALL_SPEED();
		ball.velocityX = INIT_BALL_VELOCITY_X();
		ball.velocityY = INIT_BALL_VELOCITY_Y();
	},

	getPlayerInCollision: function (ball) {
		const player1 = app.getNode(PLAYER_ONE);
		const player2 = app.getNode(PLAYER_TWO);
		return ball.x < FIELD_CENTER_X_AXIS() ? player1 : player2;
	},

	getPlayerThatScored: function (ball) {
		const player1 = app.getNode(PLAYER_ONE);
		const player2 = app.getNode(PLAYER_TWO);
		return ball.x < FIELD_CENTER_X_AXIS() ? player2 : player1;
	},

	givePlayerPoint: async function (ball, playerThatScored) {
		app.freezeGame = true;
		playerThatScored.score += 1;
		await new Promise((resolve) => setTimeout(resolve, 1500));
		this.resetBall(ball);
		app.freezeGame = false;
	},

	getDirection: function () {
		return Math.random() > 0.5 ? -1 : 1;
	},
};
