
const gifs = document.querySelectorAll('.gif');
const positions = []; 
const overlapThreshold = 200;

function getRandomPosition(width, height) {
    const x = Math.random() * (window.innerWidth - width);
    const y = Math.random() * (window.innerHeight - height);
    return { x, y };
}

function isOverlapping(newPos, rectWidth, rectHeight) {
    for (const pos of positions) {
        const dx = newPos.x - pos.x;
        const dy = newPos.y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < overlapThreshold) {
            return true;
        }
    }

    return isCollidingWithBottomImage;
}


gifs.forEach(gif => {
    const gifWidth = 150; 
    const gifHeight = 150; 
    let newPos;

    do {
        newPos = getRandomPosition(gifWidth, gifHeight);
    } while (isOverlapping(newPos, gifWidth, gifHeight)); 

    positions.push(newPos); 
    gif.style.left = `${newPos.x}px`;
    gif.style.top = `${newPos.y}px`;
});

