import './games/rock-paper-scissors/assets/css/game.css';
import './games/rock-paper-scissors/assets/css/bootstrap.min.css';
import batu from './games/rock-paper-scissors/assets/img/batu.png';
import gunting from './games/rock-paper-scissors/assets/img/gunting.png';
import kertas from './games/rock-paper-scissors/assets/img/kertas.png';
import logo from './games/rock-paper-scissors/assets/img/logo.png';
import refresh from './games/rock-paper-scissors/assets/img/refresh.png';

function RockPaperScissors() {
    return (
        <div className='body'>
            <div className="container-fluid mt-3">

                <div className="row align-items-center">

                    <div className="col-1 fs-1 fw-bolder text-end custom-back-button">
                        <a href="" className="text-reset text-decoration-none">
                            &lt;
                        </a>
                    </div>

                    <div className="col-1 text-center">
                        <img src={logo} classNameName="custom-logo" alt="logo" />
                    </div>

                    <div className="col fs-2 fw-bold custom-game-title">
                        ROCK PAPER SCISSOR
                    </div>

                </div>
            </div>

            <div className="container text-center custom-game-section">

                <div className="row my-3 justify-content-center align-items-center">

                    <div className="col-2 fs-4 fw-bold custom-game-player-name">
                        PLAYER 1
                    </div>

                    <div className="col-2">
                    </div>

                    <div className="col-2 fs-4 fw-bold custom-game-player-name">
                        COM
                    </div>

                </div>

                <div className="row my-5 justify-content-center align-items-center">

                    <div className="col-2 custom-choice-background align-items-center" id="player-rock">
                        <img className="custom-choice" src={batu} alt="player-rock" />
                    </div>

                    <div className="col-2">
                    </div>

                    <div className="col-2 custom-choice-background" id="com-rock">
                        <img className="custom-choice" src={batu} alt="com-rock" />
                    </div>

                </div>

                <div className="row my-5 justify-content-center align-items-center">

                    <div className="col-2 custom-choice-background" id="player-paper">
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

                    <div className="col-2 custom-choice-background" id="player-scissor">
                        <img className="custom-choice" src={gunting} alt="player-scissor" />
                    </div>

                    <div className="col-2">
                    </div>

                    <div className="col-2 custom-choice-background" id="com-scissor">
                        <img className="custom-choice" src={gunting} alt="com-scissor" />
                    </div>

                </div>

                <div className="row my-5 justify-content-center align-items-center">

                    <div className="col-2">
                    </div>

                    <div className="col-2" id="reset">
                        <img className="custom-choice" src={refresh} alt="refresh" />
                    </div>

                    <div className="col-2">
                    </div>

                </div>

            </div>

        </div>
    )
}

export default RockPaperScissors;