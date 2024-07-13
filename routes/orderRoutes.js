const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');


router.get('/', (req, res) => {
    ordersController.getOrders(req,res);
});

//add a new order using POST
router.post('/',(req,res)=>{
    ordersController.addNewOrder(req,res); 
});

//update an order
router.put('/:id', (req,res)=>{
    ordersController.updateOrder(req, res);
});

//delete an order
router.delete('/:id', (req, res)=>{
    ordersController.deleteOrder(req, res);
});

module.exports = router;