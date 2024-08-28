// Blog Swiper
var swiper = new Swiper('.blog-swiper-container', {
    // Default settings
    slidesPerView: 1, // Display one slide initially
    spaceBetween: 29, // Add space between slides if needed
    loop: true, // Enable loop mode if you want continuous sliding
    // Responsive breakpoints
    breakpoints: {
        // When window width is >= 576px (small screen)
        576: {
            slidesPerView: 1
        },
        // When window width is >= 768px (medium screen)
        768: {
            slidesPerView: 2
        },
        // When window width is >= 992px (large screen)
        992: {
            slidesPerView: 3
        }
    }
});