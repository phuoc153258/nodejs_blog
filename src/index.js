const express = require('express');
const morgan = require('morgan'); // morgan ()
const { engine } = require('express-handlebars'); // express engine
const path = require('path'); // __dirname , path
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

const app = express();

//  connect to DB
db.connect();

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// file static
app.use(express.static(path.join(__dirname, 'public')));

//app.use(morgan('combined'))

// set view engine : Handlebar
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
