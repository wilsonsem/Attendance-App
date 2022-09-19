let {router} = require('express').Router(),
    controller = require('../controllers/auth')

router.route('/register')
    .get(controller.showRegistrationPage)
    .post(controller.registerUser)


router.route('/login')
    .get(controller.showLoginPage)
    .post(controller.loginUser)    

router.route('/:id')
    .get()
    .patch()
    .delete()
    
    
module.exports = router    