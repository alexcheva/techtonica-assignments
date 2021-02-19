const { Eventonica, User, Event } = require('../models.js'); // Update with your class names and file name
let er = new Eventonica(); 
er.addEvent("HIM", "concert", "The UC Theatre", "05-12-2021", "18:00 PM", 55);
er.addEvent("POD", "concert", "The UC Theatre", "10-21-2021", "19:30 PM", 35);
er.addEvent("Christian Rave", "gathering", "Church", "03-19-2021", "17:30 PM", 0);
er.addUser("alexpeach", "alex@peach.com", "Alex", "Peach");

describe("Eventonica", () => {

  // beforeEach(() => {
  //   er = new Eventonica();
  // });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      expect(Event.all.length).toEqual(3);
      expect(Event.all[0].name).toEqual("HIM");
    });
  });
  describe("findEventsByDate", () => {
    it("find all Events that match a date", () => {
      expect(er.findEventsByDate("05-12-2021").length).toEqual(1);
      expect(er.findEventsByDate("05-12-2021")[0].name).toEqual("HIM");
    });
  });
  describe("findEventsByCategory", () => {
    it("find all Events that match a category", () => {
      expect(er.findEventsByCategory("concert").length).toEqual(2);
      expect(er.findEventsByCategory("concert")[0].name).toEqual("HIM");
      expect(er.findEventsByCategory("concert")[1].name).toEqual("POD");
    });
  });

  describe("updateUser", () => {
    it("updates a User in the system", () => {
      er.updateUser(200, "email", "alex@gmail.com");
      expect(User.all[0].email).toEqual("alex@gmail.com");
    });
  });

  // describe("saveUserEvent", () => {
  //   it("adds an event to a user's personal event array", () => {
  //     er.addEvent("Make a new event");
  //     er.addUser("Make a new user");
  //     er.saveUserEvent("event", "user"); // change these to match your method signature
  //     expect(er.user.personalEvents.length).toEqual(1);
  //   });
  // });

  // describe("deleteUser", () => {
  //   it("removes a User from the system", () => {
  //     er.addUser("Make a new user here that you will delete later");
  //     er.deleteUser("Change Me");
  //     expect(er.user.length).toEqual(0);
  //   });
  // });

  // describe("deleteEvent", () => {
  //   it("removes the event from the system", () => {
  //     er.addEvent("A new event that you will delete later");
  //     er.deleteEvent("Change Me");
  //     expect(er.events.length).toEqual(0);
  //   });
  // });
});