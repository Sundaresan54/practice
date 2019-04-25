var express = require('express');
var app = express();

app.get('/getProduct', (req,res)=>{
    let productValue = req.query.input1*req.query.input2;
    res.send({result:productValue})
});

app.listen(3001);
module.exports = app;