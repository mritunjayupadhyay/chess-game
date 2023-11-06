import { allColorType } from "../../App.constant";
import { FallenPieces } from "../../components/fallen-pieces/fallen_pieces";
import { ChessBoard } from "../../containers/chessboard/chessboard";
import './game_page.scss'
import { ChessBoardContainer, GameStyle } from "./game_styled";
function GamePage() {
    return (
        <GameStyle>

            <ChessBoardContainer>
                <div>
                    <FallenPieces color={allColorType.DARK_COLOR} />
                </div>
                <ChessBoard />
                <div>
                    <FallenPieces color={allColorType.LIGHT_COLOR} />
                </div>
            </ChessBoardContainer>

        </GameStyle>
    );
}

export { GamePage };