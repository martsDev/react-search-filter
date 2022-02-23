const express = require('express');
const app = express();
const port = 3001;
const data = require('./data');

app.get('/', (req, res) => {
    res.json(data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
