let express = require('express'),
    router  = express.Router(),
    controller = require('../controllers/attendance')

router.route('/')
    .get(controller.getDailyAttendanceRecords)
    .post(controller.markAttandance)

router.route('/:id')
    .get()
    .patch()
    .delete()
    
    
module.exports = router    
