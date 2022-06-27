function drawPausedTitle() {
	defaultDrawingOptions();
	app.context.font = `bold ${app.width / 15}px sans-serif`;
	app.context.fillText("Game Paused", app.width / 2, app.height / 3.2);
}
function drawPausedSubtitle() {
	defaultDrawingOptions();
	app.context.font = `${app.width / 30}px sans-serif`;
	app.context.fillText(
		"press 'SPACE' to continue",
		app.width / 2,
		app.height / 2.55
	);
}

function drawRestartCommandOptions() {
	defaultDrawingOptions();
	app.context.font = `${app.width / 45}px sans-serif`;
	app.context.fillText(
		"press 'R' to restart game",
		app.width / 2,
		(app.height * 9) / 10
	);
}

function drawPlayerScore(score, xPosition) {
	defaultDrawingOptions();
	app.context.font = `${app.width / 15}px sans-serif`;
	app.context.fillText(score.toString(), app.width * xPosition, app.height / 8);
}

function defaultDrawingOptions() {
	app.context.fillStyle = "black";
	app.context.textAlign = "center";
	app.context.textBaseLine = "middle";
}
