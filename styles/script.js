let currentSlide = 0;

    function navigateSlider(index) {
        currentSlide = index;
        const slides = document.querySelector('.slides');
        const navButtons = document.querySelectorAll('.nav-button');
        
        slides.style.transform = `translateX(-${index * 100}%)`;

        navButtons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });
    }

    // Initialize the first slide as active
    navigateSlider(0);