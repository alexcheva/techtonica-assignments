class Eventonica {
  
  addEvent(name, category, location, date, time, price) {
    // Adds a new Event
    new Event(name, category, location, date, time, price);
  }

  updateEvent(id, name, category, location, date, time, price) {
    // Update existing Event
    Event.all = Event.all.map(event => {
      if(event.id === id){
        event.name = name;
        event.category = category;
        event.location = location;
        event.date = date;
        event.time = time;
        event.price = price;
      }
    });
  }

  deleteEvent(id) {
    // Deletes Event
    //find the event with .id === id
    //remove it from the Event.all
    for(let i=0; i<Event.all.length; i++){
      if(Event.all[i].id === id){
        Event.all.splice(i,1);
      }
    }
    // Event.all = Event.all.filter(event => event.id !== id);
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

  updateUser(id, username, email, firstName, lastName) {
    // Update existing User
    User.all = User.all.map(user => {
      if(user.id === id){
        user.username = username;
        user.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
      }
    });
  }

  deleteUser(id) {
    // Deletes User
    User.all = User.all.filter(user => user.id !== id);
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
  static favoriteEvents = [];

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
// Favorite Events
// A User can favorite an Event
// A User can unfavorite an Event
// A User can view their list of previously favorite events

//make a user
//make events
let eventonica = new Eventonica();
eventonica.addEvent("HIM", "concert", "UCT", new Date('12 May 2021'), "12:00 PM", 55);
console.log(Event.all)
// Event.all[0].date.setHours(5);
// Event.all[0].date.setMinutes(11);
// Event.all[0].date.setUTCHours(12,31,01)


eventonica.addEvent("POD", "concert", "UCT", new Date('12 July 2021'), "18:00 PM", 55);
//DOES NOT WORK
//eventonica.updateEvent(100,"HIM", "concert", "UCT", new Date('12 May 2021'), "18:00 PM", 55);
console.log(Event.all)