//import logo from './logo.svg';
import './App.css';
import Game from './Game'

function App() {
  return (
    <>
      <div id="play">
        <div className="wrap">
          <header>
            <h1>
              <span className="line1">
                ROCK PAPPER
              </span>
              <span className="line2">
                SCISSORS LIZARD
              </span>
              <span className="line3">
                SPOCK
              </span>
            </h1>   
          </header>
          
          <Game/>
          
        </div>
      </div>
      <div id="result"></div>
    </>
  );
}

export default App;
