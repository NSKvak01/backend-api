// we bring mongoose, app, and dotenv because we will use process.env
const mongoose = require("mongoose")
const app = require('./app')
require("dotenv").config()

// define port
const port = 3000

// connect our database to port 
mongoose
    .connect(process.env.MONGO_DB, {
        // need to use these, otherwise mongodb will give errors
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    // console log mongoDB Connected to check if it's really connected in console
    .then (()=> {
        app.listen(port, ()=>{
            console.log(`Server connected on ${port}`)
            console.log("MongoDB Connected")
        })
    })
    .catch((e)=>{
        console.log(e)
    })

    