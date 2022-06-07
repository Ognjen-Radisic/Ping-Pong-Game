function movePlayer(e) {
	let player1 = this.getNode("player-1");
	let player2 = this.getNode("player-2");

	//If W is Clicked then player1 will move in left direction
	if (e.keyCode == 87) {
		player1.y = player1.y > 0 ? player1.y - player1.height / 12 : player1.y;
		if (player1.y < 0) player1.y = 0;
	}

	//If S is Clicked then player2 will move in Right direction
	if (e.keyCode == 83) {
		player1.y =
			player1.y + player1.height < this.height
				? player1.y + player1.height / 12
				: player1.y;
		if (player1.y + player1.height > this.height)
			player1.y = this.height - player1.height;
	}

	//If Up Arrow is Clicked then player2 will go up
	if (e.keyCode == 38) {
		player2.y = player2.y > 0 ? player2.y - player2.height / 12 : player2.y;
		if (player2.y < 0) player2.y = 0;
	}

	//If Down Arrow is Clicked then player2 will move down
	if (e.keyCode == 40) {
		player2.y =
			player2.y + player2.height < this.height
				? player2.y + player2.height / 12
				: player2.y;
		if (player2.y + player2.height > this.height)
			player2.y = this.height - player2.height;
	}
}
