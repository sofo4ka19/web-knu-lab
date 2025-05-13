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
        let currentSlide = 0;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Auto slide
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);