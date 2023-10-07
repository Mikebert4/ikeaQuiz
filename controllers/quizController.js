
const q = require('../models/questions.js');
const questions = q.getQuestions;

exports.showQuiz = (req, res, next) => {
  
  //check if session exists
  if (!req.session.usedQuestions) {
    req.session.usedQuestions = [];
  }


  //get a random unanswered question
  function getQuestionId() {
    const usedQuestionSet = new Set(req.session.usedQuestions);
  
    let id;
    do {
      id = Math.floor(Math.random() * questions.length);
    } while (usedQuestionSet.has(id));
    
    usedQuestionSet.add(id);
    req.session.usedQuestions = Array.from(usedQuestionSet);
  
    return id;
  }

  const answered = req.session.usedQuestions;
  const id = getQuestionId();
  const question = q.getQuestion(id);
  res.render('quiz', { id: id, q: question, answered: answered});
};


