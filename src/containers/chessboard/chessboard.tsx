import { useSelector } from "react-redux";
import { Box } from "../../components/box/box";
import { RootState } from "../../store";
import { allBoxAsObj } from "../../store/initialData/position.data";
import './chessboard.scss';
import { ChessBoardContent, ChessBoardStyled } from "./chessboard_styled";

function ChessBoard() {

     // Get all Boxes from store
     const boardBoxes = useSelector((state: RootState) => state.position.allPositions)

    // Render Boxes with store Data
    const renderBoxes = () => {
        const boxesToRender = [];
        for (const boxKey in boardBoxes) {
            let item = boardBoxes[boxKey]
            boxesToRender.push(
                <Box
                key={boxKey}
                position={item.position}
                label={item.label}
                piece={item.piece}
            />
            )
        }
       return boxesToRender;
    }
    console.log("allBoxAsMap", allBoxAsObj);
    return (
        <ChessBoardStyled>
            <ChessBoardContent>
                {renderBoxes()}
            </ChessBoardContent>
        </ChessBoardStyled>
    );
}

export { ChessBoard };