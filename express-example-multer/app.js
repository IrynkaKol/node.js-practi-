const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const { v4 } = require("uuid");

const app = express();

// створюємо мідлвари
app.use(cors());
app.use(express.json());

// створюємо об'єкт налаштувань multer
const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir, // вказуємо шлях до тимчасової папки
  filename: (req, file, cb) => {
    cb(null, file.originalname); // в даному випадку зберігаємо під тим імям, що прийшло
  }, // ця функція може зберегти файл не під тим імям, з яким він прийшов
});

// створюємо мідлвар з цими налаштуваннями для зберігання
const upload = multer({
  storage: multerConfig,
});

const books = [];

app.get("/api/books", (req, res) => {
  res.json(books);
});

// якщо очікуємо декілька файлів в полі cover upload.array('cover', 9) 9 -кількість файлів
// якщо очікуємо завантаження декількох полів в декількох файлах upload.fields([{name: "cover", maxCount: 2}, {name: "subcover", maxCount: 2}])
// maxCount - максимальна кількість файлів

const booksDir = path.join(__dirname, "public", "books");

app.post("/api/books", upload.single("cover"), async (req, res) => {
  const { path: tempUpload, originalname } = req.file; // з req.file беремо шлях до файлу і і'мя файлу
  const resultUpload = path.join(booksDir, originalname);
  await fs.rename(tempUpload, resultUpload); // переносить файл із папки temp в папку books
  // await fs.rename('./temp/avatar.jpg', './public/books/avatar.jpg')
  const cover = path.join("public", "books", originalname); // відносно сервера
  const newBook = {
    id: v4(),
    ...req.body,
    cover,
  };
  books.push(newBook);

  res.status(201).json(newBook);
  //  console.log(req.body);
  //  console.log(req.file)
  /*[Object: null prototype] { title: 'Missing', author: 'Kipling' }
{
  fieldname: 'cover',
  originalname: 'avatar.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'C:\\Users\\pc\\Desktop\\node.js-practic\\express-example-multer\\temp',
  filename: 'avatar.jpg',
  path: 'C:\\Users\\pc\\Desktop\\node.js-practic\\express-example-multer\\temp\\avatar.jpg',
  size: 37152
}*/
}); // візьми з поля cover збережи папку в temp, а текстові поля передай в req.body

app.listen(3000);
