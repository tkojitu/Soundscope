import App from "./App.js";
import Container from "./Container.js";
import Screen from "./Screen.js";
import SoundPlayer from "./SoundPlayer.js";
import UrlGenerator from "./UrlGenerator.js";
import OscillatorGenerator from "./OscillatorGenerator.js";

window.addEventListener(
	"load",
	function() {
		let co = new Container();
		co.define(
			"app",
			function(c) {
				return new App(c.geti("player"), c.geti("screen"));
			});
		co.define(
			"player",
			function(c) {
				return new SoundPlayer(c.geti("soundSrc"));
			});
		co.define(
			"soundSrc",
			function(c) {
				// return new UrlGenerator();
				return new OscillatorGenerator();
			});
		co.define(
			"screen",
			function(c) {
				return new Screen(c.geti("player"));
			});
		co.geti("app");
	});
