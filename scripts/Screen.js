import Oscilloscope from "./Oscilloscope.js";
import Spectrumscope from "./Spectrumscope.js";

export default class {
	constructor(player) {
		this.osc = new Oscilloscope(player, 'canvas1');
		this.spc = new Spectrumscope(player, 'canvas2');
	}

	draw() {
		let me = this;
		requestAnimationFrame(function() {me.draw();});
		this.osc.draw();
		this.spc.draw();
	}
}
