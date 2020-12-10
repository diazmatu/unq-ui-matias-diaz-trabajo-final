import React, {useEffect, useState } from 'react';

const Game = () => {
    const [vs, setVS] = useState("")
    const [playerScore, setPlayerScore] = useState()
    const [rivalScore, setRivalScore] = useState()
    const [playerChoice, setPlayerChoice] = useState()
    const [rivalChoice, setRivalChoice] = useState()
    const [matchResult, setMatchResult] = useState()

    useEffect(() => {
        setPlayerScore(0)
        setRivalScore(0)
        setPlayerChoice(document.getElementById("playerChoice"))
        setRivalChoice(document.getElementById("rivalChoice"))
    }, []);
    
    const chooseRival = (event) =>{
        if(event.target.id === "Player"){
            setVS("player")
        } else{
            setVS("computer") 
        }
        
        document.getElementById("vs").hidden = true
        rematch()
    }

    const rematch = () =>{        
        document.getElementById("userPlayer").hidden = false
        document.getElementById("result").hidden = true
        document.getElementById("matchOptions").hidden = true
        document.getElementById("changeRival").hidden = false
    }

    const computer = (event, play) =>{
        computerPlay()
        player(event, play)
        decideWinner(play, rivalChoice)
    }

    const player = (event, play) => {
        document.getElementById("userPlayer").hidden = true

        if(document.getElementById("rivalPlayer").hidden && vs === "player"){
            document.getElementById("rivalPlayer").hidden = false
        } else{
            document.getElementById("rivalPlayer").hidden = true
            document.getElementById("result").hidden = false
            document.getElementById("matchOptions").hidden = false
        } 

        setImg(event.target.id, play)

        if(play === rivalChoice){
            decideWinner(playerChoice, rivalChoice)
        }
    }

    const computerPlay = (event) => {
        const random = Math.floor(Math.random() * 5) + 1; //Devuelve nro del 1-5
        setImg(random, rivalChoice)
        console.log({rivalChoice})
    }

    const setImg = (option, img) =>{
        switch (option) {
            case 1:
            case "Rock":
                img.src = "/Images/Rock.png"
                img.hidden = false
                img.value = "Rock"
                break;
              
            case 2:
            case "Paper":
                img.src = "/Images/Paper.png"
                img.hidden = false
                img.value = "Paper"
                break;
              
            case 3:
            case "Scissors":
                img.src = "/Images/Scissors.png"
                img.hidden = false
                img.value = "Scissors"
                break;

            case 4:
            case "Lizard":
                img.src = "/Images/Lizard.png"
                img.hidden = false
                img.value = "Lizard"
                break;

            case 5:
            case "Spock":
                img.src = "/Images/Spock.png"
                img.hidden = false
                img.value = "Spock"
                break;

            default:
        }
    }

    const decideWinner = () => {
        
        if (playerChoice.value === rivalChoice.value) {
            setMatchResult("This match was a draw")
        } else{
            //Conditions Rock
            if (playerChoice.value === "Rock"){
                if(rivalChoice.value === "Paper" || rivalChoice.value === "Spock") {
                    playerLost()
                } else{
                    playerWin()
                }
            }

            //Conditions paper
            if (playerChoice.value === "Paper"){
                if(rivalChoice.value === "Scissors" || (rivalChoice.value === "Lizard")) {
                    playerLost()
                } else{
                    playerWin()
                }
            }

            //Conditions Scissors
            if (playerChoice.value === "Scissors"){
                if(rivalChoice.value === "Rock" || rivalChoice.value === "Spock"){
                    playerLost()
                } else{
                    playerWin()
                }
            }

            //Conditions Lizard
            if (playerChoice.value === "Lizard"){
                if(rivalChoice.value === "Rock" ||  rivalChoice.value === "Scissors") {
                    playerLost()
                } else{
                    playerWin()
                }
            }

            //Conditions Spock
            if (playerChoice.value === "Spock"){
                if(rivalChoice.value === "Lizard" ||  rivalChoice.value === "Paper") {
                    playerLost()
                } else{
                    playerWin()
                }        
            }
        }
    }

    const playerLost = () =>{
        if(vs === "computer"){setMatchResult("You lost this match")} 
        else{setMatchResult("The second player win this match")}
        setRivalScore(rivalScore + 1)
    }

    const playerWin = () =>{
        if(vs === "computer"){setMatchResult("You win this match")} 
        else{setMatchResult("The first player win this match")}
        setPlayerScore(playerScore + 1)
    }

    const resetScore = () =>{
        setRivalScore(0)
        setPlayerScore(0)
    }

    const enableRivals = () =>{
        resetScore()
        document.getElementById("vs").hidden = false
        document.getElementById("userPlayer").hidden = true
        document.getElementById("rivalPlayer").hidden = true
        document.getElementById("result").hidden = true
        document.getElementById("matchOptions").hidden = true
        document.getElementById("changeRival").hidden = true
    }

    return(
        <>
            <div className="letsBegin"><h2>Let the games begin!</h2></div>
          
            <div id="vs">
                <h2 id="vstext">Choose your rival</h2>
                <div id="opponent">
                <img className="button" id="Computer" src="/Images/Computer.png" value ="Computer" onClick={chooseRival}/>
                OR
                <img className="button" id="Player" src="/Images/Player.png" value ="Player" onClick={chooseRival}/>
                </div>
            </div>
            
            <div hidden id="userPlayer" className="playerButtons">Take your pick player<br/><br/>
                <img className="button" id="Rock" src="/Images/Rock.png" value ="Rock" onClick={(event) => eval(vs)(event, playerChoice)}/>
                <img className="button" id="Paper" src="/Images/Paper.png" value ="Paper" onClick={(event) => eval(vs)(event, playerChoice)}/>
                <img className="button" id="Scissors" src="/Images/Scissors.png" value ="Scissors" onClick={(event) => eval(vs)(event, playerChoice)}/>
                <img className="button" id="Lizard" src="/Images/Lizard.png" value ="Lizard" onClick={(event) => eval(vs)(event, playerChoice)}/>
                <img className="button" id="Spock" src="/Images/Spock.png" value ="Spock" onClick={(event) => eval(vs)(event, playerChoice)}/>
            </div>
            
            <div hidden id="rivalPlayer" className="playerButtons">Take your pick rival<br/><br/>
                <img className="button" id="Rock" src="/Images/Rock.png" value ="Rock" onClick={(event) => player(event, rivalChoice)}/>
                <img className="button" id="Paper" src="/Images/Paper.png" value ="Paper" onClick={(event) => player(event, rivalChoice)}/>
                <img className="button" id="Scissors" src="/Images/Scissors.png" value ="Scissors" onClick={(event) => player(event, rivalChoice)}/>
                <img className="button" id="Lizard" src="/Images/Lizard.png" value ="Lizard" onClick={(event) => player(event, rivalChoice)}/>
                <img className="button" id="Spock" src="/Images/Spock.png" value ="Spock" onClick={(event) => player(event, rivalChoice)}/>
            </div>
            
            <div hidden id="result" className="match">
                <img className="img" id="playerChoice" src="" alt="playerChoice"/>
                <img className="img" id="rivalChoice" src="" alt="rivalChoice"/>
                <div>
                    {matchResult}<br/>
                    Total Score
                    {playerScore} -- {rivalScore}
                </div>
            </div>
            
            <div hidden id="matchOptions" className="options" hidden>
                <button id="rematch" type="button" className="btn btn-outline-dark" onClick={rematch}>Rematch!</button>
                <button id="resetScore" type="button" className="btn btn-outline-dark" onClick={resetScore}>Reset Score</button></div>
            
            <div hidden id="changeRival" className="options">
                <button type="button" className="btn btn-outline-dark" onClick={enableRivals}>Change Rival</button>
            </div>
        </>
    )
}

export default Game;