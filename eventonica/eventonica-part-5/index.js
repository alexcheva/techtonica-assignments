const models = require('./models'); 

const eventonica = new models.Eventonica();
//console.log(eventonica);

// const user1 = eventonica.addUser("Alex", "email", "firstName", "lastName");
// console.log(models.User.all);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//body parser
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/'));
//routes:
app.get('/', (req,res) =>{
  res.render('index');
});
app.route('/users/:id').get((req,res) =>{
  let user_id = req.params.id;
  let status = 400;
  let response = 'Unable to find user data!';
  users.forEach((user) => {
    if (user['id'] == user_id) {
      res.status(200).send(user);
    }
  });
  res.status(status).send(response);

});
app.get('/events/:category', (req,res) =>{
  res.send(req.params.category);
});
app.get('/events/:category?sortBy=date', (req,res) =>{
  //res.send(req.params);
  res.send(query);
});
//POST
app.post('/addEvent', (req,res)=>{
  console.dir(req);
  res.send("Event Added");
})
app.post('/addUser', (req,res)=>{
  res.send("User Added");
 // res.render('hello', { name: req.body.username });
})
app.listen(8000, ()=> {
  console.log("The application is running on the localhost:8000.")
});