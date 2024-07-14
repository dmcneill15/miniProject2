const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const port = 3000;

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use('/', express.static('public'));
app.use('/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});