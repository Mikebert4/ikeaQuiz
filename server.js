//Congigure the server
const port = process.env.PORT || 3000;

//setup express
const express = require('express');
const sessions = require('express-session');
const path = require('path');

const app = express();

//session setup
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'assets')));

//import routes
const quizRoutes = require('./routes/quiz');

//routes
app.use(quizRoutes);

//start server 
app.listen(port, () => console.log('Server running on port '+ port));