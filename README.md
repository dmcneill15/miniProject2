# miniProject2

Implement a REST API app using Node.js express framework.
The API is able to fetch all and filtered orders, add new orders, edit exsiting orders and delete orders

## How to run API on local

1. Clone this repository: 
```bash
    git clone https://github.com/dmcneill15/miniProject2.git
    cd miniProject2
```
2. Install dependencies using:
```bash
    npm install
```
3. Start the server using:
```bash
    npm start OR
    node index.js
```
4. Open POSTMAN or similar and test the endpoints:
   - Get all orders:      GET http://localhost:3000/orders
   - Get filtered orders: GET http://localhost:3000/orders?status=new
   - Add a new order:     POST http://localhost:3000/orders
   - Update an order:     PUT http://localhost:3000/orders/4
   - Delete an order:     DELETE http://localhost:3000/orders/4

### Order data model:
 ```json
{
  "id": 1,
  "customerName": "Prince William",
  "pizzaType": "Margherita",
  "extraToppings": ["cheese", "mushroom", "tomato"],
  "quantity": 1,
  "drink": "Coke",
  "status": "new"
}
```
