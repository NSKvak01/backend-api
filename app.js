const express = require ("express")
const logger = require("morgan")
const app = express()
// we bring express, logger to check what type of request was made, and app
const userRouter = require('./routes/user/userRouter')

app.use(logger("dev"))
// we activate logger

app.use(express.json())
// then ask express to know how to read json files
// parsing form data
app.use(express.urlencoded({extended:false}))

// establish path to userRouter
app.use('/api/user', userRouter)

// export app to use in server.js
module.exports = app
