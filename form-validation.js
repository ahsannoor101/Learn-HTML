// Get the form element
var form = document.getElementById('myForm');

// Add an event listener to the form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Perform form validation
  var isValid = validateForm();

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
});

// Function to validate the form
function validateForm() {
  // Get the form fields
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');

  // Get the error message elements
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');

  // Reset the error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  // Flag to track form validity
  var isValid = true;

  // Validate name field
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Validate email field
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate password field
  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  }

  // Return the form validity status
  return isValid;
}

// Helper function to validate email format
function isValidEmail(email) {
  // Regular expression pattern for email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}