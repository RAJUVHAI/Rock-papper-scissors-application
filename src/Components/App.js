import React, { useState } from "react";
import "./App.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

export default function App() {
  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [result, setResult] = useState("Let's see who wins");
  const [userResultTxt, setUserResultTxt] = useState(
    "Let's see user will won and increase it's result"
  );
  const [computerResultTxt, setComputerResultTxt] = useState(
    " Now ! Computer will won and increase it's result."
  );
  var getCompChoice = () => {
    var choices = ["rock", "papper", "scissors"];
    var compChooses = choices[Math.floor(Math.random() * choices.length)];
    return compChooses;
  };

  const rock = () => {
    if (getCompChoice() === "rock") {
      setComputerPoint(computerPoint + 1);
      setResult("computer is won");
      setComputerResultTxt("Computer increase one point here.");
      setUserResultTxt("Let's see user will won and increase it's result");
    } else {
      setUserPoint(userPoint + 1);
      setResult("Hurrah!!user won the game");
      setUserResultTxt("User increase one point here.");
      setComputerResultTxt(
        " Now ! Computer will won and increase it's result."
      );
    }
  };
  const papper = () => {
    if (getCompChoice() === "papper") {
      setComputerPoint(computerPoint + 1);
      setResult("computer is won");
      setComputerResultTxt("Computer increase one point here.");
      setUserResultTxt("Let's see user will won and increase it's result");
    } else {
      setUserPoint(userPoint + 1);
      setResult("Hurrah!!user won the game");
      setUserResultTxt("User increase one point here.");
      setComputerResultTxt(
        " Now ! Computer will won and increase it's result."
      );
    }
  };
  const scissors = () => {
    if (getCompChoice() === "scissors") {
      setComputerPoint(computerPoint + 1);
      setResult("computer is won");
      setComputerResultTxt("Computer increase one point here.");
      setUserResultTxt("Let's see user will won and increase it's result");
    } else {
      setUserPoint(userPoint + 1);
      setResult("Hurrah!!user won the game");
      setUserResultTxt("User increase one point here.");
      setComputerResultTxt(
        " Now ! Computer will won and increase it's result."
      );
    }
  };
  if (computerPoint >= 10) {
    return (
      <>
        <h1>Computer is won</h1>
        <button id="reset" onClick={() => window.location.reload()}>
          Start Again
        </button>
      </>
    );
  }
  if (userPoint >= 10) {
    return (
      <>
        <h1>user is won</h1>
        <button id="reset" onClick={() => window.location.reload()}>
          Start Again
        </button>
      </>
    );
  }

  return (
    <>
      <div className="gamebox">
        <h1>Rock, Paper, Scissors</h1>
        <h2>
          You know the drill - Rock beats Scissors, Scissor beats Paper, Paper
          beats Rock.
        </h2>
        <h3>Select your move:</h3>

        <div className="usercontainer">
          <FaHandRock id="rock" className="fa" onClick={rock} />
          <FaHandPaper id="papper" className="fa" onClick={papper} />
          <FaHandScissors id="scissors" className="fa" onClick={scissors} />
        </div>

        <div className="computeranswer">
          <h3>Computer choice:</h3>
          <p id="playerResult">{userResultTxt}</p>
          <p id="compResult">{computerResultTxt}</p>
          <p id="winner">{result}</p>
        </div>

        <table>
          <tbody>
            <tr>
              <th colSpan={2}>Scoreboard</th>
            </tr>
            <tr>
              <td>User</td>
              <td>Computer</td>
            </tr>
            <tr>
              <td id="playerScore">{userPoint}</td>
              <td id="compScore">{computerPoint}</td>
            </tr>
          </tbody>
        </table>

        <button id="reset" onClick={() => window.location.reload()}>
          Reset
        </button>
      </div>
    </>
  );
}
