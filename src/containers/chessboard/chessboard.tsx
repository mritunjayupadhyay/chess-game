import { HorizontalKeys, VerticalKeys } from "../../App.constant";
import { Box } from "../../components/box/box";
import './chessboard.scss';
import { ChessBoardContent, ChessBoardStyled } from "./chessboard_styled";

function ChessBoard() {
    let boardBoxes = [];
    for (let j = VerticalKeys.length - 1; j >= 0; j--) {
        for (let i = 0; i < HorizontalKeys.length; i++) {
            boardBoxes.push(<Box />)
        }
    }
    return (
        <ChessBoardStyled>
            <ChessBoardContent>
                {boardBoxes}
            </ChessBoardContent>
        </ChessBoardStyled>
    );
}

export { ChessBoard };