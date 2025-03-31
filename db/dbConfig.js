const mongoose = require("mongoose")


const connectDb = async (url) => {
    // return mongoose.connect(process.env.MONGO_DEV)
    return await mongoose.connect(url)

    .then(res => {
        if(process.env.MODE === "development")
            console.log(`local mongodb connected successfully`)
        if(process.env.MODE === "production")
            console.log(`cloud mongodb connected successfully`);
            
    }).catch(err => clg
        (err)
    )
}


module.exports = connectDb