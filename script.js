$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirmPassword').val();

      if (name.trim() === '') {
        alert('Please enter your name.');
        return;
      }
      if (email.trim() === '') {
        alert('Please enter your email.');
        return;
      }
      if (password.trim() === '') {
        alert('Please enter your password.');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      // If all validations pass, you can submit the form or perform other actions here
      alert('Registration successful!');
      $('#registrationForm')[0].reset();
    });
  });
  // registration from
 
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission

      // Display alert pop-up
      alert('Your connection request has been submitted successfully!');

      // Clear form fields
      form.reset();
    });
  });

// contact me
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('contactForm');
  
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
  
        // Display alert pop-up
        alert('Your message has been submitted successfully!');
  
        // Clear form fields
        form.reset();
      });
    });

 




  