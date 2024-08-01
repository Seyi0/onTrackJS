// import {v4 as uuidv4} from 'uuid';
// const {v4: uuid} = require('uuid');

// console.log (uuidv4());

const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('hey the new don is in town')
})

app.post("/", (req, res) => {
    res.send("post request template");
});

app.listen(PORT, ()=>{
    console.log ("App listening on port " + PORT)
})
