const templateRoute = require("express").Router()
const {homeController, createController, editController  } = require("../controller/templateController")


templateRoute.get(`/`, homeController)
templateRoute.get(`/create`, createController)
templateRoute.get(`/edit`, editController)

module.exports = templateRoute
