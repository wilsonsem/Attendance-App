let {router} = require('express').Router(),
    controller = require('../controllers/auth')

router.route('/')
    .get(controller.showRegistrationPage)
    .post(controller.registerUser)


router.route('/:id')
    .get(controller.showLoginPage)
    .post()
    
    
module.exports = router    