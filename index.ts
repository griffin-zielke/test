// Import stylesheets
import './style.css';

// boiler plate setup the canvas for the game
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.setAttribute('tabindex', '1');
canvas.style.outline = 'none';
canvas.focus();

/*-- Setup Stage --*/
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

