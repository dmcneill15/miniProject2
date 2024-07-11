const express = require('express');
const router = express.Router();
const orders = require('../models/orders');


//default endpoint to get all orders
router.get("/", (req,res) =>{
    res.json(orders);
});

module.exports = router;