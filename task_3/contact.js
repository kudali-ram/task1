document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    // Simple validation
    if (!name || !mobile || !email || !query) {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Validate mobile number (simple regex for 10-digit numbers)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        document.getElementById('formMessage').textContent = 'Please enter a valid 10-digit mobile number.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Validate email (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('formMessage').textContent = 'Please enter a valid email address.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // If validation passes, show a success message
    document.getElementById('formMessage').textContent = 'Thank you for your query. We will get back to you soon!';
    document.getElementById('formMessage').style.color = 'blue';

    // Clear the form
    document.getElementById('contactForm').reset();
});