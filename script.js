// Modal functionality
const callbackBtn = document.getElementById('callback-btn');
const modal = document.getElementById('callback-modal');
const closeBtn = document.querySelector('.modal-close');
const form = document.getElementById('callback-form');

callbackBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('show');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякуємо за звернення! Ми зв\'яжемося з вами найближчим часом.');
    modal.classList.remove('show');
    form.reset();
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let slideInterval;

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
}

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.opacity = '0';
        slide.classList.remove('active');
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    // Додаємо fade ефект
    slides[currentSlide].style.opacity = '0';
    slides[currentSlide].classList.add('active');
    
    // Використовуємо setTimeout для плавного переходу
    setTimeout(() => {
        slides[currentSlide].style.opacity = '1';
    }, 10);
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(4000);
}
createDots();
showSlide(0);
resetInterval();

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetInterval()
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetInterval()
});

// Auto slide
setInterval(() => {
    showSlide(currentSlide + 1);
}, 4000);