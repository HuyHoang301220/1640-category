const path = require('path')
const express = require('express')
const {engine} = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;

const route = require('./routes/indexRoute')
// Connect DB
const db = require('./config/db')
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
       express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b)=> a + b
    }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, ()=> console.log(`App listening on port: ${port} `));