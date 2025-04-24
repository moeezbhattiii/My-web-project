// Contact Form Submission (Basic Example)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you can add form validation and submission via AJAX
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
}

// Additional Animations on Scroll (Optional)
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.feature, .product-item, .service-item, .review-item, .about img');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if(position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Initialize animations on visible elements (Optional)
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature, .product-item, .service-item, .review-item, .about img');
    animatedElements.forEach(element => {
        element.classList.add('animate__animated');
    });
});
