const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req, res) => { 
     res.send('<h1>hello world</h1>')
})

app.listen(3002, () => {
    console.log('listening on port 3002');
})

module.exports = app