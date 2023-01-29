const express = require('express');
const cors = require('cors');
const PORT = '8080';
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(PORT, () => console.log('API is running on http://localhost:8080/login'));