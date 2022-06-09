const images = document.querySelectorAll('.slide');
const arrowBack = document.getElementById('arrowleft');
const arrowNext = document.getElementById('arrowright');

let activeImage = 0;

arrowNext.addEventListener("click", function() {
    if(activeImage === images.length - 1) {
        return;
    }

    activeImage++;
    
    hideActiveImage();
    showImage();
    opacityArrows();
});

arrowBack.addEventListener("click", function() {
    if(activeImage === 0) {
        return;
    }
    
    activeImage--;

    hideActiveImage();
    showImage();
    opacityArrows();
});

function showImage() {
    images[activeImage].classList.add('show');
}

function hideActiveImage() {
    const openSlide = document.querySelector('.show');
    openSlide.classList.remove('show');
}

function opacityArrows() {
    const firstPage = activeImage === 0;
    if (firstPage) {
        arrowBack.classList.add('opacity');
    }else {
        arrowBack.classList.remove('opacity');
    }
    const lastPage = activeImage === images.length - 1;
    if (lastPage) {
        arrowNext.classList.add('opacity');
    }else {
        arrowNext.classList.remove('opacity');
    }
}

