/* ===============================================================
 * Founders and Coders Pre Apprenticeship Week 1
 * Author:  Cemal Okten
 * Github: https://github.com/cemalokten/fac-application-website
 * Language: Javascript
 * Notes: Inspired by Day 1 of Wes Bos's JavaScript Drum Kit
 * Sounds: Creative Commons Licence from www.freesound.org
 * https://freesound.org/people/cabled_mess/packs/19827/
 * https://freesound.org/people/nemaavla/packs/19523/
================================================================== */

// 01 - Variable declarations
const html = document.querySelector('html');
const instructions = document.getElementById('instructions');
const letter = document.getElementById('letter');

const colourNames = [
	'Aqua',
	'Aquamarine',
	'Blue',
	'BlueViolet',
	'Brown',
	'BurlyWood',
	'CadetBlue',
	'Chartreuse',
	'Chocolate',
	'Coral',
	'CornflowerBlue',
	'Crimson',
	'Cyan',
	'DarkBlue',
	'DarkCyan',
	'DarkGoldenRod',
	'DarkGreen',
	'DarkMagenta',
	'DarkOliveGreen',
	'DarkOrange',
	'DarkOrchid',
	'DarkRed',
	'DarkSalmon',
	'DarkSlateBlue',
	'DarkTurquoise',
	'DarkViolet',
	'DeepPink',
	'DeepSkyBlue',
	'DodgerBlue',
	'FireBrick',
	'ForestGreen',
	'Fuchsia',
	'Gold',
	'GoldenRod',
	'Green',
	'GreenYellow',
	'HotPink',
	'IndianRed',
	'Indigo',
	'Lavender',
	'LawnGreen',
	'Lime',
	'LimeGreen',
	'Magenta',
	'Maroon',
	'MediumAquaMarine',
	'MediumBlue',
	'MediumOrchid',
	'MediumPurple',
	'MediumSeaGreen',
	'MediumSlateBlue',
	'MediumSpringGreen',
	'MediumTurquoise',
	'MediumVioletRed',
	'MidnightBlue',
	'NavajoWhite',
	'Navy',
	'Olive',
	'OliveDrab',
	'Orange',
	'OrangeRed',
	'Orchid',
	'PaleGreen',
	'PaleTurquoise',
	'PaleVioletRed',
	'PeachPuff',
	'Peru',
	'Pink',
	'Plum',
	'Purple',
	'RebeccaPurple',
	'Red',
	'RosyBrown',
	'RoyalBlue',
	'SaddleBrown',
	'Salmon',
	'SandyBrown',
	'SeaGreen',
	'Sienna',
	'SkyBlue',
	'SlateBlue',
	'SlateGray',
	'SlateGrey',
	'SpringGreen',
	'SteelBlue',
	'Tan',
	'Teal',
	'Thistle',
	'Tomato',
	'Turquoise',
	'Violet',
	'Wheat',
	'Yellow'
];

let history = [];

const keys = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	' '
];

html.style.backgroundColor = randomColour();
html.style.color = randomColour();

// Returns a random positive whole number between two values (min, max)
// Used throughout to select random array elements
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// Return random colour name from colourNames array using randomNumber()
function randomColour() {
	return colourNames[randomNumber(0, colourNames.length - 1)];
}

document.addEventListener('keydown', function(e) {
	if (keys.includes(e.key)) {
		const audio = document.querySelector(`audio[data-key="${e.key}"]`);
		letter.style.animation = 'none';
		history += `<span style="color:${randomColour()}">${e.key}</span>`;
		letter.innerHTML = `${history}`;
		instructions.style.opacity = 0;
		html.style.backgroundColor = randomColour();
		html.style.color = randomColour();
		audio.currentTime = 0;
		audio.play();
	} else {
		console.log(e.key);
	}
});

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
		history = [];
		letter.innerHTML = `|`;
		letter.style.animation = 'blinker 0.8s infinite';
	}
});

document.addEventListener('mousemove', function(e) {
	instructions.style.opacity = 1;
});
