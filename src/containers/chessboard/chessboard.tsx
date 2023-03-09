import { HorizontalKeys, VerticalKeys } from "../../App.constant";
import { Box } from "../../components/box/box";
import { IPosition } from "../../interfaces/position.interface";
import './chessboard.scss';
import { ChessBoardContent, ChessBoardStyled } from "./chessboard_styled";

function ChessBoard() {
    let boardBoxes = [];
    let boxLevel = '';
    for (let j = VerticalKeys.length - 1; j >= 0; j--) {
        for (let i = 0; i < HorizontalKeys.length; i++) {
            let boxPosition: IPosition = { x: i, y: j };
            boxLevel = `${VerticalKeys[j]}${HorizontalKeys[i]}`;
            boardBoxes.push(
                <Box
                    key={boxLevel}
                    position={boxPosition}
                    label={boxLevel}
                />
            )
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