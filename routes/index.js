//load express module
const express = require("express");

//initialize only the Router functionality from express framework
const router = express.Router();

//Require our index controller
const indexCntrl = require("../controllers/index");

// Check if the user is logged in
const {checkType} = require("../config/checkType");

// router.use(express.urlencoded({ extended: true }));

//Routes
router.get("/", checkType(1), indexCntrl.index);

module.exports = router;