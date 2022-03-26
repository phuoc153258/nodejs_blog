// Chuyen het route vao file nay rut gon file index.js(src)
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const userRouter = require('./user');

function route(app) {
    // routing
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
    app.use('/user', userRouter);
    // app.use('/search',siteRouter)

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
}
module.exports = route;
