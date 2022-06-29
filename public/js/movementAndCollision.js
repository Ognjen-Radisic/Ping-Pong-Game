const movementAndCollision = {
	movePlayer: function (player, time) {
		if (player.up) {
			player.y -= time * player.speed;
			if (player.y < 0) player.y = 0;
		}
		if (player.down) {
			player.y += time * player.speed;
			if (player.y + player.height > app.height)
				player.y = app.height - player.height;
		}
	},

	moveBall: function (ball) {
		ball.x += ball.velocityX * ball.speed;
		ball.y += ball.velocityY * ball.speed;
	},

	checkHasBallHitBoundary: function (ball) {
		if (ball.y + ball.r >= app.height || ball.y - ball.r <= 0) {
			if (ball.y - ball.r < 0) {
				ball.y = ball.r;
			}
			if (ball.y + ball.r >= app.height) {
				ball.y -= ball.r;
			}
			ball.velocityY = -ball.velocityY;
		}
	},
	checkHasPlayerScored: function (ball) {
		if (ball.x - ball.r < 0 || ball.x + ball.r > app.width)
			utils.givePlayerPoint(ball, utils.getPlayerThatScored(ball));
	},

	checkBallPlayerCollision: function (ball) {
		const playerInCollision = utils.getPlayerInCollision(ball);
		if (utils.collision(ball, playerInCollision)) {
			// we check where the ball hits the paddle
			let collidePoint =
				ball.y - (playerInCollision.y + playerInCollision.height / 2);
			// normalize the value of collidePoint, we need to get numbers between -1 and 1.
			// -player.height/2 < collide Point < player.height/2
			collidePoint = collidePoint / (playerInCollision.height / 2);

			// when the ball hits the top of a paddle we want the ball, to take a -45degrees angle
			// when the ball hits the center of the paddle we want the ball to take a 0degrees angle
			// when the ball hits the bottom of the paddle we want the ball to take a 45degrees
			// Math.PI/4 = 45degrees
			let angleRad = (Math.PI / 4) * collidePoint;

			// change the X and Y velocity and X direction
			let direction = ball.x + ball.r < canvas.width / 2 ? 1 : -1;
			ball.velocityX = direction * ball.speed * Math.cos(angleRad);
			ball.velocityY = ball.speed * Math.sin(angleRad);

			// speed up the ball every time a paddle hits it.
			ball.speed += 0.1;
		}
	},
};
