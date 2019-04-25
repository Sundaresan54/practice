var express = require('express');
var app = express();

app.get('/nonRepeat',(req,res)=>{
    let givenData = req.query.input;
    let splitData = givenData.split('');
    var flag = false;
    splitData.map((character,i)=>{
        if(splitData.indexOf(character) == i && splitData.indexOf(character,i+1) == -1){
            flag = true;
            res.send({result:character});
        }
        if(i == splitData.length-1 && !flag){
            console.log(!flag);
            res.send("No non-repeating character");
        }
    })
})

app.listen(3001);

module.exports = app;