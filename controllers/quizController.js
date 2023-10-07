
const q = require('../models/questions.js');
const questions = q.getQuestions();

exports.showQuiz = (req, res, next) => {
  
  //get a random question
  const question = questions[Math.floor(Math.random() * (questions.length-1))];
  
  res.render('quiz', {question: question});
};
