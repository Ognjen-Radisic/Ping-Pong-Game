const drawText = {
	pausedTitle: function () {
		defaultDrawingOptions();
		app.context.font = `bold ${LARGE_FONT()}px sans-serif`;
		app.context.fillText(
			"Game Paused",
			FIELD_CENTER_X_AXIS(),
			PAUSED_TITLE_Y_AXIS()
		);
	},
	pausedSubtitle: function () {
		defaultDrawingOptions();
		app.context.font = `${MEDIUM_FONT()}px sans-serif`;
		app.context.fillText(
			"press 'SPACE' to continue",
			FIELD_CENTER_X_AXIS(),
			PAUSED_SUBTITLE_Y_AXIS()
		);
	},

	restartTitle: function drawRestartCommandOptions() {
		defaultDrawingOptions();
		app.context.font = `${SMALL_FONT()}px sans-serif`;
		app.context.fillText(
			"press 'R' to restart game",
			FIELD_CENTER_X_AXIS(),
			RESTART_TEXT_Y_AXIS()
		);
	},

	playerScore: function (score, xPosition) {
		defaultDrawingOptions();
		app.context.font = `${LARGE_FONT()}px sans-serif`;
		app.context.fillText(
			score.toString(),
			app.width * xPosition,
			PLAYER_SCORE_Y_POS()
		);
	},
};

function defaultDrawingOptions() {
	app.context.fillStyle = "black";
	app.context.textAlign = "center";
	app.context.textBaseLine = "middle";
}
