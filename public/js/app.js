var app = {
	//initial variables
	canvas: null,
	context: null,

	//resizing (values are dynamically changed in resize func)
	width: null,
	height: null,

	//nodes
	nodes: [],

	//timing
	timestamp: 0,
	now: 0,
	lastUpdate: 0,

	// it can be START, PAUSE, RESTART
	gameState: "START",

	init: function () {
		this.canvas = document.getElementById("canvas");
		this.context = this.canvas.getContext("2d");

		this.render();
		this.onInit();
	},
	render: function () {
		this.clear();
		this.update();

		window.requestAnimationFrame(this.render.bind(this));
	},
	clear: function () {
		this.context.clearRect(0, 0, this.width, this.height);
	},
	update: function () {
		var dt = Date.now() - this.lastUpdate;

		this.onUpdate(dt);

		for (var index in this.nodes) {
			var node = this.nodes[index];
			this.context.fillStyle = node.color;

			//draw rectangles for players
			if (node.id === "ball") {
				this.context.beginPath();
				this.context.arc(node.x, node.y, node.r, 0, Math.PI * 2, true);
				this.context.closePath();
				this.context.fill();
			}
			//draw circle for ball
			else {
				this.context.fillRect(node.x, node.y, node.width, node.height);
			}
		}

		this.lastUpdate = Date.now();
		this.timestamp += dt;
	},
	getNode: function (id) {
		for (var index in this.nodes) {
			var node = this.nodes[index];

			if (node.id == id) {
				return node;
			}
		}

		return { x: null, y: null, width: null, height: null };
	},

	//events
	onInit: function () {},
	onUpdate: function () {},
	pause: function () {},
	reset: function () {},

	//resize canvas, to fit the screen
	resize: function () {
		this.width = window.innerWidth - 60;
		this.height = this.width / 2;
		canvas.width = this.width;
		canvas.height = this.height;
	},
};

window.addEventListener("resize", app.resize);

window.onload = function () {
	app.resize();
	app.init();
};
