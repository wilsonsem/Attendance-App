// requiring all dependencies
require('dotenv').config()
let express = require('express'),
    app     = express(),
    bodyParser  = require('body-parser'),
    attendanceRoute = require('./routes/attendance'),
    attendance      = require('./models/attendance')

// setting view engine
app.set("view engine", "ejs")


// using bodyparser to access user inputs
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Accessing static files
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))

app.use('/api/user/:id/attendance', attendanceRoute)


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/dashboard', (req, res) =>{
    res.render('dashboard')
})

// server connection
app.listen(process.env.PORT, () => {
    console.log(`Attendance-app is listening on ${process.env.PORT}`)
})

