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

//Pagination
// Додати код для пагінації книг
function setupPagination() {
    const productsContainer = document.querySelector('.products');
    const allProducts = Array.from(productsContainer.querySelectorAll('.product'));
    const paginationContainer = document.querySelector('.pagination');
    const productsPerPage = 6;
    let currentPage = 1;
    
    // Очищаємо пагінацію і заповнюємо її заново
    paginationContainer.innerHTML = '';
    
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    
    // Створюємо кнопки пагінації
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        if (i === 1) pageLink.classList.add('active');
        
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            showPage(currentPage);
            
            // Оновлюємо активну кнопку
            document.querySelectorAll('.pagination a').forEach(link => {
                link.classList.remove('active');
            });
            pageLink.classList.add('active');
        });
        
        paginationContainer.appendChild(pageLink);
    }
    
    // Функція для відображення поточної сторінки
    function showPage(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        
        allProducts.forEach((product, index) => {
            if (index >= startIndex && index < endIndex) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    
    // Показуємо першу сторінку за замовчуванням
    showPage(1);
}

// Запускаємо пагінацію після завантаження сторінки
document.addEventListener('DOMContentLoaded', setupPagination);