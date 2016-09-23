'use strict';
function Play() {
}
Play.prototype = {
	create: function () {
		this.obstacles = this.game.add.group();

	},
	update: function () {

	}
};

module.exports = Play;