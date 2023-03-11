import { useSelector } from "react-redux";
import { Box } from "../../components/box/box";
import { RootState } from "../../store";
import './chessboard.scss';
import { ChessBoardContent, ChessBoardStyled } from "./chessboard_styled";

function ChessBoard() {

     // Get all Boxes from store
     const boardBoxes = useSelector((state: RootState) => state.position.allPositions)

    // Render Boxes with store Data
    const renderBoxes = () => {
        return boardBoxes.map((item) => {
            return <Box
                key={item.label}
                position={item.position}
                label={item.label}
            />
        })
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