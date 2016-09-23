'use strict';
function Menu() {
}

Menu.prototype = {
	preload: function () {

	},
	create: function () {
		var style = { font: '65px Futura', fill: '#ffffff', align: 'center'};
		this.logo = this.game.add.sprite(this.game.world.centerX, 260, 'obst_diamond0');
		this.logo.anchor.setTo(0.5, 0.5);

		this.titleText = this.game.add.text(this.game.world.centerX, 540, 'EGG', style);
		this.titleText.anchor.setTo(0.5, 0.5);

		this.game.add.tween(this.logo.scale).to({x: 1.2, y: 1.2}, 30, Phaser.Easing.Cubic.Out, false, 0)
			.to({x: 1, y: 1}, 450, Phaser.Easing.Cubic.In)
			.loop()
			.start();
	},
	update: function () {
		if (this.game.input.activePointer.justPressed()) {
			this.game.state.start('play');
		}
	}
};

module.exports = Menu;
