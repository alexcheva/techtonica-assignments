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
app.route('/').get((req,res) => {
  res.render('index');
}).post((req,res)=>{
  eventonica.addEvent(req.body.name, req.body.category, req.body.location, req.body.date, req.body.price);
  res.render('index');
  console.log(models.Event.all);
});

app.route('/users/:id').get((req,res) => {
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

app.get('/getAllEvents', (req,res) => {
  res.send(models.Event.all);
});
app.get('/getAllUsers', (req,res) => {
  res.send(models.User.all);
});

app.get('/events/:category', (req,res) => {
  res.send(req.params.category);
});

app.get('/events/:category?sortBy=date', (req,res) => {
  //res.send(req.params);
  res.send(query);
});
//POST:
app.route('/addEvent').post((req,res) => {
  eventonica.addEvent(req.body.name, req.body.category, req.body.location, req.body.date, req.body.time, req.body.price);
  
  console.log(models.Event.all);
  res.status(200).redirect(301, '/');
})
//   .get((req,res) => {
//   res.redirect(301, '/');
// });

app.post('/addUser', (req,res) => {
  eventonica.addUser(req.body.username, req.body.email, req.body.fname, req.body.lname);
  console.log(models.User.all);
  res.status(200).send("User added!");
});
//DELETE:
app.route('/deleteUser/:id').delete((req, res) => {
  let user_id = req.params.id;
  let status = 200;
  let response = "";
  if(eventonica.getUser(user_id)){
    eventonica.deleteUser(user_id);
    response = models.User.all;
    }else{
      status = 400;
      response = "Unable to find user data!";
    }
 // console.log(response);
  res.status(status).send(response);
});

app.route('/deleteEvent/:id').delete((req, res) => {
  let event_id = req.params.id;
  console.log(event_id);
  let status = 200;
  let response = "";
  if(eventonica.getEvent(event_id)){
    eventonica.deleteEvent(event_id);
    response = models.Event.all;
    }else{
      status = 400;
      response = "Unable to find Event data!";
    }
 // console.log(response);
  res.status(status).send(response);
});
//UPDATE:
app.route('/updateUser/:id').put((req,res) =>{
  eventonica.updateUser(req.params.id, property, change);
});

app.route('/updateEvent/:id').put((req,res) => {
  eventonica.updateEvent(req.params.id, property, change);
});

app.listen(8000, () => {
  console.log("The application is running on the localhost:8000.")
});