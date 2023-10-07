const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    name: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

module.exports = mongoose.model('Quiz', quizSchema);

// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correctOptionIndex: Number,
});

module.exports = mongoose.model('Question', questionSchema);