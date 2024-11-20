document.addEventListener('DOMContentLoaded', () => {
    // Section Animation Observer
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.2, // Trigger animations when 20% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        section.classList.add('hidden'); // Add hidden class initially
        sectionObserver.observe(section); // Observe each section
    });

    // Slider Functionality
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentSlide = 0;

    // Ensure all required elements exist
    if (sliderWrapper && slides && prevButton && nextButton) {
        const totalSlides = slides.length;

        // Navigate to the previous slide
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
            sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        });

        // Navigate to the next slide
        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
            sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    } else {
        console.error("Slider elements not found. Ensure your HTML structure matches the script.");
    }
});
