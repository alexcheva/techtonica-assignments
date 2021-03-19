require('dotenv').config();
const pgp = require('pg-promise')({});
const db = pgp(process.env.DB_CONNECTION);

class Eventonica {
  
  addEvent(name, category, location, date, time, price, user_created = 2) {
    // Adds a new Event
   new Event(name, category, location, date, time, price, user_created);
  //  db.none('INSERT INTO events (name, category, location, date, time, price, user_created) values ($2,$3,$4,$5,$6,$7,$8)').then(data => {
  //     console.log(data.id); // print new user id;
  // })
  // .catch(error => {
  //     console.log('ERROR:', error); // print error;
  // });
  }

  getEvent(id){
    return Event.all.filter(event => event.id === id)[0];
  }

  updateEvent(id, property, change) {
    // Update existing Event
    this.getEvent(id)[property] = change;
  }

  deleteEvent(id) {
    // Deletes Event
    Event.all = Event.all.filter(event => event.id !== id);
  }
  findEvents(date,category){
    if(date !== "" && category !== ""){
      return Event.all.filter(event=>event.date === date && event.category === category);
    }else{
      return Event.all.filter(event=>event.date === date || event.category === category);
    }

  }
  findEventsByDate(date) {
    // Return items in Event.all with a specified date
    return Event.all.filter(event=>event.date === date);
  }

  findEventsByCategory(category) {
    // Return items in Event.all with a specified category
    return Event.all.filter(event=>event.category === category);
  }

  addUser(username, firstName, lastName, email) {
    // Adds a new User
   // new User(username, firstName, lastName, email);
    db.none('INSERT INTO users (username, firstname, lastname, email) VALUES ($1, $2, $3, $4)', [username, firstName, lastName, email])
    .then(() => {
        // success
        console.log('SUCCESS: User is added to the database')
    })
    .catch(error => {
        // error
        console.log('ERROR:', error)
    });
  }

  getUser(userId){
    return User.all.filter(user => user.id === userId)[0];
  }

  updateUser(id, property, change) {
    // Update existing User
    this.getUser(id)[property] = change;
  }

  deleteUser(id) {
    // Deletes User
    //this.getUser(id);
    //User.all.filter(user => user.id === id).length
    User.all = User.all.filter(user => user.id !== id);
  }

  getUser(userId){
    return User.all.filter(user => user.id === userId)[0];
  }

  addFavUserEvent(userId,eventId){
    this.getUser(userId).favoriteEvents.push(eventId);
  }

  removeFavUserEvent(userId,eventId){
    let user = this.getUser(userId);
    user.favoriteEvents = user.favoriteEvents.filter(eventIds => eventIds !== eventId);
  }
}
class Event {
  static all = [];
  static _nextId = 100;

  constructor(name, category, location, date, time, price, user_created) {
    this.id = Event._nextId++;
    this.name = name;
    this.category = category;
    this.location = location;
    this.date = date;
    this.time = time;
    this.price = price;
    this.user_created = user_created;
    Event.all.push(this); // keep track of all created instances
  }

  static findByDate(date) {
    //find which events in array all have .date === date
    return Event.all.filter(event => event.date === date);
  }

  static findByCategory(category) {
    //find which events in array all have .category === category
    return Event.all.filter(event => event.category === category);
  }
}

class User {
  static all = [];
  static _nextId = 200;
  static favoriteEvents = [];

  constructor(username, firstName, lastName, email) {
    this.id = User._nextId++;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.favoriteEvents = [];
    User.all.push(this); // keep track of all created instances
  }
}

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}

// let eventonica = new Eventonica();
// eventonica.addEvent("HIM", "concert", "UCT", "05-12-2021", "12:00 PM", 55);
// eventonica.addEvent("POD", "concert", "UCT", "10-21-2021", "18:00 PM", 55);

// eventonica.addUser("alexpeach", "alex@peach.com", "Alex", "Peach");
// eventonica.addUser("tomCruise", "me@tomcruise.com", "Tom", "Cruise");
// eventonica.addUser("dickTracy", "dickTracy@gmail.com", "Richard", "Tracy");
// console.log(User.all)