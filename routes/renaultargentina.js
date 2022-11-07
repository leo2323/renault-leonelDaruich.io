"use strict"
const express = require("express")
require("dotenv").config();
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("renaultargentina")
})

module.exports = router;