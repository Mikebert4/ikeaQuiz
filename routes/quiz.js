//js
const express = require('express');

const quizCont = require('../controllers/quizController');

const router = express.Router();

router.get('/', quizCont.showQuiz);
router.get('/quiz/getanswer/:qid/:qanswer', quizCont.getAnswer);

module.exports = router
