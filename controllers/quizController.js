
const session = require('express-session');
const q = require('../models/questions.js');
const questions = q.getQuestions;

function seenBefore(id, session) {
  return session.answers.includes([id, true]) || session.answers.includes([id, false]);
}

function getScore(session) {
  return [session.answers.filter((item) => item[1]).length, session.answers.length];
}


exports.showQuiz = (req, res, next) => {
  
  //check if session trackers exists
  if (!req.session.answers) req.session.answers = [];

  //get a random unanswered question
  function getQuestionId() {
    const answered = req.session.answers;
    const id = Math.floor(Math.random() * questions.length);
    if (answered.length === questions.length) {
      return -1;
    } else if (seenBefore(id, req.session)) {
      return getQuestionId();
    } else {
      return id;
    }
  }
  const id = getQuestionId();
  const question = q.getQuestion(id);
  const score = getScore(req.session);
  console.log(score);
  res.render('quiz', { id: id, q: question, score: score});
};

exports.getAnswer = (req, res, next) => {
  const id = req.params.qid;
  const answer = req.params.qanswer;
  const question = q.getQuestion(id);
  const correct = question.type === answer;

  req.session.answers.push([id, correct]);
  if (correct) {
    req.session.score++;
  }

  res.render('answermodal', { correct: correct, answer: answer, q: question });
};


