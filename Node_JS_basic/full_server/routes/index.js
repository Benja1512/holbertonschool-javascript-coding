const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Ruta / vinculada al método getHomepage de AppController
router.get('/', AppController.getHomepage);

// Ruta /students vinculada al método getAllStudents de StudentsController
router.get('/students', StudentsController.getAllStudents);

// Ruta /students/:major vinculada al método getAllStudentsByMajor de StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
export default app;

