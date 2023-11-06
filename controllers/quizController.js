
const session = require('express-session');
const q = require('../models/questions.js');
const questions = q.getQuestions;

function seenBefore(id, session) {
  //list of answered questions
  const answered = session.answers.map((item) => item[0]);

  return answered.includes(id);
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
      //console.log("seen before ("+id+"), getting another");
      return getQuestionId();
    } else {
      return id;
    }
  }
  const id = getQuestionId();
  //console.log("Displaying question: " + id);

  //render the quiz question if it exists and the quiz is not over (currently 10 questions)
  if(id>0 && req.session.answers.length < 10) {
    //display question
    const question = q.getQuestion(id);
    const score = getScore(req.session);
    res.render('quiz', { id: id, q: question, score: score});
  }else{
    //end of questions
    res.render('end', { score: getScore(req.session) });
  }
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

exports.showEnd = (req, res, next) => {
  res.render('end', { score: getScore(req.session) });
};

exports.reset = (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
};


