export default class {
	constructor(gen) {
		this.gen = gen;
		this.ax = null;
		this.analyser = null;
	}

	/**
	 * source(audio) -> analyzer -> dest
	 */
	play(src) {
		try {
			if (!this.ax) {
				this.ax =  new AudioContext();
			}
			this.analyser = this.newAnalyser();
			let source = this.newSource(src);
			source.connect(this.analyser);
			this.analyser.connect(this.ax.destination);
		} catch (e) {
			alert(e);
		}
	}

	newSource(src) {
		return this.gen.generate(this.ax, src);
	}

	newAnalyser() {
		let analyser = this.ax.createAnalyser();
		analyser.fftSize = 256;
		return analyser;
	}

	getByteTimeDomainData() {
		if (!this.analyser) {
			return [];
		}
		let data = new Uint8Array(this.analyser.fftSize);
		this.analyser.getByteTimeDomainData(data);
		return data;
	}

	getByteFrequencyData() {
		if (!this.analyser) {
			return [];
		}
		let data = new Uint8Array(this.analyser.fftSize / 4);
		this.analyser.getByteFrequencyData(data);
		return data;
	}
	
	stop() {
		this.analyser.disconnect();
		this.analyser = null;
	}
}
