const { Collection } = require("mongoose")

const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        default: ""
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
}, {
    Collection: "users",
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)