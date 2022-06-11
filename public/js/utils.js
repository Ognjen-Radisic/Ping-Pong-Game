function movePlayer(controls) {
	let player1 = app.getNode("player-1");
	let player2 = app.getNode("player-2");

	//If W is Clicked then player1 will move in left direction
	if (controls.player1Up) {
		player1.y = player1.y > 0 ? player1.y - player1.height / 8 : player1.y;
		if (player1.y < 0) player1.y = 0;
	}

	//If S is Clicked then player2 will move in Right direction
	if (controls.player1Down) {
		player1.y =
			player1.y + player1.height < app.height
				? player1.y + player1.height / 8
				: player1.y;
		if (player1.y + player1.height > app.height)
			player1.y = app.height - player1.height;
	}

	//If Up Arrow is Clicked then player2 will go up
	if (controls.player2Up) {
		player2.y = player2.y > 0 ? player2.y - player2.height / 8 : player2.y;
		if (player2.y < 0) player2.y = 0;
	}

	//If Down Arrow is Clicked then player2 will move down
	if (controls.player2Down) {
		player2.y =
			player2.y + player2.height < app.height
				? player2.y + player2.height / 8
				: player2.y;
		if (player2.y + player2.height > app.height)
			player2.y = app.height - player2.height;
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
