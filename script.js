const container = document.getElementById('container');

const colors = ['#e11d48','#c026d3','#4f46e5','#0d9488','#ca8a04','#dc2626'];

const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    colorNum =Math.floor(Math.random() * 6);
    
    square.style.backgroundColor = colors[colorNum];
    container.appendChild(square);
    
}

