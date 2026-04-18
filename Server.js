require('dotenv').config();


const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.use (express.json());

app.use ((req, res, next) => {
    const time = new Date( 2026/4/18 ).toISOString();
    console.log(`${req.method} ${req.url} - ${time}`);
    next(); // pass to the next handler
});
app.use (express.static('public'));

app.get('/', (req, res) => {
    res.send('My week 2 API!'); 
});

app.post('/user', (req, res) => {
    const { name = 'Franklyn'
        , email = 'olufranklyn@gmail.com' } = req.body;

    if (!name || !email) {
        return res.status(400).send('Missing name or email');
    }

    res.send(`hello ${name}`);
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
