const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/api/products');


const app = express();

app.use(cors()); //приклад middleware
app.use(express.json()); // вказує в якому форматі буде req (приклад middleware)

//пишемо загальні midlleware
app.use('/api/products', productsRouter); // якщо app запит починається з api/products, шукай його обробник в productsRouter

app.listen(3000)