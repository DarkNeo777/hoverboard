const container = document.getElementById('container');

const colors = ['#e11d48','#c026d3','#4f46e5','#0d9488','#ca8a04','#dc2626'];

const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(square) {
    colorNum = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = colorNum;
    square.style.boxShadow = '0 0 2px ${colorNum}, 0 0 10px ${colorNum}';
}

function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000'
}
