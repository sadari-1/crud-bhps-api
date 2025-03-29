const express = require("express")
// config settings to access env variables
require('dotenv').config()
// const {StatusCodes} = require("http-status-code")
const { StatusCodes } = require("http-status-codes")

// import db config methos
const connectDb = require("./db/dbConfig")
const PORT = process.env.PORT
const app = express()

// body parser 
app.use(express.urlencoded({ extended: true}))
app.use(express.json())


//default path
app.get(`/`, (req, res) => {
    return res.status(StatusCodes.OK).json({
        status : true,
        msg : "user api"
    })
})

// api route 
app.use(`/api/user`, require("./route/userRoute"))


// pnf path
app.all(`*`, async(req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        status: false,
        msg : `request path not found`
    })
})

// connecting server 
app.listen(PORT, () => {
    connectDb()
    console.log(`server is running at http://localhost:1312`)
})