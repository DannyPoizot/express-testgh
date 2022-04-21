const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        msg: 'Hello!'
    });
});

app.get('/api/hello', (req, res) => {
    res.json({
        msg: 'Hello!',
        status: 200
    });
});

app.get('/api/dashboard', (req, res) => {
    res.json({
        msg: 'Hello!',
        status: 201
    });
});

app.listen(5000, () => console.log('Running on Port 5000'));