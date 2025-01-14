const nodes = {
	addBall: function () {
		app.nodes.push({
			id: BALL,
			x: FIELD_CENTER_X_AXIS(),
			y: FIELD_CENTER_Y_AXIS(),
			r: BALL_RADIUS(),
			color: RED,
			speed: BALL_SPEED(),
			velocityX: INIT_BALL_VELOCITY_X(),
			velocityY: INIT_BALL_VELOCITY_Y(),
		});
	},
	addPlayer: function (id, xPos) {
		app.nodes.push({
			id: id,
			x: xPos,
			y: PLAYER_Y_POS(),
			width: PLAYER_WIDTH(),
			height: PLAYER_HEIGHT(),
			color: BLACK,
			speed: PLAYER_SPEED(),
			up: false,
			down: false,
			score: 0,
		});
	},
	addPauseScreenOverlay: function () {
		app.nodes.push({
			id: PAUSE_SCREEN_OVERLAY,
			x: 0,
			y: 0,
			width: app.width,
			height: app.height,
			color: PAUSE_SCREEN_COLOR,
		});
	},
};
