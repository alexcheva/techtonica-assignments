class Event {
  constructor(name,description){
    this.name = name;
    this.description = description;
    this.availableTickets = []; 
  }
  addAvailableTickets(name,price){
    let ticket = new TicketType(name,price);
    this.availableTickets.push(ticket);
  }
  allTickets(){
    //that returns a string representing all ticket types and prices, like: All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)
    let result = "All tickets: ";
    this.availableTickets.forEach((ticket, i) => {
      result += `${i+1}. ${ticket.name} ($${ticket.price}) `;
    });
    return result;
  }
  searchTickets(min,max){
    let result = "Eligible tickets: ";
    let count = 0;
    // eventObj3.searchTickets(0, 250) and will return the string: Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200) for that particular call. If no tickets are available in that range, it will instead return: No tickets available.
    // for(let i=0; i<this.availableTickets.length; i++){
    //   let ticket = this.availableTickets[i];
    //   if(ticket.price >= min && ticket.price <= max){
    //     count += 1;
    //     result += `${count}. ${ticket.name} ($${ticket.price}) `;
    //   }
    // }
    this.availableTickets.filter(ticket => {
      if(ticket.price >= min && ticket.price <= max){
        count += 1;
        result += `${count}. ${ticket.name} ($${ticket.price}) `;
      }
    });
    if(result === "Eligible tickets: "){
      result = "No tickets available.";
    }
    return result;
  }
}
console.log(Event.addAvailableTickets);
class TicketType {
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
}
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);
const eventObj2 = new Event(
  'Skillet & Sevendust', 
  'Victorious war tour'
);
const eventObj3 = new Event(
  'Jenny Lewis', 
  'On the line tour 2019'
);

const eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);
//console.log(eventArray);
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

console.log(eventObj3.searchTickets(0, 250));


$(document).ready(function () {
  let html = '';
  $.each(eventArray, function (index, item) {
    html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 100)}</li>`;
  });
  // insert final html into #event...
  $('#event').html(html);
});