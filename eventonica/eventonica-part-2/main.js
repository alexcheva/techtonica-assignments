/**
 * Add all your DOM event handlers and other UI code in this file.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();

  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all
      .map((event) => `<li><strong>${event.name}</strong> - ${event.category} - <em>${event.location}</em> - ${event.date}, ${event.time}, price:  $${event.price}.</li>`)
      .join("\n");
  };
  refreshEventsList();
  const addEventForm = document.querySelector("#add-event");
  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const event = app.addEvent(name);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });

  //handle users:
  const refreshUsersList = () =>{
    document.querySelector("#users-list").innerHTML = User.all
      .map((user) => `<li><strong>${user.username}</strong> - ${user.firstName} ${user.lastName} - ${user.email}</li>`)
      .join("\n");
  };
  refreshUsersList();
  const addUserForm = document.querySelector("#add-user");
  addUserForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const username = document.querySelector("#add-username").value;
    const email = document.querySelector("#email").value;
    const firstName = document.querySelector("#fname").value;
    const lastName = document.querySelector("#lname").value;
    const user = app.addUser(username, email, firstName, lastName);
    console.log("Added user", user);
    refreshUsersList();
    addUserForm.reset();
  });

});

new Event("HIM", "concert", "The UC Theatre", "05-12-2021", "18:00 PM", 55);
new User("alexpeach", "alex@peach.com", "Alex", "Peach");