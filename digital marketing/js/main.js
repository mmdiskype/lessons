
let checkedvalue = 1;


function companyresponsive () {
    window.addEventListener('resize', () => {
        if (screen.width < 910) {
            document.querySelector('.mini').innerHTML =`
                <p class="tooldis">we have been bothering google since 2015 ;
                we are the SEO agency that keeps it awake at night with 
                the algorithem at palms of our hand and the key words in
                our heart</p>
            `;
            document.querySelector('.mini').style.paddingLeft = '16px';
            document.querySelector('.mini').style.paddingRight = '16px';
        }
        if (screen.width < 851) {
            document.querySelector('.brands').innerHTML = `
                <div class="firstlayer">
                    <img src="image/gramerly.svg" alt="">
                    <img src="image/unsplash.svg" alt="">
                    <img src="image/notion.svg" alt="">
                </div>
                <div class="secoundlayer">
                    <img src="image/intercom.svg" alt="">
                    <img src="image/discript.svg">
                </div>
            `;
            
            document.querySelector('.brands').style.display = 'flex';
            document.querySelector('.brands').style.flexDirection = 'column';
            document.querySelector('.brands').style.padding = '0px';
            document.querySelector('.brands').style.justifyContent = 'center';
            document.querySelector('.brands').style.padding = '0px';
        }
        if ("ontouchstart" in document.body) {
            document.querySelector('.container').style.overflowX = 'scroll';
            document.querySelector('.container').classList.add('draggingmobile');

            
        }
    })
    
}
companyresponsive ();




// for getting the positioning of mouse you can use e.pageX

// const container = document.querySelector('.container');
// let dragcheck = false;
// const isdragging = () => {
//     dragcheck = true;
//     container.classList.add('dragging');
// }

// const dragstop = () => {
//     dragcheck = false;
//     container.classList.remove('dragging');
// }

// const dragging = (e) => {
//     if (!dragcheck) return;
//     container.scrollLeft = Touch.e.pageX;
//     console.log(e.pageX)
// }

// container.addEventListener('mousedown', isdragging);
// container.addEventListener('touchstart', isdragging);
// container.addEventListener('mousemove', dragging);
// container.addEventListener('touchmove', dragging);
// container.addEventListener('mouseup', dragstop)
// container.addEventListener('touchend', dragstop)


const container = document.querySelector('.container');
let dragcheck = false;

const draggingstart = () => {
    dragcheck = true
}

const dragging = (e) => {
    if(!dragcheck) {return}
    container.scrollLeft = e.pageX;
}

container.addEventListener('mousemove', dragging);
container.addEventListener('mousedown', draggingstart)

