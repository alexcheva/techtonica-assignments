// object representation of the DOM node
const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title.'},
  'My First React Element!'
);

const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React node and render it into the DOM'
);
const header = React.createElement(
  'header',
  //no properties specified
  null,
  //children
  title,
  desc
);
 //console.log(title);
 ReactDOM.render(
   header,
   document.getElementById('root')

 );