// Add an event listener to the form submit button
const form = document.getElementById('email-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create an object with the form data
    const formData = {
        name,
        email,
        subject,
        message
    };

    try {
        // Send the form data to the backend API
        const response = await fetch('http://localhost:3005/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Check the response status
        if (response.ok) {
            console.log('Message sent successfully!');
            // Optionally, you can reset the form after successful submission
            form.reset();
        } else {
            console.log('Message failed to send.');
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }
});
