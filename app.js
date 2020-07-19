const express = require('express');
const fs = require('fs');
const app = express();

app.get('/products', function (req, res) {
    var products = fs.readFileSync('./products.json');
    res.json(JSON.parse(products));
});
   
app.listen(3000, '127.0.0.1')