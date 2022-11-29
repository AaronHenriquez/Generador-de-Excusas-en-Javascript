/* eslint-disable */
import 'bootstrap';
import './style.css';
import './assets/img/4geeks.ico';

function selectRandom(arr) {
	let random = Math.floor(Math.random * arr.length);
	return arr[random];
}

window.onload = function() {
	//write your code here
	console.log('Hello Rigo from the console!');
	let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
	let action = ['ate', 'peed', 'crushed', 'broke'];
	let what = ['my homework', 'the keys', 'the car'];
	let when = [
		'before the class',
		'right on time',
		'when I finished',
		'during my lunch',
		'while I was praying',
	];

	let excusa = [who, action, what, when].reduce(
		(final, arr) => ((final += selectRandom(arr) + ' '), ' ')
	);

	// manera larga de escribir la variable
	// let excusa = selectRandom(who) + ' ';
	// excusa += selectRandom(action) + ' ';
	// excusa += selectRandom(what) + ' ';
	// excusa += selectRandom(when) + '.';

	document.getElementById('excusa').innerHTML = excusa;
};
