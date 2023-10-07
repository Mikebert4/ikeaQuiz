//Congigure the server
const port = process.env.PORT || 3000;

//setup express
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const quizRoutes = require('./routes/quiz');

//routes
app.use(quizRoutes);

//start server 
app.listen(port, () => console.log('Server running on port '+ port));