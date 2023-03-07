import { HorizontalKeys, VerticalKeys } from "../../App.constant";
import { Box } from "../../components/box/box";
import './chessboard.scss';

function ChessBoard() {
    let boardBoxes = [];
    for (let j = VerticalKeys.length - 1; j >= 0; j--) {
        for (let i = 0; i < HorizontalKeys.length; i++) {
            boardBoxes.push(<Box />)
        }
    }
    return (
        <div className="chessboard">
            <div className="container-boxes">
                {boardBoxes}
            </div>
        </div>
    );
}

export { ChessBoard };