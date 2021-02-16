class Eventonica {
  
  addEvent() {
    // Adds a new Event
  }

  updateEvent(id) {
    // Update existing Event
  }

  deleteEvent(id) {
    // Deletes Event
  }

  findEventsByDate(date) {
    // Return items in Event.all with a specified date
  }

  findEventsbyCategory(category) {
    // Return items in Event.all with a specified category
  }

  addUser() {
    // Adds a new User
  }

  updateUser(id) {
    // Update existing User
  }

  deleteUser(id) {
    // Deletes User
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
    User.all.push(this); // keep track of all created instances
  }
}