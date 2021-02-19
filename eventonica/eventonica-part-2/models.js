class Eventonica {
  
  addEvent(name, category, location, date, time, price) {
    // Adds a new Event
    new Event(name, category, location, date, time, price);
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

  addUser(username, email, firstName, lastName) {
    // Adds a new User
    new User(username, email, firstName, lastName);
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

  constructor(name, category, location, date, time, price) {
    this.id = Event._nextId++;
    this.name = name;
    this.category = category;
    this.location = location;
    this.date = date;
    this.time = time;
    this.price = price;
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

  constructor(username, email, firstName, lastName) {
    this.id = User._nextId++;
    // decide what properties are required on an instance
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteEvents = [];
    User.all.push(this); // keep track of all created instances
  }
}

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}
