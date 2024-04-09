// Modal
const modal = document.getElementById('modal');
const signupForm = document.getElementById('signupForm');
const closeBtn = document.getElementsByClassName('close')[0];

// Show modal
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Form Validation
signupForm.addEventListener('submit', function(event) {
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    if (!isValidEmail(email) || !isValidPassword(password)) {
        event.preventDefault();
        alert('Please enter a valid email and password.');
    }
});

function isValidEmail(email) {
    // Basic email validation, you may need to improve this depending on your requirements
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    // Basic password validation, you may need to improve this depending on your requirements
    return password.length >= 8;
}
