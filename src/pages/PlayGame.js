import './game-assets/css/game.css';
import './game-assets/css/bootstrap-reboot.min.css';
import './game-assets/css/bootstrap.min.css';


function PlayGame() {
    return (
        <div className='play-game' >
            <div className='container text-center d-flex vh-100'>
                <div className="mx-auto my-auto col-8"> 
                    <button className='btn btn-success' href="/rock-paper-scissors">Play Game</button>
                    <br />
                    <br />
                    <button className='btn btn-dark'>Leaderboard</button>
                </div>
            </div>
        </div>
    )
}

export default PlayGame;