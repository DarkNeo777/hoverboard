const container = document.getElementById('container');

const colors = ['#e11d48', '#c026d3', '#4f46e5', '#0d9488', '#ca8a04', '#dc2626'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.id = i

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    square.addEventListener('click', () => line(square));

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

function line(square) {
    const id = square.id;
    for (let i = 0; i < SQUARES; i++) {
        const block = document.getElementById(i);
        if (i == id || i % 20 == id % 20 || Math.floor(i/20) == Math.floor(id/20)) {
            setColor(block);
        } else {
            removeColor(block);
        }
    }

}