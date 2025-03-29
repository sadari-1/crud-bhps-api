const mongoose = require("mongoose")


const connectDb = async () => {
    return mongoose.connect(process.env.MONGO_DEV)
    .then(res => {
        console.log("mongodb connected successfully")
    }).catch(err => clg
        (err)
    )
}


module.exports = connectDb