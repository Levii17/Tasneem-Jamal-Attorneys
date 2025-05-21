// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  menuToggle.innerHTML = mainNav.classList.contains('show') ? 
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentTestimonial = 0;

function showTestimonial(index) {
  // Handle index bounds
  if (index < 0) index = testimonials.length - 1;
  if (index >= testimonials.length) index = 0;
  
  // Hide all testimonials and deactivate dots
  testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show selected testimonial and activate dot
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  
  currentTestimonial = index;
}
 
// Add event listeners for dots
dots.forEach((dot, index) => {
   dot.addEventListener('click', () => showTestimonial(index));
});
 
// Add event listeners for control buttons
 nextBtn.addEventListener('click', () => {
   showTestimonial(currentTestimonial + 1);
});
 
prevBtn.addEventListener('click', () => {
   showTestimonial(currentTestimonial - 1);
});
 
// Auto-rotate testimonials
let autoSlideInterval = setInterval(() => {
   showTestimonial(currentTestimonial + 1);
}, 5000);
 
// Pause auto-rotation when interacting with controls
const controls = document.querySelectorAll('.control-btn, .dot');
controls.forEach(control => {
   control.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});
control.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
       showTestimonial(currentTestimonial + 1);
    }, 5000);
   });
});

// WhatsApp and Top Chevron Functionality
const whatsappBtn = document.getElementById('whatsapp-btn');
const topChevron = document.getElementById('topChevron');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // WhatsApp hide/show
  if (currentScroll > lastScroll && currentScroll > 300) {
    whatsappBtn.classList.add('whatsapp-hidden');
  } else {
    whatsappBtn.classList.remove('whatsapp-hidden');
  }
  
  // Chevron visibility
  if (currentScroll > 300) {
    topChevron.classList.add('visible');
  } else {
    topChevron.classList.remove('visible');
  }
  
  lastScroll = currentScroll;
  
  // Animate elements on scroll
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('revealed');
    }
  });
});

// Scroll to top
topChevron.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  // Add revealed class to visible elements on page load
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('revealed');
    }
  });
});

// Contact Form Functionality
const contactForm = document.getElementById('consultationForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Form submission logic would go here
  alert('Thank you for your message! We will contact you soon.');
  contactForm.reset();
});

// Utility Functions
function callNow() {
  window.location.href = 'tel:+27693297057';
}

function saveContact() {
  alert("Contact details saved to your device! (Simulated)");
}

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'Tasneem Jamal Attorneys',
      text: 'Check out this inclusive law firm!',
      url: window.location.href
    }).catch(console.error);
  } else {
    alert("Sharing not supported on this browser. Please copy the URL manually.");
  }
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      if (mainNav.classList.contains('show')) {
        mainNav.classList.remove('show');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});