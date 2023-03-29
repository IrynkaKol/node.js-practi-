const express = require("express");
const products = require("../../data/products");
const {v4} = require('uuid')

const router = express.Router(); // не стврорюємо окремий сервір, а створюємо окрему сторінку, список обробників
/*
1. Отримати всі товари
2. Знайти товар по id
3. Додати товар
4. Оновати товар по id
5. Видалити товар по id
 */

//1. Отримати всі товари
// просто '/', так як в app  прописали api/products в app.use
//GET /api/products
router.get("/", (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
});

//2. Знайти товар по id
// : означає динамічну частину маршруту (id буде змінюватись)
router.get("/:id", (req, res) => {
  //console.log(req.params)// req.params це об'єкт, в якому зберігаються всі динамічні частини
  const { id } = req.params; //вилучаємо id із req.params
  const result = products.find((item) => item._id === id); // запис item.id === id передбачає, що якщо не буде такого id_  то це буде помилка (404)
  if(!result) {
res.status(404).json({
    status: "error",
    code: 404,
    message: `Products with id=${id} not found`
})
  } // передбачаємо, якщo помилка, що немає такого id
  res.json({
    status: "success",
    code: 200,
    data: {
        result
    }
  });
});

//3. Додати товар
//POST api/products
router.post('/', (req, res) => {
    //console.log(req.body) //запит з поштманту
    const newProduct = {...req.body, id: v4()}
    products.push(newProduct);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result: newProduct
        }
    })
})

//4. Оновати товар по id
//5. Видалити товар по id

module.exports = router;
