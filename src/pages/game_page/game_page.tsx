import { ChessBoard } from "../../containers/chessboard/chessboard";
import './game_page.scss'
import { GameStyle } from "./game_styled";
function GamePage() {
    return (
        <GameStyle>
            <div>Player One</div>
            <div className="chess-board-container">
            <ChessBoard />
            </div>
            <div>Player Two</div>
        </GameStyle>
    );
}

export { GamePage };