import { useSelector } from "react-redux";
import { Box } from "../../components/box/box";
import { RootState } from "../../store";
import './chessboard.scss';
import { ChessBoardContent, ChessBoardStyled } from "./chessboard_styled";

function ChessBoard() {

     // Get all Boxes from store
    const boardBoxes = useSelector((state: RootState) => state.position.allPositions);
    const activePiece = useSelector((state: RootState) => state.position.activePiece);
    // Render Boxes with store Data
    const renderBoxes = () => {
        const boxesToRender = [];
        for (const boxKey in boardBoxes) {
            let item = boardBoxes[boxKey];
            let active = false;
            if ((item.position.x === activePiece?.position.x)
            && (item.position.y === activePiece?.position.y)) {
                active = true;
            }
            boxesToRender.push(
                <Box
                key={boxKey}
                position={item.position}
                label={item.label}
                piece={item.piece}
                active={active}
            />
            )
        }
       return boxesToRender;
    }
    return (
        <ChessBoardStyled>
            <ChessBoardContent>
                {renderBoxes()}
            </ChessBoardContent>
        </ChessBoardStyled>
    );
}

export { ChessBoard };