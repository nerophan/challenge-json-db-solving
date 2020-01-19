const router = require('express').Router()
const studentController = require('../controllers/students')

router.get('/:id/*', studentController.getStudentProperty);
router.put('/:id/*', studentController.putStudentProperty);
router.delete('/:id/*', studentController.removeStudentProperty);

module.exports = router;
