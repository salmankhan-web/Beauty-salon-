// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 4000);

// Hamburger Menu
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

function closeMenu() {
    document.getElementById('navMenu').classList.remove('active');
}

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        closeMenu(); // Close menu on click
    });
});

// Booking Form Validation
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    if (!name || !email) {
        alert('Please fill in all required fields!');
        return;
    }
    alert('Appointment booked successfully! We\'ll confirm soon.');
    this.reset();
});

// Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe service cards with staggered animation
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
});

// Observe team members
document.querySelectorAll('.team-member').forEach((member, index) => {
    member.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(member);
});

// Observe testimonials
document.querySelectorAll('.testimonial').forEach((testimonial, index) => {
    testimonial.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(testimonial);
});

// Observe contact items
document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
});