const { StatusCodes } = require("http-status-codes");
const path = require("path");

const homeController = async (req, res) => {
    try {
        res.sendFile(path.resolve(__dirname, "../views/index.html")); // ✅ Corrected path
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: false,
            msg: err.message
        });
    }
};

const createController = async (req, res) => {
    try {
        res.sendFile(path.resolve(__dirname, "../views/create.html"));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: false,
            msg: err.message
        });
    }
};

const editController = async (req, res) => {
    try {
        res.sendFile(path.resolve(__dirname, "../views/update.html"));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: false,
            msg: err.message
        });
    }
};

// ✅ Ensure the export statement is correct
module.exports = { homeController, createController, editController };






























































// const { StatusCodes } = require("http-status-codes")

// const homeController = async(req, res) => {
//     try {
//         res.sendFile('index.html')
        
//     } catch (err) {
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             status: false,
//             msg: err.message
//         })
        
//     }
// }

// const createController = async(req, res) => {
//     try {
//         res.sendFile('create.html')
        
//     } catch (err) {
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             status: false,
//             msg: err.message
//         })
        
//     }
// }

// const editController = async(req, res) => {
//     try {
//         res.sendFile('update.html')
        
//     } catch (err) {
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             status: false,
//             msg: err.message
//         })
        
//     }
// }

// module.exports= {homeController, createController, editController }