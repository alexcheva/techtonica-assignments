// object representation of the DOM node
const title = 'My First React Element!';
const myTitleID = 'main-title';
const desc = 'I just learned how to create a React node and render it into the DOM';
const header = (
  <header>
    <h1 id={myTitleID}>{ title }</h1>
    <p>{ desc }</p>
  </header>
);
 //console.log(title);
 ReactDOM.render(
   header,
   document.getElementById('root')

 );