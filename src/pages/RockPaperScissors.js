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
      navigate("/login");
    }
  });

  class Game {
    // Fungsi ini untuk mengacak pilihan komputer
    randomize() {
      // Menyimpan pilihan ke dalam array
      // Ada 3 element yg bisa diakses mulai dari index-0, index-1, index-2
      const choices = ["rock", "paper", "scissor"];

      // Math.random() mengacak angka desimal dari 0 sampai kurang dari 1
      // Kemudian angka tersebut dikalikan 3 dan dibulatkan ke bawah dengan Math.floor().
      // sehingga, hasil akhir berupa angka 0, 1, atau 2
      // hasil ini nantinya bisa digunakkan untuk mengakses array yang memiliki 3 elemen secara acak.
      const index = Math.floor(Math.random() * 3);

      // Akses element yg ada di dalam array choice dengan index hasil acakan
      return choices[index];
    }

    playGame(playerChoice) {
      // Pertama, hapus semua background agak player bisa main berkali kali tanpa harus mengklik reset secara manual
      this.resetBackground();

      // Cetak pilihan player & atur background pada pilihan tsb
      console.log(`Player memilih ${playerChoice}`);
      this.setBackground("player", playerChoice);

      // Cetak pilihan computer & atur background pada pilihan tsb
      const comChoice = this.randomize();
      console.log(`COM memilih ${comChoice}`);
      this.setBackground("com", comChoice);

      // Bandingkan pilihan computer & player
      // Jika sama, panggil fungsi resultDraw()
      // Jika player menang, panggil fungsi resultPlayerWin()
      // Jika player kalah, panggil fungsi resultPlayerLose()
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
      // Ambil element berdasar id, kemudian berikan kelas custom-selected
      // Cara di bawah bisa dilakukan karena penamaan id menggunakan format jenisplayer-pilihan
      const selectedElement = document.getElementById(`${playerType}-${choice}`);

      // Kelas custom-selected memberikan background, cek .custom-selected di style.css
      selectedElement.classList.add("custom-selected");
    }

    resetBackground() {
      // hapus style background pada pilihan player & computer
      document.getElementById("player-rock").classList.remove("custom-selected");
      document.getElementById("player-paper").classList.remove("custom-selected");
      document.getElementById("player-scissor").classList.remove("custom-selected");
      document.getElementById("com-rock").classList.remove("custom-selected");
      document.getElementById("com-paper").classList.remove("custom-selected");
      document.getElementById("com-scissor").classList.remove("custom-selected");

      // hapus style background pada tulisan VS
      document.getElementById("vs").classList.remove("custom-green-vs-box");
      document.getElementById("vs").classList.remove("custom-green-darker-vs-box");

      // atur kembali tulisan menjadi VS & kembalikan style asal
      document.getElementById("vs").innerHTML = "VS";
      document.getElementById("vs").classList.add("custom-vs-text");
    }

    resultDraw() {
      // Cetak tulisan ke console
      console.log("DRAW");

      // Ambil element & ubah tulisannya
      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "DRAW";

      // Hapus kelas custom-vs-text & tambahkan kelas custom-green-darker-vs-box
      // Cek kelas custom-vs-text & custom-green-darker-vs-box di style.css
      vsElement.classList.remove("custom-vs-text");
      vsElement.classList.add("custom-green-darker-vs-box");
    }

    resultPlayerLose() {
      // Cetak tulisan ke console
      console.log("COM WIN");

      // Ambil element & ubah tulisannya
      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "COM WIN";

      // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
      // Cek kelas custom-vs-text & custom-green-vs-box di style.css
      vsElement.classList.remove("custom-vs-text");
      vsElement.classList.add("custom-green-vs-box");
    }

    resultPlayerWin() {
      // Cetak tulisan ke console
      console.log("PLAYER WIN");

      // Ambil element & ubah tulisannya
      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "PLAYER 1 WIN";

      // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
      // Cek kelas custom-vs-text & custom-green-vs-box di style.css
      vsElement.classList.remove("custom-vs-text");
      vsElement.classList.add("custom-green-vs-box");
    }
  }

  // Membuat object baru menggunakan kelas Game
  const game = new Game();

  // Menyimpan semua elemen yang dibutuhkan ke dalam variable
  // const playerRock = document.getElementById("player-rock");
  // const playerPaper = document.getElementById("player-paper");
  // const playerScissor = document.getElementById("player-scissor");

  // const comRock = document.getElementById("com-rock");
  // const comPaper = document.getElementById("com-paper");
  // const comScissor = document.getElementById("com-scissor");

  // const versus = document.getElementById("vs");

  // const reset = document.getElementById("reset");

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
  const toggle = () => setModal(!modal);

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
              Leaderboard
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Top Score</ModalHeader>
              <ModalBody>
                <Table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Username</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
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
