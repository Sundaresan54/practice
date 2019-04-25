var express = require('express');
var app = express();
var fs = require('fs');

app.get("/readfile", (req,res)=> {
    fs.readFile('./data.json','utf-8',(err,data)=> {
        if(err) {
            res.send('Internal Server Error data not found');
        }else{
            res.send({data:data}) 
        }
       
    });
    
});

app.listen(3001);
module.exports =app;