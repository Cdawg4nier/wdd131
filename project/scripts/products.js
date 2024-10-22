const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let visibleImages;
const totalImages = 5;
let currentIndex = 0;
let mobileValues = [31, -12, -54, -97, -140]
let desktopValues = [34, -8, -49, -89, -126]
let usedValues = []

function loadCurrentIndex() {
    const savedIndex = localStorage.getItem('currentIndex');
    if (savedIndex !== null) {
        currentIndex = parseInt(savedIndex)
    }
}

function updateGallery() {
    gallery.style.transform = `translateX(${usedValues[currentIndex]}%)`;
    localStorage.setItem('currentIndex', currentIndex);
}
function setVisibleImages() {
    if (window.innerWidth < 500) {
        visibleImages = 1;
        usedValues = mobileValues;
    } else {
        visibleImages = 3;
        usedValues = desktopValues;
    }
    updateGallery();
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
});

loadCurrentIndex();
setVisibleImages();
window.addEventListener('resize', setVisibleImages);