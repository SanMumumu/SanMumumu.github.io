function randomPastelColor() {
var hue = Math.floor(Math.random() * 360);            
var saturation = 40 + Math.floor(Math.random() * 20); 
var lightness = 80 + Math.floor(Math.random() * 10);  
return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
}

function applyRandomNavGradient() {
var header = document.querySelector('.masthead');
if (!header) return;
var c1 = randomPastelColor();
var c2 = randomPastelColor();
header.style.background = 'linear-gradient(90deg, ' + c1 + ', ' + c2 + ')';
header.style.borderBottom = 'none';
var btn = header.querySelector('nav.greedy-nav button');
if (btn) {
    btn.style.background = 'inherit';
}
}
document.addEventListener('DOMContentLoaded', applyRandomNavGradient);
