import React, {useEffect, useState } from 'react';

const Game = () => {
    const [vs, setVS] = useState("")
    const [playerScore, setPlayerScore] = useState()
    const [rivalScore, setRivalScore] = useState()
    const [playerChoice, setPlayerChoice] = useState()
    const [rivalChoice, setRivalChoice] = useState()
    const [rock, setRock] = useState()
    const [papper, setPapper] = useState()
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
        setPapper(document.getElementById("Papper"))
        setScissors(document.getElementById("Scissors"))
        setLizard(document.getElementById("Lizard"))
        setSpock(document.getElementById("Spock"))
    }, []);

    const playerLost = () =>{
        if(vs === "Computer"){setMatchResult("You lost this match")} 
        else{setMatchResult("The second player win this match")}
        setRivalScore(rivalScore + 1)
    }

    const playerWin = () =>{
        if(vs === "Computer"){setMatchResult("You win this match")} 
        else{setMatchResult("The first player win this match")}
        setRivalScore(playerScore + 1)
    }



    const decideWinner = () => {
        
        if (playerChoice.value === rivalChoice.value) {
            setMatchResult("This match was a draw")
        } else{
            //Conditions Rock
            if (playerChoice.value === "Rock"){
                if(rivalChoice.value === "Papper" || rivalChoice.value === "Spock") {
                    playerLost()
                } else{
                    playerWin()
                }
            }

            //Conditions Papper
            if (playerChoice.value === "Papper"){
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
                if(rivalChoice.value === "Lizard" ||  rivalChoice.value === "Papper") {
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
        papper.hidden = true
        scissors.hidden = true
        lizard.hidden = true
        spock.hidden = true
    }

    /*const disableOptions = () =>{
        rock.disable = true
        papper.disable = true
        scissors.disable = true
        lizard.disable = true
        spock.disable = true
        console.log(rock.disable)
    }*/

    const rematch = () =>{
        playerChoice.hidden = true
        rivalChoice.hidden = true
        
        document.getElementById("userPlayer").hidden = false
        document.getElementById("rematch").hidden = true
        document.getElementById("result").hidden = true

        rock.hidden = false
        papper.hidden = false
        scissors.hidden = false
        lizard.hidden = false
        spock.hidden = false   

    }

    const setRockImg = (img) =>{
        img.src = "https://okdiario.com/img/2019/08/18/caracteristicas-de-la-roca-metamorfica.jpg"
        img.hidden = false
        img.value = "Rock"
    }

    const setPapperImg = (img) =>{
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wcYj4I5QuE_tQsefOgHsakFTKt5SgM3REg&usqp=CAU"
        img.hidden = false
        img.value = "Papper"
    }

    const setScissorsImg = (img) =>{
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-5NxP_9IVGAZMwT0fW-oMSJ2ZqRLUCSL9A&usqp=CAU"
        img.hidden = false
        img.value = "Scissors"
    }

    const setLizardImg = (img) =>{
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDg-q8GHZtSvjbcepBRovyc0Mskj8FQhFdvA&usqp=CAU"
        img.hidden = false
        img.value = "Lizard"
    }

    const setSpockImg = (img) =>{
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-Ho2fOq5iEcWAInB7RdHgWsFv3Y84qMuCA&usqp=CAU"
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
                setPapperImg(rivalChoice)
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
                console.log("acaaaa")
                document.getElementById("rivalPlayer").hidden = false
            } else{
                document.getElementById("rivalPlayer").hidden = true
                document.getElementById("rematch").hidden = false
                document.getElementById("result").hidden = false
            }
            switch (id) {
                case "Rock":
                    setRockImg(play)
                    break;
                  
                case "Papper":
                    setPapperImg(play)
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
        hideOptions()
        resetScore()
        document.getElementById("vs").hidden = false
        document.getElementById("changeRival").hidden = true
    }

    return(
        <>
            <h2 className="prompt" >Let the game begin!</h2>
          
            <div id="vs">
                <p id="vstext">VS</p>
                <div id="opponent">
                <button id="Computer" onClick={chooseRival}>COMPUTER</button>
                OR 
                <button id="Player" onClick={chooseRival}>PLAYER</button>
                </div>
            </div>
            
            <div hidden id="userPlayer" >Take your pick player
                <div className="Button"><button id="Rock" onClick={eval(vs)}>ROCK</button></div>
                <div className="Button"><button id="Papper" onClick={eval(vs)}>PAPPER</button></div>
                <div className="Button"><button id="Scissors" onClick={eval(vs)}>SCISSORS</button></div>
                <div className="Button"><button id="Lizard" onClick={eval(vs)}>LIZARD</button></div>
                <div className="Button"><button id="Spock" onClick={eval(vs)}>SPOCK</button></div>
            </div>
            
            <div hidden id="rivalPlayer" >Take your pick rival
                <div className="Button"><button id="Rock" onClick={() => playerPlay("Rock", rivalChoice)}>ROCK</button></div>
                <div className="Button"><button id="Papper" onClick={() => playerPlay("Papper", rivalChoice)}>PAPPER</button></div>
                <div className="Button"><button id="Scissors" onClick={() => playerPlay("Scissors", rivalChoice)}>SCISSORS</button></div>
                <div className="Button"><button id="Lizard" onClick={() => playerPlay("Lizard", rivalChoice)}>LIZARD</button></div>
                <div className="Button"><button id="Spock" onClick={() => playerPlay("Spock", rivalChoice)}>SPOCK</button></div>
            </div>
            
            <div hidden id="result">
                <img hidden id="playerChoice" src="" width="50" height="50" alt="playerChoice"></img>
                <img hidden id="rivalChoice" src="" width="50" height="50" alt="rivalChoice"></img>
                <div>
                    {matchResult}<br/>
                    Total Score
                    {playerScore} -- {rivalScore}</div>
                <button id="rematch" className="button" onClick={rematch}>Rematch!</button>
                <button id="resetScore" className="button" onClick={resetScore}>Reset Score</button>
            </div>
            <button hidden id="changeRival" className="button" onClick={enableRivals}>Change Rival</button>
            
        </>
    )
}

export default Game;