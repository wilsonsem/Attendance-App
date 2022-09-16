// requiring all dependencies
require('dotenv').config()
let express = require('express'),
    app     = express(),
    bodyParser  = require('body-parser'),
    attendanceRoute = require('./routes/attendance')

// setting view engine
app.set("view engine", "ejs")


// using bodyparser to access user inputs
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api/user/:id/attendance', attendanceRoute)

// Accessing static files
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))



app.get('/', (req, res) => {
    res.render('index.html')
})

// server connection
app.listen(process.env.PORT, () => {
    console.log(`Attendance-app is listening on ${process.env.PORT}`)
})

