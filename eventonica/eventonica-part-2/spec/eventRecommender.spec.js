const { Eventonica, User, Event } = require('../models.js'); // Update with your class names and file name
let er = new Eventonica(); 


describe("Eventonica", () => {

  beforeEach(() => {
    er = new Eventonica();
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      er.addEvent("HIM", "concert", "The UC Theatre", "05-12-2021", "18:00 PM", 55);
      expect(Event.all.length).toEqual(1);
      expect(Event.all[0].name).toEqual("HIM");
    });
  });

  // describe("addUser", () => {
  //   it("adds a new User to the system", () => {
  //     er.addUser("Change Me");
  //     expect(er.user.length).toEqual(1);
  //   });
  // });

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