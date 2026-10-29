const { student: Student } = require('../models');

const newStudent= async (req, res) => {
  try {
    const { firstName, lastName, email, gender } = req.body;

    const existingStudent = await Student.findOne({ where: { email } });
    if (existingStudent) {
      return res.status(400).json({
        message: `Student with Email: ${email} already exists`
      });
    }

    const student = await Student.create({
      firstName,
      lastName,
      email,
      gender
    });

    return res.status(201).json({
      message: 'Student created successfully',
      data: student
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    return res.status(200).json({
      message: `All students and the total is: ${students.length}`,
      data: students
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getOneStudentWhereClause = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findAll({ where: { id } });

    if (student.length === 0) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    return res.status(200).json({
      message: 'Student Found',
      data: student
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getStudentByPK = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    return res.status(200).json({
      message: 'Student Found',
      data: student
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const findByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const student = await Student.findOne({ where: { email } });

    if (!student) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    return res.status(200).json({
      message: 'Student found',
      data: student
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { lastName, email, gender, firstName } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    const updatedStudent = await Student.update({ lastName, gender, email, firstName }, { where: { id } });
    return res.status(200).json({
      message: 'Student updated successfully',
      data: updatedStudent
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const suspendStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({
        message: 'student not found'
      });
    }

    await Student.update({ status: 'suspended' }, { where: { id } });
    return res.status(200).json({
      message: 'Student suspended successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findOne({ where: { id } });

    if (!student) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    await Student.destroy({ where: { id } });
    return res.status(200).json({
      message: 'Student deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  newStudent,
  getAllStudents,
  getOneStudentWhereClause,
  getStudentByPK,
  findByEmail,
  updateStudent,
  suspendStudent,
  deleteStudent
};