const { StatusCodes } = require("http-status-codes")

const User = require("../model/userModel")

let userController = {
    readAll: async (req, res) => {
        try {
            let data = await User.find({})
            res.status(StatusCodes.ACCEPTED).json({
                status: "true",
                length : data.length,
                users: data
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
            let id = req.params.id
            let data = await User.findById(id)
            res.status(StatusCodes.OK).json({
                userdetails : data,
                id : id
            })
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
            
        }
    },

    // create new user 

    createUser: async (req, res) => {
        try {
            let {name, email, mobile,address,age, role } = req.body

            let extEmail = await User.findOne({email})
            if(extEmail)
                res.status(StatusCodes.CONFLICT).json({
                    status: false,
                    msg : `${email} is already exists in DataBase`
                })
            let extMobile = await User.findOne({mobile})
            if(extMobile)
                res.status(StatusCodes.CONFLICT).json({
                    status: "false",
                    msg: `${mobile} number is already exists in DataBase`
                })

            // store the data in database
            let newUser = await User.create({
                name,
                email,
                mobile,
                address,
                age,
                role 
            })
            
            res.status(StatusCodes.CREATED).json({
                status: true,
                msg: "user created successfully",
                userDetails : newUser
            })
            
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: false,
                msg: err || "something went wrong"
            })
            
        }
    },

    // Update user

    updateUser: async (req, res) => {
        try {
            let id = req.params.id

            let extUser = await User.findById(id)

            // if not exist user
            if(!extUser)
                return res.status(StatusCodes.NOT_FOUND).json({
                    status: false,
                    msg: `request user id not found`
                })

            //getting data from db with params id and req.body  
             await User.findByIdAndUpdate({_id: id}, req.body)
            res.status(StatusCodes.ACCEPTED).json({
                status: true,
                msg: "update info update successfully",
            })
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
        }
    },

    //delete user

    deleteUser: async (req, res) => {
        id = req.params.id
        let extUser = await User.findById(id)

        if(!extUser)
            return res.status(StatusCodes.NOT_FOUND).json({
                status: false,
                msg: "requets user id not found"
            })

         await User.findByIdAndDelete({_id: id})
        try {
            res.status(StatusCodes.OK).json({
                status: true,
                msg: "user info deleted successfully",
            })
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: false,
                msg: err
            })
            
        }
    }

}

module.exports = userController