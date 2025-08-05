// index.js
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
   
// Add this to your index.js file
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formSuccess = document.querySelector('.form-success');
    
    // Using Formspree for email handling 
    fetch('https://formspree.io/f/mjkoeqww', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.style.display = 'none';
            formSuccess.style.display = 'block';
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        alert('There was a problem sending your message. Please try again later.');
        console.error('Error:', error);
    });
});
   
document.querySelector('.footer-text p:first-child').innerHTML = 
  `© ${new Date().getFullYear()} Soumyajoti. All rights reserved.`;