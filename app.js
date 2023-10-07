const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).type('html').send('Hello World');
});

app.listen(3001, () => console.log('Server running on port 3001'));