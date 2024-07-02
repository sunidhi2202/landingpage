function showAlert() {
    alert('Plan your visit to the City Museum today!');
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Email subscription form validation
document.querySelector('.visit form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value.trim();
    if (validateEmail(emailValue)) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Carousel functionality
const carousel = document.querySelector('.exhibit-carousel');
const exhibits = document.querySelectorAll('.exhibit');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % exhibits.length;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + exhibits.length) % exhibits.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 320; // 300px width + 20px margin
    exhibits.forEach(exhibit => {
        exhibit.style.transform = `translateX(${offset}px)`;
    });
}

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('modal').style.display = 'flex';
    }, 2000); // Show modal after 2 seconds
});

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

