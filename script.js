


// Example: Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset();
  });
  