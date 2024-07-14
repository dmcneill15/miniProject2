function showNewOrders(orders) {
    for (let i in orders) {
        const orderCardHTML = populateOrderCard(orders[i]);
        document.querySelector('#card-list').appendChild(orderCardHTML);
    }
}

function populateOrderCard(order) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector(".card-title").innerText = (`Order ID: ${order.id}`);
    template.querySelector('.card-text-customer').innerText = (`Cusomer: ${order.customerName}`);
    template.querySelector('.card-text-pizza').innerText = (`Pizza: ${order.pizzaType}`);
    template.querySelector('.card-text-extras').innerText = (`Extra Toppings: ${order.extraToppings}`);
    template.querySelector('.card-text-qty').innerText = (`Qty: ${order.quantity}`);
    template.querySelector('.card-text-drink').innerText = (`Drink: ${order.drink}`);
    template.querySelector('.card-text-status').innerText = (`Status: ${order.status}`);
    return template;
}

window.onload = function () {
    fetch("http://localhost:3000/orders?status=new")
        .then((response) => response.json())
        .then((json) => showNewOrders(json));
}