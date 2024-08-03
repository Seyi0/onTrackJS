// import {v4 as uuidv4} from 'uuid';
// const {v4: uuid} = require('uuid');

// console.log (uuidv4());

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

mongoose.set('strictQuery', false)

const json = {
    "name": "Oluwaseyi Makay",
    "occupation":"student"
};

app.get('/', (req, res)=>{
    res.send({"data":json})
})

app.post("/", (req, res) => {
    res.send("post request template");
});



const start = async () =>{
    try{
        await mongoose.connect(
        "mongodb+srv://Seyi:R1GqNWxmUJZoXibZ@cluster-test.rpdaf04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-test"
        );

        app.listen(PORT, () => {
        console.log("App listening on port " + PORT);
        });
    } catch(e){
        console.log(e.message)
    }
};

start();