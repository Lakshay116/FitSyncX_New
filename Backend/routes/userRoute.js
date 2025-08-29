const express = require('express');
const router = express.Router();

const { signupValidation, loginValidation } = require('../helper/validation');
const usercontroller = require('../controller/usercontroller');
const multer = require('../config/multer');

// User authentication routes
router.post('/register', signupValidation, usercontroller.register);
router.post('/login', loginValidation, usercontroller.login);
router.post('/admin/login', loginValidation, usercontroller.admin_login);

// User management routes
router.get('/users', usercontroller.getUsers);
router.post('/users', usercontroller.insert_user);
router.delete('/users/:id', usercontroller.delete_user);
router.delete('/trainers/:id', usercontroller.delete_trainer);
router.post('/contact', usercontroller.contactSubmit);

// Attendance routes
// router.get('/attendance/:userId', usercontroller.getUserAttendance);
// router.post('/attendance/mark', usercontroller.markAttendance);

module.exports = router;
