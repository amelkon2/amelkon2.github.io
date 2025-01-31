document.addEventListener("DOMContentLoaded", function() {
    // Optional: Wait a few seconds before triggering the explosion
    setTimeout(function() {
        const overlayImage = document.querySelector('.overlay-image');
        overlayImage.classList.add('start-explosion');
    }, 1000); // Delay by 1 second (1000 milliseconds)
});
