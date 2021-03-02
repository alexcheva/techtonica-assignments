// const { Eventonica, User, Event } = require('/models.js'); 

// const eventonica = new Eventonica();
// console.log(eventonica);

const { query } = require('express');
const express = require('express');
const app = express();

//app.set('view engine','html');
app.use(express.static(__dirname + '/'));
//routes:
app.get('/', (req,res) =>{
  res.render('index');
});
app.get('/users/:id', (req,res) =>{
  res.send(req.params.id);
  //res.render("card", { prompt: "wassup", hint: "sup", colors: colors});
});
app.get('/events/:category', (req,res) =>{
  res.send(req.params.category);
});
app.get('/events/:category?sortBy=date', (req,res) =>{
  //res.send(req.params);
  res.send(query);
});
app.listen(8000, ()=> {
  console.log("The application is running on the localhost:8000.")
});