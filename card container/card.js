const container = document.querySelector('.carousel');
const arrows = document.querySelectorAll('i');
const basewith = container.querySelector('.card').offsetWidth;
const screenm = screen.width;
console.log(screenm)

arrows.forEach ((button) => {
    const arrowid = button.dataset.way;
    button.addEventListener('click', () => {
        container.scrollLeft += arrowid === 'left' ? -basewith+16 : basewith+16;
        console.log(arrowid);
        dragging();
    })
})

let isdraging = false, startx , startscrolligleft;


const draggingstart = (e) => {
    isdraging = true;
    container.classList.add('dragging');
    startx = e.pageX;
    startscrolligleft = container.scrollLeft;
}

const dragstop = () => {
    isdraging = false;
    container.classList.remove('dragging');
}

const dragging = (e)=> {
    if (!isdraging) {
        return;
    }
    container.scrollLeft = startscrolligleft - (e.pageX - startx) ;
}


container.addEventListener('mousemove', dragging);
container.addEventListener('mousedown', draggingstart);
document.addEventListener('mouseup', dragstop);
