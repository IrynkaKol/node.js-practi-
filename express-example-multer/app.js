const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('./temp');

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

app.post('/api/books', upload.single('cover'), async (req, res) => {
console.log(req.body);
console.log(req.file)
}) // візьми з поля cover збережи папку в temp, а текстові поля передай в req.body 

app.listen(3000)

