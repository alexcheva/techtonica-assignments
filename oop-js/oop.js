class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.renewalLimit = 5;
  }
  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 21);  // 21 days is 3 weeks
  }
}
class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
    this.renewalLimit = 1;
  }
  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 14);  // 14 days is 2 weeks
  }
}
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = []; // list of books checked out from library
  }
  checkOut(book) {
    this.libraryBooks.push(book);
    const borrowedDate = new Date();
    const dueDate = book.calculateDueDate(borrowedDate);
    return dueDate;
  }
  getLastBook(){
    const lastBook = this.libraryBooks[this.libraryBooks.length - 1];
    return lastBook;
  }
}

// Create at least 2 instances of Borrower, 2 instances of regular Book, and 2 instances of AudioBook
let customer1 = new Borrower (1, "Alex", "V", "Luk", 555-444-66);
let customer2 = new Borrower (2, "Harry", "L", "Stern", 555-446-33);

// Make one borrower check out 3 books
const book1 = new Book(2325325, "mew meaw", "Kim", "Kitty");
const book2 = new Book(234325325, "Puss in Boots", "Giovanni", "Straparola");
const book3 = new Book(24325325, "Wow! I mean meaw!", "Tom", "Cat");
customer1.checkOut(book1);
customer1.checkOut(book2);
customer1.checkOut(book3);
// Log the Books the person borrowed
console.log(customer1.libraryBooks);
// Log the last Book the person borrowed
console.log(customer1.getLastBook());