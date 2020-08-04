// Select elements //
const modal = document.querySelector('.modal');
const imgs = document.querySelector('.imgs');
const selectedImg = document.querySelector('.selected-img');
const caption = document.querySelector('.caption');
const del = document.querySelector('.delete');
const numImages = 8;
const repeatImages = 3;
let images = [];
let dragging;

// Insert images
for(let i=0; i<repeatImages; i++) {
    for(let j=0; j<numImages; j++) {
        const image = document.createElement('img');
        image.setAttribute('id', (numImages*i+j+1));
        image.setAttribute('src',`images/img${j+1}.jpg`);
        imgs.appendChild(image);
        images.push(image);
    }
}

// Adding event listeners //
// Images
images.forEach(img => {
    img.addEventListener('click', openModal);

    img.addEventListener('dragstart', dragStart);

    img.addEventListener('dragend', dragEnd);
})

// Modal
modal.addEventListener('click', closeModal);

// Del
del.addEventListener('dragover', delDragover);
del.addEventListener('dragleave', delDragleave);
del.addEventListener('drop', delDrop)

// Functions //
function openModal(e){
    modal.classList.add('open');
    // Display selected image
    selectedImg.src = e.target.getAttribute('src');
    // Add caption
    caption.textContent = 'This is the caption!';
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