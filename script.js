// script.js

document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0; // Track the index of the currently displayed image
  const images = document.querySelectorAll('.carousel-link'); // Select all images
  const totalImages = images.length; // Get the total number of images

  // Function to change the image
  function changeImage(direction) {
    // Update the current index by the direction (1 or -1)
    currentIndex += direction;

    // Loop back to the first image if we go past the last one
    if (currentIndex < 0) {
      currentIndex = totalImages - 1; // Go to the last image
    } else if (currentIndex >= totalImages) {
      currentIndex = 0; // Go back to the first image
    }

    // Update the carousel by adjusting the transform property
    updateCarousel();
  }

  // Function to update the carousel's position
  function updateCarousel() {
    const carouselImagesContainer = document.querySelector('.carousel-images');
  
    // Move the images left by currentIndex * 100%
    const offset = -currentIndex * 100;
    carouselImagesContainer.style.transform = `translateX(${offset}%)`;
  }

  // Assign event listeners to buttons
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  prevButton.addEventListener('click', function () {
    changeImage(-1); // Go to the previous image
  });

  nextButton.addEventListener('click', function () {
    changeImage(1); // Go to the next image
  });

  // Auto-cycle the images every 3 seconds (3000ms)
  function startAutoCycle() {
    autoCycleInterval = setInterval(function () {
      changeImage(1);
    }, 4000);
  }

  // Pause the auto-cycle on hover
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', function () {
    clearInterval(autoCycleInterval); // Stop the auto-cycling
  });

  // Restart the auto-cycle when the mouse leaves
  carousel.addEventListener('mouseleave', function () {
    startAutoCycle(); // Start auto-cycling again
  });

  // Start auto-cycling initially
  startAutoCycle();
});
