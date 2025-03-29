const { StatusCodes } = require("http-status-code")

let userController = {
    readAll: async (req, res) => {
        try {
            res.json({
                msg: "real all user"
            })
        } catch (err) {
            res.status(StatusCodes.INERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
        }
    },

    // read single 

    readSingle: async (req, res) => {
        try {
            res.json({
                msg: "read single user"
            })
        } catch (err) {
            res.status(StatusCodes.INERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
            
        }
    },

    // create new user 

    createUser: async (req, res) => {
        try {
            res.json({
                msg: "create  user"
            })
        } catch (err) {
            res.status(StatusCodes.INERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
            
        }
    },

    // Update user

    updateUser: async (req, res) => {
        try {
            res.json({
                msg: "create  user"
            })
        } catch (err) {
            res.status(StatusCodes.INERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
            
        }
    },

    //delete user

    deleteUser: async (req, res) => {
        try {
            res.json({
                msg: "delete  user"
            })
        } catch (err) {
            res.status(StatusCodes.INERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
            
        }
    }

}

module.exports = userController