export default class {
	constructor(player, screen) {
		this.player = player;
		this.screen = screen;
		this.initButtons();
		this.initRadios();
	}

	initButtons() {
		let me = this;
		let btnPlay = document.getElementById("buttonPlay");
		btnPlay.addEventListener(
			"click",
			function() {
				me.play();
			});
		let btnStop = document.getElementById("buttonStop");
		btnStop.addEventListener(
			"click",
			function() {
				me.stop();
			});
	}

	initRadios() {
		let me = this;
		let td = document.getElementById("radios");
		let rds = td.getElementsByTagName("input");
		for (let rd of rds) {
			rd.addEventListener(
				"RadioStateChange",
				function(event) {
					if (!event.target.checked) {
						return;
					}
					me.play();
				});
		}
	}

	play() {
		this.player.play(this.selectSoundType());
		this.screen.draw();
	}

	selectSoundType() {
		if (document.getElementById("m1").checked) {
			return 'sine';
		}
		if (document.getElementById("m2").checked) {
			return 'triangle';
		}
		if (document.getElementById("m3").checked) {
			return 'square';
		}
		if (document.getElementById("m4").checked) {
			return 'sawtooth';
		}
		return "";
	}

	getByteTimeDomainData() {
		return this.player.getByteTimeDomainData();
	}

	getByteFrequencyData() {
		return this.player.getByteFrequencyData();
	}
	
	stop() {
		this.player.stop();
	}
}
