// Initialize AOS
AOS.init();

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
  }, 1500);
});

// Scroll header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.modern-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Mobile Menu
document.getElementById('hamburger').addEventListener('click', () => {
  const nav = document.querySelector('.nav-menu');
  nav.classList.toggle('active');
});

// Scroll to Models
function scrollToModels() {
  document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
}

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you! Your message has been sent.";
  formMessage.style.color = "green";
  this.reset();
});