// field positions
function FIELD_CENTER_X_AXIS() {
	return app.width / 2;
}
function FIELD_CENTER_Y_AXIS() {
	return app.height / 2;
}

//ball
function BALL_RADIUS() {
	return app.width / 70;
}
function BALL_SPEED() {
	return app.width / 360 < MIN_BALL_SPEED ? MIN_BALL_SPEED : app.width / 360;
}
function INIT_BALL_VELOCITY_X() {
	return utils.getDirection() * 3;
}
function INIT_BALL_VELOCITY_Y() {
	// number between -1.7 and 1.7
	return (Math.random() + 0.7) * utils.getDirection();
}

//players
function PLAYER_WIDTH() {
	return app.width / 45;
}
function PLAYER_HEIGHT() {
	return app.height / 4;
}
function PLAYER_SPEED() {
	return app.height / 1000;
}
function PLAYER_X_POS() {
	return app.width / 45;
}
function PLAYER_Y_POS() {
	return app.height / 4;
}
function PLAYER_SCORE_Y_POS() {
	return app.height / 8;
}

//text getters
function PAUSED_TITLE_Y_AXIS() {
	return app.height / 3.2;
}
function PAUSED_SUBTITLE_Y_AXIS() {
	return app.height / 2.55;
}
function RESTART_TEXT_Y_AXIS() {
	return (app.height * 9) / 10;
}

//fonts
function SMALL_FONT() {
	return app.width / 45;
}
function MEDIUM_FONT() {
	return app.width / 30;
}

function LARGE_FONT() {
	return app.width / 15;
}
