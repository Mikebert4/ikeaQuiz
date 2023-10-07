//js
const express = require('express');

const quizCont = require('../controllers/quizController');

const router = express.Router();

router.get('/', quizCont.showQuiz);

module.exports = router
