import { ChessBoard } from "../../containers/chessboard/chessboard";
import './game_page.scss'
import { ChessBoardContainer, GameStyle } from "./game_styled";
function GamePage() {
    return (
        <GameStyle>
            <div>Player One</div>
            <ChessBoardContainer>
                <ChessBoard />
            </ChessBoardContainer>
            <div>Player Two</div>
        </GameStyle>
    );
}

export { GamePage };