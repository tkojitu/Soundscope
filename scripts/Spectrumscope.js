import Ascope from "./Ascope.js";

export default class extends Ascope {
	constructor(player, canvasName) {
		super(player, canvasName);
	}

	drawSound(ctx) {
		let data = this.player.getByteFrequencyData();
		ctx.beginPath();
		ctx.moveTo(0,  255 - data[0]);
		for (var i = 0; i < data.length; i++) {
			ctx.lineTo(i * 4, 255 - data[i]); 
		}
		ctx.stroke();
	}
}
