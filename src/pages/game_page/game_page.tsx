import { ChessBoard } from "../../containers/chessboard/chessboard";
import './game_page.scss'
function GamePage() {
    return (
        <div className="GamePage">
            <div>Player One</div>
            <div className="chess-board-container">
            <ChessBoard />
            </div>
            <div>Player Two</div>
        </div>
    );
}

export { GamePage };