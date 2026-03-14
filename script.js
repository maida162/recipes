// Booking form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '🎉 Booking request sent! We\'ll contact you within 24 hours.';
  this.reset();
  setTimeout(() => msg.textContent = '', 4000);
});

// Smooth navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(0,0,0,0.95)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.85)';
  }
});
