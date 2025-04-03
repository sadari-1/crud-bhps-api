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

app.use(express.static('views'))
// app.use(express.static(path.join(__dirname, "../views")));


//default path
// app.get(`/`, (req, res) => {
//     return res.status(StatusCodes.OK).json({
//         status : true,
//         msg : "user api"
//     })
// }).

app.use(`/`, require("./route/templateRoute"))

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
    if(process.env.MODE === "development")
        connectDb(process.env.MONGO_DEV)
    if(process.env.MODE === "production")
        connectDb(process.env.MONGO_PROD)
    console.log(`server is running at http://localhost:1312`)
})