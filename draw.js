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
    let bytes = "";
    let byte = "";
    document.querySelectorAll('.draw-cell').forEach((c, i) => { 
        byte += c.classList.contains('on') ? '1' : '0';
        if ((i+1) % 8 == 0) {
            bytes += String.fromCharCode(parseInt(byte, 2));
            byte = "";
        }
    })

    if (byte.length > 0) {
        byte = byte.padEnd(8, '0');
        bytes += String.fromCharCode(parseInt(byte, 2));
    }

    return btoa(bytes);
}

function getLink() {
    return `${location.origin}${location.pathname}?data=${encode()}`;
}

function decode(base64) {
    const binary = atob(base64);
    let bits = "";
    for (let i = 0; i < binary.length; i++) {
        bits += binary.charCodeAt(i).toString(2).padStart(8, '0');
    }
    return bits;
}


// LINK
document.getElementById('linkButton').addEventListener('click', () => {
    alert(getLink())
})


// SEND
document.getElementById('sendButton').addEventListener('click', () => {
    // let body = "";
    // document.querySelectorAll('.draw-cell').forEach((cell, i) => {
    //     body += cell.classList.contains('on') ? '#' : '  ';
    //     if (i % width == 0) body += '\n';
    // })

    window.open(`mailto:rory26byrne@gmail.com?subject=look what i drew&body=${encodeURIComponent(getLink())}`, '_blank');
});