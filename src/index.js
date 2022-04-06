const express = require('express');
const morgan = require('morgan'); // morgan ()
const { engine } = require('express-handlebars'); // express engine
const path = require('path'); // __dirname , path
const methodOverride = require('method-override');

const port = 3000;

const route = require('./routes');
const db = require('./config/db');
const sortMiddleware = require('./app/middlewares/SortMiddleware');

const app = express();

app.use(sortMiddleware)

app.use(methodOverride('_method'));

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
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default'

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending'
                };
                const types = {
                    default: 'desc',
                    desc: 'asc',
                    asc: 'desc'

                }
                const icon = icons[sortType]
                const type = types[sortType]

                return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`
            }
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
