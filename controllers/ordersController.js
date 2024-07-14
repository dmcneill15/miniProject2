let orders = require('../models/orders');

// http://localhost:3000/orders will return all orders
// http://localhost:3000/orders?status=new
const getOrders = (req, res) => {
    let orderStatus = req.query.status;
    let filteredOrders = [...orders];

    if (orderStatus) {
        filteredOrders = filteredOrders.filter(
            (order) => order.status == orderStatus
        );
    };

    if (filteredOrders.length > 0) {
        res.status(200);
        res.json(filteredOrders);
    }
    else {
        res.status(404);
        res.json({ error: 'No orders matching query ' });
    }
};

const addNewOrder = (req, res) => {
    let newOrder = req.body;

    //confirm newOrder matches data needed for a new order
    if (!newOrder.customerName || !newOrder.pizzaType || !newOrder.quantity) {
        res.status(500).json({ error: "New order is missing info" });
    }
    else if (!newOrder.id) {
        newOrder.id = orders.length + 1;
    }

    orders.push(newOrder);
    res.status(200).json(newOrder);
}

const updateOrder = (req, res) => {
    let orderId = parseInt(req.params.id);  //need to parseInt because req returns a string
    let updatedOrder = req.body;

    //search through the orders array to find the order that needs to be updated
    let orderIndex = orders.findIndex(order => order.id == orderId);

    if (orderIndex !== -1) {
        //adds the extra toppings instead of overwritting what was originally created
        if(updatedOrder.extraToppings){
            updatedOrder.extraToppings = [...new Set([...orders[orderIndex].extraToppings, ...updatedOrder.extraToppings])];
        }
        orders[orderIndex] = { ...orders[orderIndex], ...updatedOrder};
        res.status(200);
        res.json({
            result: `Updated order with id:${orderId}`,
            data: updatedOrder
        });
    }
    else {
        res.status(404);
        res.json({ error: `Could not find order with id:${orderId}` });
    }
}

const deleteOrder = (req, res) => {
    let orderId = parseInt(req.params.id);

    let orderIndex = orders.findIndex(order => order.id == orderId);

    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        res.status(200);
        res.json({
            result: `Deleted order with id:${orderId}`,
        });
    }
    else {
        res.status(404);
        res.json({ error: `Could not find order with id:${orderId}` });
    }
}

module.exports = {
    getOrders,
    addNewOrder,
    updateOrder,
    deleteOrder
}