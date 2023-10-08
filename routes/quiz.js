//js
const express = require('express');

const quizCont = require('../controllers/quizController');

const router = express.Router();

router.get('/', quizCont.showQuiz);
router.get('/quiz/getanswer/:qid/:qanswer', quizCont.getAnswer);
router.get('/reset', quizCont.reset);

module.exports = router
