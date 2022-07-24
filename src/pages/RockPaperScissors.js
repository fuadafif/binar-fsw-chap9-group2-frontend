import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from "reactstrap";

import batu from "../assets/game/img/batu.png";
import gunting from "../assets/game/img/gunting.png";
import kertas from "../assets/game/img/kertas.png";
import logo from "../assets/game/img/logo.png";
import refresh from "../assets/game/img/refresh.png";

import "../assets/game/css/game.css";
import "../assets/game/css/bootstrap.min.css";

function RockPaperScissors() {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      alert("Please login first!")
      navigate("/login");
    }
  });

  class Game {
    randomize() {
      const choices = ["rock", "paper", "scissor"];
      const index = Math.floor(Math.random() * 3);
      return choices[index];
    }

    playGame(playerChoice) {
      this.resetBackground();

      console.log(`Player memilih ${playerChoice}`);
      this.setBackground("player", playerChoice);

      const comChoice = this.randomize();
      console.log(`COM memilih ${comChoice}`);
      this.setBackground("com", comChoice);

      if (playerChoice === comChoice) {
        return this.resultDraw();
      }

      if (playerChoice === "rock" && comChoice === "paper") {
        return this.resultPlayerLose();
      }

      if (playerChoice === "rock" && comChoice === "scissor") {
        return this.resultPlayerWin();
      }

      if (playerChoice === "paper" && comChoice === "scissor") {
        return this.resultPlayerLose();
      }

      if (playerChoice === "paper" && comChoice === "rock") {
        return this.resultPlayerWin();
      }

      if (playerChoice === "scissor" && comChoice === "rock") {
        return this.resultPlayerLose();
      }

      if (playerChoice === "scissor" && comChoice === "paper") {
        return this.resultPlayerWin();
      }
    }

    setBackground(playerType, choice) {

      const selectedElement = document.getElementById(`${playerType}-${choice}`);

      selectedElement.classList.add("custom-selected");
    }

    resetBackground() {
      document.getElementById("player-rock").classList.remove("custom-selected");
      document.getElementById("player-paper").classList.remove("custom-selected");
      document.getElementById("player-scissor").classList.remove("custom-selected");
      document.getElementById("com-rock").classList.remove("custom-selected");
      document.getElementById("com-paper").classList.remove("custom-selected");
      document.getElementById("com-scissor").classList.remove("custom-selected");

      document.getElementById("vs").classList.remove("custom-green-vs-box");
      document.getElementById("vs").classList.remove("custom-green-darker-vs-box");

      document.getElementById("vs").innerHTML = "VS";
      document.getElementById("vs").classList.add("custom-vs-text");
    }

    resultDraw() {
      console.log("DRAW");

      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "DRAW";
      vsElement.classList.remove("custom-vs-text");
      vsElement.classList.add("custom-green-darker-vs-box");
    }

    resultPlayerLose() {
      console.log("COM WIN");

      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "COM WIN";
      vsElement.classList.remove("custom-vs-text");
      vsElement.classList.add("custom-green-vs-box");
    }

    resultPlayerWin() {
      console.log("PLAYER WIN");

      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "PLAYER 1 WIN";
      vsElement.classList.remove("custom-vs-text");
      vsElement.classList.add("custom-green-vs-box");

      const score = "SCORE";
      if(localStorage.getItem(score) === null) {
        localStorage.setItem(score, 0);
      }
      let count = localStorage.getItem(score);
      count++;
      localStorage.setItem(score, count);
    }
  }

  const game = new Game();

  function rock() {
    game.playGame("rock");
  }

  function paper() {
    game.playGame("paper");
  }

  function scissor() {
    game.playGame("scissor");
  }

  function resetGame() {
    console.log("--- GAME RESET --- ");
    game.resetBackground();
  }

  const [modal, setModal] = React.useState(false);
  const [tampil, setTampil] = React.useState(false);
  const [playerName, setPlayerName] = React.useState("");
  const [playerScore, setPlayerScore] = React.useState("");
  const toggle = () => {
    setModal(!modal);
    setTampil(!tampil);
    const email = "email";
    setPlayerName(localStorage.getItem(email));
    const score = "SCORE";
    setPlayerScore(localStorage.getItem(score));
  }


  return (
    <div className="body">
      <div className="container-fluid mt-3">
        <div className="row align-items-center">
          <div className="col-1 fs-1 fw-bolder text-end custom-back-button">
            <a href="/play-game" className="text-reset text-decoration-none">
              &lt;
            </a>
          </div>

          <div className="col-1 text-center">
            <img src={logo} classNameName="custom-logo" alt="logo" />
          </div>

          <div className="col fs-2 fw-bold custom-game-title">ROCK PAPER SCISSOR</div>

          {/* MODAL */}
          <div
            style={{
              display: "block",
              width: 700,
              padding: 30,
            }}
          >
            <Button color="danger" onClick={toggle}>
              Score
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Score</ModalHeader>
              <ModalBody>
                <Table>
                {tampil && (
                    <>
                  <thead>
                    <tr>
                      <th>Player</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{playerName}</td>
                      <td>{playerScore}</td>
                    </tr>
                  </tbody>
                  </>
                )}
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Okay
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>

      <div className="container text-center custom-game-section">
        <div className="row my-3 justify-content-center align-items-center">
          <div className="col-2 fs-4 fw-bold custom-game-player-name">PLAYER 1</div>

          <div className="col-2"></div>

          <div className="col-2 fs-4 fw-bold custom-game-player-name">COM</div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2 custom-choice-background align-items-center" id="player-rock" onClick={rock}>
            <img className="custom-choice" src={batu} alt="player-rock" />
          </div>

          <div className="col-2"></div>

          <div className="col-2 custom-choice-background" id="com-rock">
            <img className="custom-choice" src={batu} alt="com-rock" />
          </div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2 custom-choice-background" id="player-paper" onClick={paper}>
            <img className="custom-choice" src={kertas} alt="player-paper" />
          </div>

          <div className="col-2 mx-2 fw-bold custom-vs-background custom-vs-text" id="vs">
            VS
          </div>

          <div className="col-2 custom-choice-background" id="com-paper">
            <img className="custom-choice" src={kertas} alt="com-paper" />
          </div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2 custom-choice-background" id="player-scissor" onClick={scissor}>
            <img className="custom-choice" src={gunting} alt="player-scissor" />
          </div>

          <div className="col-2"></div>

          <div className="col-2 custom-choice-background" id="com-scissor">
            <img className="custom-choice" src={gunting} alt="com-scissor" />
          </div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2"></div>

          <div className="col-2" id="reset" onClick={resetGame}>
            <img className="custom-choice" src={refresh} alt="refresh" />
          </div>

          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
