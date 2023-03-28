const express = require('express'); // об'єкт, який дозволяє створити сервер та потім його налаштувати
const app = express(); // щоб створити сервер, треба викликати експрес як функцію

//якщо прийде гет запит на '/', то виконати цю функцію
app.get('/', (req, res) => {
  console.log(req.url) // адреса, з якої прийшов запит
console.log(req.method)
console.log(req.headers)
})

app.listen(3000, () => {
  console.log("Server running")
}) // запускає сервер, вказуємо порт прослуховування

// const got = require('got');
// 
// const {router} = require('./contactsRouter')
// const thirdPartyBaseUrl = 'http://api.weatherbit.io/v2.0/current'

// app.use(express.json()); //подключить Парсер JSON 
// app.use((req, res, next) => {
//   console.log('Наше промежуточное ПО');
//   next();
// });
// app.use(router)


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.get('/contact', (req, res) => {
//   res.send('<h1>Contact page</h1>');
// });
// app.get('/contact/:id', (req, res) => {
//   res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
// });

// app.patch('/user/:userid', (req, res) => {
//   const id = req.params.userid;
//   // выполняем необходимые действия
// });

// app.get('api/weather', async (req, res) => {
//   try {
//     const searchParams = new URLSearchParams([['key', '516706e9ab61406b911113849cf6a113'], ['lat', '50.272796'], ['lon', '30.31428']]);
//     const resp = await got(thirdPartyBaseUrl, {searchParams})
//     res.json({response})
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }

// })


// {/* <form action="/login" method="POST">
//   <label for="email">Email</label>
//   <input type="text" name="email" id="email" />
//   <label for="password">Пароль</label>
//   <input type="password" name="password" id="password" />
//   <button type="submit">Войти</button>
// </form> */}
// app.post('/login', (req, res, next) => {
//   const { email, password } = req.body; /* {
//     email: 'Значение что было введено в поле input',
//     password: 'Значение что было введено в поле input'
//   }*/
//   // Выполняем необходимые операции
// });


// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });
// // определим домашний роутер


// //app.use('/my-router', myRouter);



// // app.all('/anything', (req, res, next) => {
// //   console.log('Anything method.');
// //   next(); // передаем управление дальше
// // });

