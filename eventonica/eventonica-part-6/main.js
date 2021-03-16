/**
 * Add all your DOM event handlers and other UI code in this file.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  //const app = new Eventonica();

  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    fetch('/getAllEvents')
      .then(response => response.json())
      .then(data => document.querySelector("#events-list").innerHTML = data
        .map((event) => `<li>${event.id} - <strong>${event.name}</strong> - ${event.category} - <em>${event.location}</em> - ${event.date}, ${event.time}, price:  $${event.price}.</li>`)
        .join("\n"));
  };

  refreshEventsList();
  //Add event 
  const addEventForm = document.querySelector("#add-event");
  // Handle add event form submit 
  addEventForm.addEventListener("submit", (submitEvent) => {
    //submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const category = document.querySelector("#event-category").value;
    const location = document.querySelector("#event-location").value;
    const date = document.querySelector("#event-date").value;
    const time = document.querySelector("#event-time").value;
    const price = document.querySelector("#event-price").value;
    const event = app.addEvent(name, category, location, date, time, price);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });
  //handle users:
  const refreshUsersList = () => {
    fetch('/getAllUsers')
    .then(response => response.json())
    .then(data => document.querySelector("#users-list").innerHTML = data.map((user) => `<li>${user.id} - <strong>${user.username}</strong> - ${user.firstName} ${user.lastName} - ${user.email}</li>`)
      .join("\n"));
  };
  refreshUsersList();
  //ADD USER
  const addUserForm = document.querySelector("#add-user");
  addUserForm.addEventListener("submit", (submitEvent) => {
    //submitEvent.preventDefault();
    const username = document.querySelector("#add-username").value;
    const email = document.querySelector("#email").value;
    const firstName = document.querySelector("#fname").value;
    const lastName = document.querySelector("#lname").value;
    const user = app.addUser(username, email, firstName, lastName);
    console.log("Added user", user);
    refreshUsersList();
    addUserForm.reset();
  });
  //Delete User
  const deleteUserForm = document.querySelector("#delete-user");
  deleteUserForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    const deleteUserId = parseInt(document.querySelector("#delete-user-id").value);
    app.deleteUser(deleteUserId);
    console.log("User is deleted.");
    refreshUsersList();
    deleteUserForm.reset();
  });
  //Delete Event:
  const deleteEventForm = document.querySelector("#delete-event");
  deleteEventForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    const deleteEventId = parseInt(document.querySelector("#delete-event-id").value);
    app.deleteEvent(deleteEventId);
    console.log("Event is deleted.");
    refreshEventsList();
    deleteEventForm.reset();
  });
  //Filter Events
  const searchResultsH3 = document.createElement("h3")
  searchResultsH3.innerText = "Search Results:";
  const searchToolbar = document.querySelector(".search-toolbar");
  const filterEventForm = document.querySelector("#search");
  const filterEventsUl = document.querySelector("#filtered-events-list")
  const refreshFilteredEventsList = (array) => {
    filterEventsUl.parentElement.prepend(searchResultsH3);
    console.log(array);
    if(array.length === 0){
      filterEventsUl.innerHTML = `<li><em>Sorry, no events found!</em></li>`;
    }else{
      filterEventsUl.innerHTML = array
      .map((event) => `<li>${event.id} - <strong>${event.name}</strong> - ${event.category} - <em>${event.location}</em> - ${event.date}, ${event.time}, price:  $${event.price}.</li>`)
      .join("\n");
    }
    
  };
  //Filter events:
  filterEventForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    const dateInput = document.querySelector("#date-search").value;
    const categoryInput = document.querySelector("#category-search").value;
    let filteredEvents = app.findEvents(dateInput,categoryInput);
    // if( dateInput !== "" || categoryInput !== ""){
    //   filteredEvents = app.findEvents(dateInput,categoryInput);
    //   console.log(dateInput,categoryInput);
    // }
    console.log("Events:",filteredEvents);
    refreshFilteredEventsList(filteredEvents);
    filterEventForm.reset();
  });
  
});

// new Event("HIM", "concert", "The UC Theatre", "05-12-2021", "18:00 PM", 55);
// new Event("POD", "concert", "The UC Theatre", "10-21-2021", "19:30 PM", 35);
// new Event("Christian Rave", "gathering", "Church", "03-19-2021", "17:30 PM", 0);

// new User("alexpeach", "alex@peach.com", "Alex", "Peach");
// new User("tomCruise", "me@tomcruise.com", "Tom", "Cruise");
// new User("dickTracy", "dickTracy@gmail.com", "Richard", "Tracy");