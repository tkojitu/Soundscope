export default class {
	generate(ax, tp) {
		return ax.createMediaElementSource(this.newAudio(tp));
	}

	newAudio(tp) {
		let audio = new Audio();
		audio.src = this.selectSoundFile(tp);
		audio.autoplay = true;
		audio.preload = 'auto';
		return audio;
	}

	selectSoundFile(tp) {
		if (tp == "sine") {
			return 'audio/sine.mp3';
		}
		if (tp == "triangle") {
			return 'audio/triangle.mp3';
		}
		if (tp == "square") {
			return 'audio/square.mp3';
		}
		if (tp == "sawtooth") {
			return 'audio/sawtooth.mp3';
		}
		return "";
	}
}
