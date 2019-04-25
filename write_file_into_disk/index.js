var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/writeDisk',(req,res)=> {
    fs.writeFile('./data.json',JSON.stringify(req.body),(err)=> {
        if(err){
            res.send("internal server error")
        }else{
            res.send("data written to the disk")
        }
    })
})

app.listen(3001);

module.exports = app;