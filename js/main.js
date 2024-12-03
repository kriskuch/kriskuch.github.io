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

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    // Function to check if the device is a smartphone
    const isSmartphone = () => window.innerWidth <= 768; // Adjust breakpoint if needed

    // Toggle menu visibility
    burgerMenu.addEventListener('click', () => {
        if (isSmartphone()) {
            burgerMenu.classList.toggle('active');
            nav.classList.toggle('visible');
            nav.classList.toggle('hidden');
        }
    });

    // Close menu after clicking a link
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (isSmartphone()) {
                burgerMenu.classList.remove('active');
                nav.classList.remove('visible');
                nav.classList.add('hidden');
            }
        });
    });

    // Handle window resize to reset the menu state for larger screens
    window.addEventListener('resize', () => {
        if (!isSmartphone()) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('hidden');
            nav.classList.remove('visible');
        } else {
            nav.classList.add('hidden'); // Hide the nav on smartphones initially
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImage = modal.querySelector("img");
    const closeButton = modal.querySelector(".close-button");

    // Open modal on image click
    document.querySelectorAll(".fullscreen-image").forEach((image) => {
        image.addEventListener("click", (e) => {
            modalImage.src = e.target.src;
            modal.classList.add("active");
        });
    });

    // Close modal on close button click
    closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});

