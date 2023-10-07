// questionController.js (Sample controller, adapt it to your needs)
const Question = require('../models/Question');

// Sample function to create a new question
exports.createQuestion = async (req, res) => {
  try {
    const { text, options, correctOptionIndex } = req.body;
    const question = new Question({ text, options, correctOptionIndex });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Other controller functions (update, delete, etc.) can be added as needed