// Select elements
const loader = document.querySelector('.loader');
const modal = document.querySelector('.modal');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const header = document.querySelector('header h1');
const container = document.querySelector('.container');
const imgs = document.querySelector('.imgs');
const selectedImg = document.querySelector('.selected-img');
const caption = document.querySelector('.caption');
const del = document.querySelector('.delete');
const numImages = 24;
let images = [];
let dragging;
let selectedId;

// Insert images
for(let j=0; j<numImages; j++) {
    const image = document.createElement('img');
    image.setAttribute('id', `img${j}`);
    image.setAttribute('src',`https://picsum.photos/300?random=${j}`);
    imgs.appendChild(image);
    images.push(image);
}

// Loader and animations on page load
setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {loader.style.display = 'none'}, 1000);

    header.style.display = 'block';
    container.style.display = 'block';
    
    setTimeout(() => {
        header.style.marginTop = '1rem';
        setTimeout(() => {container.style.opacity = '1'}, 2300);
    }, 20);
}, 3000);

// Adding event listeners //
// Images
images.forEach(img => {
    img.addEventListener('click', openModal);

    img.addEventListener('dragstart', dragStart);

    img.addEventListener('dragend', dragEnd);
})

// Modal
modal.addEventListener('click', closeModal);

// Arrow keys
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

// Del
del.addEventListener('dragover', delDragover);
del.addEventListener('dragleave', delDragleave);
del.addEventListener('drop', delDrop)

// Functions //
function openModal(e){
    modal.classList.add('open');
    // Display selected image
    selectedImg.src = e.target.getAttribute('src');
    selectedId = parseInt(e.target.getAttribute('id'));
    // Add caption
    caption.textContent = 'This is the caption!';
}

function nextImg() {
    if(selectedId < images.length) {
        selectedId++;
        img = document.getElementById(selectedId);
        selectedImg.src = img.getAttribute('src');
    }
}

function prevImg() {
    if(selectedId > 1) {
        selectedId--;
        img = document.getElementById(selectedId);
        selectedImg.src = img.getAttribute('src');
    }
}

function closeModal(e){
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
    }
}

function dragStart(e) {
    e.target.classList.add('dragging');
    draggingId = e.target.id;
    del.style.bottom = '0';
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
    del.style.bottom = '-3rem';
}

function delDragover(e) {
    e.preventDefault();
    del.style.background = 'rgb(250, 20, 20)';
}

function delDragleave() {
    del.style.background = 'rgb(250, 40, 40)';
}

function delDrop() {
    img = document.getElementById(draggingId);
    img.style.width = 0;
    img.style.height = 0;
    setTimeout(() => {
        img.remove();
    }, 300);
}