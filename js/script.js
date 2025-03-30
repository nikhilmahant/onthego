// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Function to toggle mobile menu
const toggleMobileMenu = () => {
    navLinks.style.display = navLinks.classList.contains('active') ? 'none' : 'flex';
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', 
        hamburger.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
    );
};

// Add click event to hamburger
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.style.display = 'none';
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    } else {
        navLinks.style.display = 'none';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = window.innerWidth <= 768 ? 80 : 120;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Navbar Background Change on Scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Handle navbar background
    if (currentScroll > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.boxShadow = 'none';
    }

    // Handle top bar visibility
    if (currentScroll > lastScroll && currentScroll > 100) {
        topBar.style.transform = 'translateY(-100%)';
    } else {
        topBar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Animate Elements on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-content, .location-container');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial animation check
animateOnScroll();

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Set minimum date for appointment form
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Add loading state to submit buttons
const submitButtons = document.querySelectorAll('.submit-btn');
submitButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = '<span class="loading">Processing...</span>';
        setTimeout(() => {
            this.innerHTML = this.getAttribute('data-original-text') || 'Submit';
        }, 2000);
    });
});

// Handle Google Calendar iframe
const calendarIframe = document.querySelector('.appointment-container iframe');
if (calendarIframe) {
    calendarIframe.addEventListener('load', function() {
        this.style.width = '100%';
        this.style.height = '600px';
    });
}

// Handle WhatsApp button click
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const phoneNumber = this.getAttribute('href').split('=')[1];
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    });
}

// Handle direction button click
const directionBtn = document.querySelector('.direction-btn');
if (directionBtn) {
    directionBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const address = encodeURIComponent('Gandharva Hall, Shop no 17 & 18, Ground Floor, Ramdhoot Apartment Complex, opposite Sawai, beside Hero Showroom, Deshpande Nagar, Hubballi, Karnataka 580029');
        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    });
}

// Handle contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        this.reset();
    });
}

// Handle appointment form submission
const appointmentForm = document.querySelector('.appointment-form');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for scheduling an appointment. We will confirm your booking shortly!');
        this.reset();
    });
}

// Add smooth reveal animation for sections
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    });
};

// Initial reveal check
revealOnScroll();

// Add scroll event listener for reveal animation
window.addEventListener('scroll', revealOnScroll); 