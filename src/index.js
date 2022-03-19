const express = require('express')
const morgan = require('morgan') // morgan ()
const { engine } = require("express-handlebars") // express engine
const path = require('path')    // __dirname , path
const port = 3000

const route = require('./routes')

const app = express()

// Middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// file static
app.use(express.static(path.join(__dirname,'public')))

//console.log("PATH:",path.join(__dirname,'public'))

 //app.use(morgan('combined'))

 // set view engine : Handlebar
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, '/resources/views'))

// console.log("PATH:",path.join(__dirname, '/resources/views'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})