//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div id="play">
        <div class="wrap">
          <header>
            <h1>
              <span class="line1">
                <span class="R">R</span>
                <img class="o" src="images/rock.png" style="margin-bottom: 0px; margin-top: 20px; opacity: 1; visibility: visible;"/>
                <span class="ck">ck</span>
                <span class="p">p</span>
                <img class="a" src="images/paper.png" style="margin-bottom: 0px; margin-top: 25px; transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1; visibility: visible;"/>
                <span class="per">per</span>
              </span>
              <span class="line2">
                <span class="s">s</span>
                <img class="c" src="images/scissors.png" style="margin-right: 0px; margin-left: 3px; opacity: 1; visibility: visible;"/>
                <span class="issors">issors</span>
                <span class="li">li</span>
                <img class="z" src="images/lizard.png" style="transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1; visibility: visible;"/>
                <span class="ard">ard</span><br/>
              </span>
              <span class="line3">
                <span class="sp">sp</span>
                <img class="o2" src="images/spock.png" style="opacity: 1; visibility: visible; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"/> 
                <img class="teleport o2" src="images/spock-teleport.png" style="opacity: 0; visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0);"/>
                <span class="ck">ck</span>
              </span>
            </h1>   
          </header>
          
          <h2 class="prompt" style="height: 71px; padding-top: 0px; opacity: 1; margin-left: 0px;">Let the game begin!</h2>
          
          <div id="urlBox" style="display: none;">
            <p>Send this URL to your friend, then wait here for them to show up.</p>
            <input type="text" name="url" class="url" value="waiting for opponent..."/>
            <p>or <a href="https://rpsls.net/?random">play a random stranger [beta]</a></p>
          </div>
          
          <div id="vs">
            <p id="vstext">VS</p>
            <div id="opponent">
            </div>
          </div>
          
          <div id="icons" style="display: block;">
            <div class="rock" style="opacity: 1; visibility: visible; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
            <div class="paper" style="opacity: 1; visibility: visible; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
            <div class="scissors" style="opacity: 1; visibility: visible; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
            <div class="lizard" style="opacity: 1; visibility: visible; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
            <div class="Spock" style="opacity: 1; visibility: visible; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
          </div>
          
          <p id="subprompt" style="margin-left: 0px; opacity: 1; visibility: visible;">Take your pick</p>
          <p id="rematch" class="button">Rematch!</p>
        </div>
      </div>
      <div id="content"></div>
    </>
  );
}

export default App;
