function randomPastelColor() {
var h = Math.floor(Math.random() * 360);
var s = 40 + Math.floor(Math.random() * 20);
var l = 80 + Math.floor(Math.random() * 10);
return `hsl(${h}, ${s}%, ${l}%)`;
}

function applyRandomNavGradient() {
var header = document.querySelector('.masthead');
if (!header) return;

var c1 = randomPastelColor();
var c2 = randomPastelColor();

header.style.background = `linear-gradient(90deg, ${c1}, ${c2})`;
header.style.borderBottom = 'none';

var nav = header.querySelector('#site-nav.greedy-nav');
if (nav) {
    nav.style.background = 'transparent'; 
}

var btn = header.querySelector('nav.greedy-nav button');
if (btn) {
    btn.style.background = 'inherit';
}

var hidden = header.querySelector('.greedy-nav .hidden-links');
if (hidden) {
    hidden.style.background = 'transparent';
}
}

document.addEventListener('DOMContentLoaded', applyRandomNavGradient);