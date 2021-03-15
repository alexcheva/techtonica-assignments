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

  findEventsByDate(date) {
    // Return items in Event.all with a specified date
    return Event.all.filter(event=>event.date === date);
  }

  findEventsbyCategory(category) {
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

  favoriteUserEvent(userId,eventId){
    this.getUser(userId).favoriteEvents.push(eventId);
    // User.all.map(user => {
    //   if(user.id === userId){
    //     user.favoriteEvents.push(eventId);
    //   }
    // });
  }
  removeFavoriteUserEvent(userId,eventId){
    let user = this.getUser(userId);
    user.favoriteEvents = user.favoriteEvents.filter(eventIds => eventIds !== eventId);
    // User.all.map(user => {
    //   if(user.id === userId){
    //     user.favoriteEvents = user.favoriteEvents.filter(eventIds => eventIds !== eventId);
    //   }
    // });
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
    // decide what properties are required
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

//make a user
//make events
let eventonica = new Eventonica();
eventonica.addEvent("HIM", "concert", "UCT", new Date('12 May 2021'), "12:00 PM", 55);
// console.log(Event.all)
// Event.all[0].date.setHours(5);
// Event.all[0].date.setMinutes(11);
// Event.all[0].date.setUTCHours(12,31,01)


eventonica.addEvent("POD", "concert", "UCT", new Date('12 July 2021'), "18:00 PM", 55);
//console.log(Event.all)
eventonica.updateEvent(100, "time", "18:00 PM");
//eventonica.deleteEvent(101);
// console.log(Event.all)
eventonica.addUser("alexpeach", "alex@peach.com", "Alex", "Peach");
eventonica.addUser("tomCruise", "me@tomcruise.com", "Tom", "Cruise");
eventonica.addUser("dickTracy", "dickTracy@gmail.com", "Richard", "Tracy");
console.log(User.all);
eventonica.updateUser(200, "email", "alex@gmail.com");
console.log(eventonica.getUser(200));
// console.log(User.all)
// eventonica.favoriteUserEvent(202,101);
// console.log(eventonica.getUser(202));
// eventonica.removeFavoriteUserEvent(202,101);
// console.log(eventonica.getUser(202));