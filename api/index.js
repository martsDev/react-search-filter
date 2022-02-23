const express = require('express');
const data = require('./data');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.json(data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
