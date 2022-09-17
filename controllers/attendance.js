let sql = require('../models/attendance')

exports.getAttendancePage = (req, res) => {
    res.render('index')
}

exports.markAttandance = (req, res) => {
    let details = {

        student_id: req.body.student_id,
        status:     req.body.status,
        date:       req.body.date,
        browser:    req.body.browser,
        ip_address: req.body.ip_address 

    }

    sql.query(`INSERT INTO attendance(student_id, status, date, browser, ip_address) VALUES(${details.student_id}, '${details.status}', '${details.date}', '${details.browser}', '${details.ip_address}')`, (err, data) => {
                if(err){
                    res.json(err)
                }
                else{
                    res.json(data)
                }
            })
}

exports.getDailyAttendanceRecords = (req, res) => {

    sql.query('SELECT * FROM attendance', (err, data) => {
        res.json(data)
    })

}

module.exports = exports