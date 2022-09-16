// requiring packages
require('dotenv').config()
let sql = require('mysql')

// creating a connection with sql credentials
const dbConnection = sql.createConnection({

    host: 'localhost',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: ''

})

// connection method
dbConnection.connect()

// exporting connection
module.exports = dbConnection