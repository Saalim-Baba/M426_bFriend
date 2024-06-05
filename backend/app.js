const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'bFriend_DB',
    port: 3307
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/status', async (req, res) => {
    const { accountId, paymentConfirmation } = req.body;

    try {
        const conn = await pool.getConnection();
        const [user] = await conn.query("SELECT * FROM Account WHERE Account_ID = ?", [accountId]);

        if (!user) {
            conn.release();
            return res.status(404).json({ error: 'User not found' });
        }

        if (!paymentConfirmation) {
            conn.release();
            return res.status(400).json({ error: 'Payment not confirmed' });
        }

        await conn.commit();

        conn.release();

        res.status(200).json({ message: 'User status changed successfully', user });
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send(err.message);
    }
});

app.put('/payment', (req, res) => {
    const { customerId, paymentData } = req.body;

    const user = customerData.customers.find(customer => customer.customerId === customerId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (!paymentData || !paymentData.cardNumber || !paymentData.ValidThru || !paymentData.CCV || !paymentData.IBAN || !paymentData.currency) {
        return res.status(400).json({ error: 'Invalid payment data' });
    }

    user.paymentData = paymentData;

    fs.writeFileSync(dataPath, JSON.stringify(customerData, null, 2), 'utf-8');

    return res.status(200).json({ message: 'Payment data updated successfully', user });
});

app.get('/account', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query("SELECT * FROM account;");
        console.log(result);
        res.json(result);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send(err.message);
    } finally {
        if (conn) await conn.release();
    }
});

app.get('/login', async (req, res) => {
    let username = req.query.username;
    let password = req.query.password;

    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        result = await conn.query("SELECT * FROM account;");
    } catch (err) {
        console.error('Database query error:', err);
        return res.status(500).send(err.message);
    } finally {
        if (conn) await conn.release();
    }

    // Find the customer based on username
    let customer = result.find((customer) => customer.Username === username);
    console.log('Found customer:', customer);

    if (customer) {
        if (password === customer.Password) {
            return res.status(200).send(customer);
        } else {
            return res.status(401).send('Incorrect password');
        }
    } else {
        console.log(`Customer with username ${username} not found.`);
        return res.sendStatus(404);
    }
});


app.post('/register', (req, res) => {
    let newData = req.body;
    console.log("Received data:", newData);
    if (Object.keys(newData).length === 0) {
        console.error("No data received. Make sure the Content-Type is set to application/json");
        return res.status(400).json({ error: "No data received" });
    }
    res.send(newData);
});
module.exports = pool;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
