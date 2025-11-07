const width = 24
const grid = document.getElementById('grid');
let drawing = false;

// DECODE URL
window.onload = () => {
    const params = new URLSearchParams(location.search);
    const data = params.get("data");
    let cells = document.querySelectorAll('.draw-cell');
    
    if (data) {
        const bits = decode(data);
        bits.split("").forEach((bit, i) => {
            if (bit === "1") cells[i].classList.add("on");
        });
    }
}


// SETUP AND DRAWING
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

    cell.addEventListener("touchstart", (e) => {
        e.preventDefault();
        cell.classList.add("on");
    });

    cell.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        if (el && el.classList.contains("draw-cell")) {
            el.classList.add("on");
        }
    });

    grid.appendChild(cell);
}

document.addEventListener('mouseup', () => drawing = false);
document.addEventListener('touchend', () => drawing = false);


// CLEAR
document.getElementById('clearButton').addEventListener('click', () => {
    document.querySelectorAll('.draw-cell').forEach(c => c.classList.remove('on'));
    
})


// DOWNLOAD
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


// ENCODING AND DECODING
function encode() {
    const bits = Array.from(document.querySelectorAll('.draw-cell'))
        .map(c => c.classList.contains('on') ? '1' : '0')
        .join("");
    
    let hex = '';
    for (let i = 0; i < bits.length; i += 4) {
        const nibble = bits.substr(i, 4).padEnd(4, '0');
        hex += parseInt(nibble, 2).toString(16);
    }
    return hex;
}

function getLink() {
    return `${location.origin}${location.pathname}?data=${encode()}`;
}

function decode() {
    let bits = '';
    for (let i = 0; i < hex.length; i++) {
        bits += parseInt(hex[i], 16).toString(2).padStart(4, '0');
    }
    return bits;
}


// LINK
document.getElementById('linkButton').addEventListener('click', () => {
    alert(getLink())
})


// SEND
document.getElementById('sendButton').addEventListener('click', () => {
    window.open(`mailto:rory26byrne@gmail.com?subject=look what i drew&body=${encodeURIComponent(getLink())}`, '_blank');
});