const express = require('express');
const fs = require('fs');
const app = express();
const data = require('./tmp_customer_data.json')

app.use(express.json());

const filePath = 'tmp_customer_data.json';

// Read customer data from JSON file
let customerData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Endpoint to change user status
app.post('/change-status', (req, res) => {
    const { customerId, paymentConfirmation } = req.body;

    // Find the user by customerId
    const user = customerData.customers.find(customer => customer.customerId === customerId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Validate payment status here (assuming paymentConfirmation is a boolean for simplicity)
    if (!paymentConfirmation) {
        return res.status(400).json({ error: 'Payment not confirmed' });
    }

    // Update user status and profile
    user.status = 'active';
    user.activationDate = new Date().toISOString();
    user.firstName = anonymizeText(user.firstName);
    user.lastName = anonymizeText(user.lastName);

    // Activate messaging
    activateMessaging(user);

    // Save the updated customer data back to the file
    fs.writeFileSync(filePath, JSON.stringify(customerData, null, 2), 'utf-8');

    return res.status(200).json({ message: 'User status changed successfully', user });
});

// Function to anonymize text
function anonymizeText(text) {
    // Example anonymization: replace each character with '*'
    return text.replace(/./g, '*');
}

// Function to activate messaging
function activateMessaging(user) {
    // Code to activate messaging for the user
    // For simplicity, we just add a welcome message
    user.messages.push({ text: 'Welcome! Messaging is now activated.', timestamp: new Date().toISOString() });
}

app.get('/admin-app', (req, res) => {
    res.send(data)
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
