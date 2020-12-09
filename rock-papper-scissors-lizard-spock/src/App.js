//import logo from './logo.svg';
import './App.css';
import Game from './Game'

function App() {
  return (
    <>
      <div className="play">
        <div className="wrap">
            
              <div className="line1">
                <h1>ROCK PAPER</h1>
              </div>
              <div className="line2">
                <h1>SCISSORS LIZARD</h1>
              </div>
              <div className="line3">
                <h1>SPOCK</h1>
              </div> 
          
          <Game/>

        </div>
      </div>
      <div id="result"></div>
    </>
  );
}

export default App;
