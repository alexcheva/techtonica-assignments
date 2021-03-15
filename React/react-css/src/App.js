import logo from './logo.svg';
import './App.css';
import './Style.css';
function App() {
  return (
    <div className="App">
    {/* Start of Parent Div */}
      <div className="row mt-2 mb-2" style={{backgroundColor:"darkorange"}}>
        {/* Start of Child Divs */}
        <div className="col-3 p-2" style={{backgroundColor:"green"}}>Child Div 1</div>
        <div className="col-3 p-2" style={{backgroundColor:"red"}}>Child Div 2</div>
        <div className="col-3 p-2" style={{backgroundColor:"blue"}}>Child Div 3</div>
        {/* End of Child Divs */}
      </div>
      {/* End of Parent Div */}
  </div>
  );
}

export default App;
