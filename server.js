const express = require ('express');
const app = express();
app.set ('view engine', 'hbs');

const expressHbs = require("express-handlebars");

app.engine("hbs", expressHbs.engine(
    {
       layoutsDir: "views/layouts",
       defaultLayout: "layout",
       extname: "hbs"
    }
));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/', express.static(__dirname + '/'));

const homeRouter = require('./routes/homeRouter.js');
const apiRouter = require('./routes/apiRouter.js');

app.use('/', homeRouter);
app.use('/api', apiRouter);

app.use(function (req, res, next) {
   res.status(404).send('Страница не найдена');
});

app.listen(3000, () => console.log ('Сервер работает на http://localhost:3000'));
