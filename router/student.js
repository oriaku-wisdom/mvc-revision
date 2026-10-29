const express = require('express');
const {
  newStudent,
  getAllStudents,
  getOneStudentWhereClause,
  getStudentByPK,
  findByEmail,
  updateStudent,
  suspendStudent,
  deleteStudent
} = require('../controller/student');

const router = express.Router();

router.post('/newStudent', newStudent);
router.get('/allStudents', getAllStudents);
router.get('/onestudent/:id', getOneStudentWhereClause);
router.get('/onestudentbyPk/:id', getStudentByPK);
router.get('/onestudentbyemail/:email', findByEmail);
router.put('/updateStudent/:id', updateStudent);
router.patch('/suspendStudent/:id', suspendStudent);
router.delete('/deleteStudent/:id', deleteStudent);

module.exports = router;
