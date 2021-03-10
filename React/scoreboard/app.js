// object representation of the DOM node
const title = <h1>My First React Element!</h1>;

const desc = <p>I just learned how to create a React node and render it into the DOM</p>;
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