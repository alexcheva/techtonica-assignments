const models = require('./models'); 
const eventonica = new models.Eventonica();
//console.log(eventonica);
const { MY_NAME, I_LOVE } = require('./config');
console.log("My name is", MY_NAME);
console.log("I love ", I_LOVE);
// const user1 = eventonica.addUser("Alex", "email", "firstName", "lastName");
// console.log(models.User.all);

const express = require('express');
const bodyParser = require('body-parser');
// const pgp = require('pg-promise')(/* options */);
// const db = pgp('postgres://localhost:5432/eventonica');

//Example adding user to the database:
// db.none('INSERT INTO users (username, firstname, lastname, email) VALUES ($1, $2, $3, $4)', ['MrTestington', 'Test', 'Testington' , 'test@usertest.com'])
//     .then(() => {
//         // success;
//         console.log('SUCCESS: User is added to the database')
//     })
//     .catch(error => {
//         // error;
//         console.log('ERROR:', error)
//     });
// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   });

const app = express();
//body parser
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/'));
//routes:
app.get('/', (req,res) => {
  res.render('index');
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
//POST
app.post('/addEvent', (req,res) => {
  eventonica.addEvent(req.body.name, req.body.category ,req.body.location, req.body.date, req.body.time, req.body.price, null);
  console.log(models.Event.all);
  res.status(200).send("Event added!");
})
app.post('/addUser', (req,res) => {
  //let newUser = req.body;
  //console.log(newUser);
  eventonica.addUser(req.body.username, req.body.fname, req.body.lname, req.body.email);
  // eventonica.addUser(res.body).then(() => res.sendStatus(204));
  console.log(models.User.all);
  res.status(204).send("User added!");
});
app.route('/deleteUser/:id').delete((req, res) => {
  let user_id = req.params.id;
  let status = 200;
  let response = "";
  try{
    //let num = 1/0;
    eventonica.deleteUser(user_id);
    response = models.User.all;
    } catch (error) {
      status = 400;
      response = "Unable to find user data!";
    }
 // console.log(response);
  res.status(status).send(response);
})

app.listen(8000, ()=> {
  console.log("The application is running on the localhost:8000.")
});