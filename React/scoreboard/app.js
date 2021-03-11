const players = [  {
  name: "Guil",
  score: 50,
  id: 1
},
{
  name: "Treasure",
  score: 85,
  id: 2
},
{
  name: "Ashley",
  score: 95,
  id: 3
},
{
  name: "James",
  score: 80,
  id: 4
}];

const Header = (props) => {
  return (
    <header>
    <h1>{ props.title }</h1>
    <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>
      <Counter />
    </div>
  );
}
class Counter extends React.Component{
  //declaring state with constructor:
  // constructor() {
  //   super()
  //   this.state = {
  //     score: 0
  //   };
  // }
  //could also declare state without constructor,like this:
  state = {
    score: 0
  };
  // ^^ but not supported in all browsers, however with babel is okay

  incrementScore() {
    console.log('hi from inside incrementScore!');
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length}

      />
      {/* Players list */}
      {props.initialPlayers.map( player => 
        <Player 
          name= {player.name}
          key={player.id.toString()}
        />
        )
      }
      
    </div>
  );
}
 //console.log(title);
 ReactDOM.render(
   <App initialPlayers={players}/>,
   document.getElementById('root')

 );