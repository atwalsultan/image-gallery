// Select elements //
const modal = document.querySelector('.modal');
const imgs = document.querySelectorAll('.imgs img');
const selectedImg = document.querySelector('.selected-img');
const caption = document.querySelector('.caption');
const del = document.querySelector('.delete');

// Adding event listeners //
// Images
imgs.forEach(img => {
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
    img = document.querySelector('.dragging');
    img.style.width = 0;
    img.style.height = 0;
    setTimeout(() => {
        img.remove();
    }, 300)
}