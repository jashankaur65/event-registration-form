// Get the form element
const form = document.getElementById('eventRegistrationForm');

/* 
  Add submit event listener to the form
  Prevent default submission
  Validate all input fields
*/
form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent default form submission
	console.log('Form submission triggered');

	// Remove any previous error messages
	const errors = document.querySelectorAll('.error-message');
	errors.forEach(error => error.remove());

	let isValid = true;

	// Validate Full Name field
	const fullName = document.getElementById('fullName');
	if (fullName.value.trim() === '') {
		showError(fullName, 'Please enter your full name');
		isValid = false;
		console.log('Full Name validation failed');
	}

	// Validate Email field
	const email = document.getElementById('email');
	if (email.value.trim() === '') {
		showError(email, 'Please enter your email');
		isValid = false;
		console.log('Email validation failed');
	}

	// Validate Number of Tickets
	const tickets = document.getElementById('tickets');
	if (tickets.value === '' || tickets.value < 1 || tickets.value > 10) {
		showError(tickets, 'Please enter a number between 1 and 10');
		isValid = false;
		console.log('Tickets validation failed');
	}

	// Validate Event Type selection
	const eventType = document.getElementById('eventType');
	if (eventType.value === '') {
		showError(eventType, 'Please select an event type');
		isValid = false;
		console.log('Event Type validation failed');
	}

	// Validate Terms Checkbox
	const agree = document.getElementById('agree');
	if (!agree.checked) {
		showError(agree, 'You must agree to the terms');
		isValid = false;
		console.log('Checkbox validation failed');
	}

	// If all validations pass, show success message and reset form
	if (isValid) {
		console.log('Form submitted successfully');
		alert('Registration successful!');
		form.reset();
	}
});

/**
 * showError function
 * Creates and displays an error message below the input field
 *
 * @param {HTMLElement} input - The input element where the error occurred
 * @param {string} message - The error message to display
 * @returns {void}
 */
function showError(input, message) {
	const error = document.createElement('div');
	error.className = 'error-message';
	error.innerText = message;

	// For checkboxes, append to parent; for other inputs, insert after the element
	if (input.type === 'checkbox') {
		input.parentElement.appendChild(error);
	} else {
		input.insertAdjacentElement('afterend', error);
	}
}
