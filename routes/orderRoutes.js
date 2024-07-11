const express = require('express');
const router = express.Router();
const orders = require('../models/orders');


//default endpoint to get all orders: /orders
/*router.get('/', (req,res) =>{
    res.json(orders);
});*/

//add filter to return users based on order status /orders?status=new
// /orders will return all orders
router.get('/', (req, res) => {
    let orderStatus = req.query.status;
    let filteredOrders = [...orders];

    if (orderStatus) {
        filteredOrders = filteredOrders.filter(
            (order) => order.status == orderStatus
        );
    };

    //if there is no orderStatus included, filteredOrders == orders and will return all orders
    if (filteredOrders.length > 0) {
        res.status(200);
        res.json(filteredOrders);
    }
    else {
        res.status(404);
        res.json({ error: 'No orders matching query ' });
    }
});

module.exports = router;