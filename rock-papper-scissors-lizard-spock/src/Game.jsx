import React, {useEffect, useState } from 'react';

const Game = () => {
    const [vs, setVS] = useState("")
    const [playerScore, setPlayerScore] = useState()
    const [rivalScore, setRivalScore] = useState()
    const [playerChoice, setPlayerChoice] = useState()
    const [rivalChoice, setRivalChoice] = useState()
    const [rock, setRock] = useState()
    const [paper, setPaper] = useState()
    const [scissors, setScissors] = useState()
    const [lizard, setLizard] = useState()
    const [spock, setSpock] = useState()
    const [matchResult, setMatchResult] = useState()

    useEffect(() => {
        setPlayerScore(0)
        setRivalScore(0)
        setPlayerChoice(document.getElementById("playerChoice"))
        setRivalChoice(document.getElementById("rivalChoice"))
        setRock(document.getElementById("Rock"))
        setPaper(document.getElementById("Paper"))
        setScissors(document.getElementById("Scissors"))
        setLizard(document.getElementById("Lizard"))
        setSpock(document.getElementById("Spock"))
    }, []);

    const playerLost = () =>{
        console.log(vs)
        if(vs === "computer"){setMatchResult("You lost this match")} 
        else{setMatchResult("The second player win this match")}
        setRivalScore(rivalScore + 1)
    }

    const playerWin = () =>{
        console.log("pre")
        console.log(playerScore)
        console.log(rivalScore)
        if(vs === "computer"){setMatchResult("You win this match")} 
        else{setMatchResult("The first player win this match")}
        setPlayerScore(playerScore + 1)
        console.log("post")
        console.log(playerScore)
        console.log(rivalScore)
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

    const chooseRival = (event) =>{
        if(event.target.id === "Player"){
            setVS("player")
        } else{
            setVS("computer") 
        }
        rematch()
        document.getElementById("userPlayer").hidden = false
        document.getElementById("changeRival").hidden = false
        document.getElementById("vs").hidden = true
    }

    const hideOptions = () =>{
        rock.hidden = true
        paper.hidden = true
        scissors.hidden = true
        lizard.hidden = true
        spock.hidden = true
    }

    const rematch = () =>{
        playerChoice.hidden = true
        rivalChoice.hidden = true
        
        document.getElementById("userPlayer").hidden = false
        document.getElementById("rematch").hidden = true
        document.getElementById("result").hidden = true
        document.getElementById("matchOptions").hidden = true

        rock.hidden = false
        paper.hidden = false
        scissors.hidden = false
        lizard.hidden = false
        spock.hidden = false   

    }

    const setRockImg = (img) =>{
        img.src = "/Images/Rock.png"
        img.hidden = false
        img.value = "Rock"
    }

    const setPaperImg = (img) =>{
        img.src = "/Images/Paper.png"
        img.hidden = false
        img.value = "Paper"
    }

    const setScissorsImg = (img) =>{
        img.src = "/Images/Scissors.png"
        img.hidden = false
        img.value = "Scissors"
    }

    const setLizardImg = (img) =>{
        img.src = "/Images/Lizard.png"
        img.hidden = false
        img.value = "Lizard"
    }

    const setSpockImg = (img) =>{
        img.src = "/Images/Spock.png"
        img.hidden = false
        img.value = "Spock"
    }

    const computerPlay = (event) => {

        const random = Math.floor(Math.random() * 5) + 1; //Devuelve nro del 1-5
        
        switch (random) {
            case 1:
                setRockImg(rivalChoice)
                break;
              
            case 2:
                setPaperImg(rivalChoice)
                break;
              
            case 3:
                setScissorsImg(rivalChoice)
                break;

            case 4:
                setLizardImg(rivalChoice)
                break;

            case 5:
                setSpockImg(rivalChoice)
                break;

            default:
        }
    }

    const computer = (event) =>{
        console.log(vs)
        playerPlay(event.target.id, playerChoice)
        computerPlay()
        decideWinner(playerChoice, rivalChoice)
    }

    const player = (event) => {
        playerPlay(event.target.id, playerChoice)
    }

    const resetScore = () =>{
        setRivalScore(0)
        setPlayerScore(0)
    }

    const playerPlay = (id, play) => {
            document.getElementById("userPlayer").hidden = true

            if(document.getElementById("rivalPlayer").hidden && vs === "player"){
                document.getElementById("rivalPlayer").hidden = false
            } else{
                document.getElementById("rivalPlayer").hidden = true
                document.getElementById("rematch").hidden = false
                document.getElementById("result").hidden = false
                document.getElementById("matchOptions").hidden = false
            }
            switch (id) {
                case "Rock":
                    setRockImg(play)
                    break;
                  
                case "Paper":
                    setPaperImg(play)
                    break;
                  
                case "Scissors":
                    setScissorsImg(play)
                    break;
    
                case "Lizard":
                    setLizardImg(play)
                    break;
    
                case "Spock":
                    setSpockImg(play)
                    break;

                default:
            }

            if(play === rivalChoice){
                decideWinner(playerChoice, rivalChoice)
            }
    }

    const enableRivals = () =>{
        
        document.getElementById("userPlayer").hidden = true
        document.getElementById("rivalPlayer").hidden = true
        document.getElementById("result").hidden = true
        document.getElementById("matchOptions").hidden = true
        hideOptions()
        resetScore()
        document.getElementById("vs").hidden = false
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
            {/*
            <PlayButtons clickFuntion={eval(vs)} choice={playerChoice}/>
            <PlayButtons clickFuntion={playerPlay} choice={rivalChoice}/>
            */}
            <div hidden id="userPlayer" className="playerButtons">Take your pick player<br/><br/>
                <img className="button" id="Rock" src="/Images/Rock.png" value ="Rock" onClick={eval(vs)}/>
                <img className="button" id="Paper" src="/Images/Paper.png" value ="Paper" onClick={eval(vs)}/>
                <img className="button" id="Scissors" src="/Images/Scissors.png" value ="Scissors" onClick={eval(vs)}/>
                <img className="button" id="Lizard" src="/Images/Lizard.png" value ="Lizard" onClick={eval(vs)}/>
                <img className="button" id="Spock" src="/Images/Spock.png" value ="Spock" onClick={eval(vs)}/>
            </div>
            
            <div hidden id="rivalPlayer" className="playerButtons">Take your pick rival<br/><br/>
                <img className="button" id="Rock" src="/Images/Rock.png" value ="Rock" onClick={() => playerPlay("Rock", rivalChoice)}/>
                <img className="button" id="Paper" src="/Images/Paper.png" value ="Paper" onClick={() => playerPlay("Paper", rivalChoice)}/>
                <img className="button" id="Scissors" src="/Images/Scissors.png" value ="Scissors" onClick={() => playerPlay("Scissors", rivalChoice)}/>
                <img className="button" id="Lizard" src="/Images/Lizard.png" value ="Lizard" onClick={() => playerPlay("Lizard", rivalChoice)}/>
                <img className="button" id="Spock" src="/Images/Spock.png" value ="Spock" onClick={() => playerPlay("Spock", rivalChoice)}/>
            </div>
            
            <div hidden id="result" className="match">
                <img hidden className="img" id="playerChoice" src="" alt="playerChoice"></img>
                <img hidden className="img" id="rivalChoice" src="" alt="rivalChoice"></img>
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