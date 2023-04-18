const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require("fs").promises;

const app = express();


// створюємо мідлвари
app.use(cors());
app.use(express.json());

// створюємо об'єкт налаштувань multer
const tempDir = path.join(__dirname, "temp")

const multerConfig = multer.diskStorage({
    destination: tempDir, // вказуємо шлях до тимчасової папки
    filename: (req, file, cb) => {
        cb(null, file.originalname) // в даному випадку зберігаємо під тим імям, що прийшло
    } // ця функція може зберегти файл не під тим імям, з яким він прийшов
})

// створюємо мідлвар з цими налаштуваннями для зберігання
const upload = multer({
    storage: multerConfig,
})

const book = [];
app.get('/api/books', (req, res) => {
    res.json(books)
});

// якщо очікуємо декілька файлів то пишемо upload.array('cover', 9) 9 -кількість файлів
// якщо очікуємо завантаження декількох полів в декількох файлах upload.fields([{name: "cover", maxCount: 2}, {name: "subcover", maxCount: 2}])
// maxCount - максимальна кількість файлів

app.post('/api/books', upload.single('cover'), async (req, res) => {
    await fs.rename('./temp/avatar.jpg', './public/books/avatar.jpg')
// console.log(req.body);
// console.log(req.file)
}) // візьми з поля cover збережи папку в temp, а текстові поля передай в req.body 

app.listen(3000)

