import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={ { margin:"10px 0", backgroundColor:"orange", display:"flex"}} >
    {/* Start Parent Div */}
    <div>
    {/* Start of Child Divs */}
    <div style={{flexBasis:"25%",padding:"10px",backgroundColor:"green"}}>Child Div 1</div>
    <div style={{flexBasis:"25%",padding:"10px",backgroundColor:"green"}}>Child Div 2</div>
    <div style={{flexBasis:"25%",padding:"10px",backgroundColor:"green"}}>Child Div 3</div>
    {/* End of Child Divs */}
    </div>
    {/* End of Parent Div */}
    </div>
  );
}

export default App;
