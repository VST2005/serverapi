const express = require('express');
const contactController = require('../controllers/Contactcontroller');
const TeacherController = require('../controllers/Teachercontroller');
const coursecontroller = require('../controllers/coursecontroller');
const UserController = require('../controllers/UserController');
const Bookingcontroller = require('../controllers/Bookingcontroller');
const router = express.Router();
const checkAuth = require('../middleware/auth');





//contact
router.get('/contact',contactController.display)
router.post('/create',contactController.create)
router.get('/view/:id',contactController.view)
router.put('/update/:id',contactController.update)
router.delete('/delete/:id',contactController.delete)




//teacher
router.get('/contact',TeacherController.display)
router.post('/create/teacher',TeacherController.create)









//course
router.get('/course',coursecontroller.display)
router.post('/course/create',coursecontroller.create)
router.get('/courseview/:id',coursecontroller.view)
router.put('/courseupdate/:id',coursecontroller.update)
router.delete('/coursedelete/:id',coursecontroller.delete)







//user
router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.get('/profile',checkAuth,UserController.profile)
router.get('/logout',UserController.logOut)





//booking
router.post('/booking/create/:courseId',checkAuth,Bookingcontroller.createBooking);
router.get('/booking/mybookings',checkAuth,Bookingcontroller.getUserBookings);
router.get('/admin/bookings',checkAuth,Bookingcontroller.getAllBookings)









module.exports = router