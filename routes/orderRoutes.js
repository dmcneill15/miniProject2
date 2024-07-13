const express = require('express');
const router = express.Router();
const orders = require('../models/orders');


//default endpoint to get all orders: /orders
/*router.get('/', (req,res) =>{
    res.json(orders);
});*/

//add filter to return users based on order status /orders?status=new
// http://localhost:3000/orders will return all orders
// http://localhost:3000/orders?status=new
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

//add a new order using POST
router.post('/',(req,res)=>{
    let newOrder = req.body;

    //confirm newOrder matches data needed for a new order
    if(!newOrder.customerName || !newOrder.pizzaType || !newOrder.quantity){
        res.status(500).json({error:"New order is missing info"});
    }
    else if(!newOrder.id){
        newOrder.id = orders.length + 1;
    }

    orders.push(newOrder);
    res.status(200).json(newOrder);
});

module.exports = router;