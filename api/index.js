const express = require('express');
const data = require('./data');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {

    const { q } = req.query;

    const keys = ["book", "author"];

    const search = (data) => {
    return data.filter((titles) => 
      keys.some((key) => titles[key].toLowerCase().includes(q))
    );
  };

    res.json(search(data).splice(0, 2))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
