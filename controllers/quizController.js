
const session = require('express-session');
const q = require('../models/questions.js');
const questions = q.getQuestions;

exports.showQuiz = (req, res, next) => {
  
  //check if session trackers exists
  if (!req.session.usedQuestions) req.session.usedQuestions = [];
  if(!req.session.score) req.session.score = 0;

  //get a random unanswered question
  function getQuestionId() {
    const questions = q.getQuestions();
    const answered = req.session.usedQuestions;
    const unanswered = questions.filter(q => !answered.includes(q.id));
    if (unanswered.length === 0) {
      req.session.usedQuestions = [];
      return getQuestionId();
    }
    const random = Math.floor(Math.random() * unanswered.length);
    return unanswered[random].id;
  }

  const answered = req.session.usedQuestions;
  const id = getQuestionId();
  const question = q.getQuestion(id);
  const score = req.session.score;
  res.render('quiz', { id: id, q: question, answered: answered.length, score: score});
};

exports.getAnswer = (req, res, next) => {
  const id = req.params.qid;
  const answer = req.params.qanswer;
  const question = q.getQuestion(id);
  const correct = question.type === answer;

  req.session.usedQuestions.push(id);
  if (correct) {
    req.session.score++;
  }

  res.render('answermodal', { correct: correct, answer: answer, q: question });
};


