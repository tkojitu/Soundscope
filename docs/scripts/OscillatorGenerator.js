export default class {
	generate(ax, tp) {
		let osc = ax.createOscillator();
		osc.type = tp;
		osc.frequency.value = 440.0;
		osc.start();
		return osc;
	}
}
