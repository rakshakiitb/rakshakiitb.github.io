ocument.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const totalImages = images.length;
    let autoSlideInterval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextImage, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', () => {
        stopAutoSlide(); // Stop auto-slide when user interacts
        showNextImage();
        startAutoSlide(); // Restart auto-slide
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        showPrevImage();
        startAutoSlide();
    });

    // Start auto-slide
    startAutoSlide();

    // Initialize the first image
    showImage(currentIndex);
});

