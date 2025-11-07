const width = 24
const grid = document.getElementById('grid');
let drawing = false;

grid.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

for (let i = 0; i < width * width; i++) {
    const cell = document.createElement('div');
    cell.className = 'draw-cell';

    cell.addEventListener('mousedown', () => {
        drawing = true;
        cell.classList.add('on');
    })

    cell.addEventListener('mouseover', () => {
        if (!drawing) return;
        cell.classList.add('on');
    })

    grid.appendChild(cell);
}

document.addEventListener('mouseup', () => drawing = false);

document.getElementById('clearButton').addEventListener('click', () => {
    document.querySelectorAll('.draw-cell').forEach(c => c.classList.remove('on'));
    
})

document.getElementById('downloadButton').addEventListener('click', () => {
    const scale = 16;
    const canvas = document.createElement('canvas');
    canvas.width = width * scale;
    canvas.height = width * scale;
    
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#fff';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    document.querySelectorAll('.draw-cell').forEach((cell, i) => {
        const x = i % width;
        const y = Math.floor(i / width);
        ctx.fillStyle = cell.classList.contains('on') ? '#000' : '#fff';
        ctx.fillRect(x * scale, y * scale, 1 * scale, 1 * scale);
    })

    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'drawing.png';
    a.click();
})

document.getElementById('sendBtn').addEventListener('click', () => {
    let text = "";
    document.querySelectorAll('.draw-cell').forEach((cell, i) => {
        text += cell.classList.contains('on') ? '#' : '  ';
        if (i % width == 0) text += '\n';
    })

    window.open(`mailto:rory26byrne@gmail.com?subject=pixel&body=${encodeURIComponent(text)}`, '_blank');
});