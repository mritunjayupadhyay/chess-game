import { useSelector } from "react-redux";
import { allColorType } from "../../App.constant";
import { Box } from "../../components/box/box";
import { FallenPieces } from "../../components/fallen-pieces/fallen_pieces";
import { RootState } from "../../store";
import './chessboard.scss';
import { ChessBoardContent, ChessBoardStyled } from "./chessboard_styled";

function ChessBoard() {

     // Get all Boxes from store
    const boardBoxes = useSelector((state: RootState) => state.position.allPositions);
    const activePiece = useSelector((state: RootState) => state.position.activePiece);
    const visitingPieces = useSelector((state: RootState) => state.position.allPossibleVisitingBoxes);
    const killPieces = useSelector((state: RootState) => state.position.allPossibleKillBoxes);
    // Render Boxes with store Data
    const renderBoxes = () => {
        const boxesToRender = [];
        for (const boxKey in boardBoxes) {
            let item = boardBoxes[boxKey];
            let canKill = false;
            let canVisit = false;
            let active = false;
            if ((item.position.x === activePiece?.position.x)
            && (item.position.y === activePiece?.position.y)) {
                active = true;
            }
            if (visitingPieces[boxKey]) {
                console.log("visit piece", visitingPieces[boxKey])
                canVisit = true;
            }
            if (killPieces[boxKey]) {
                console.log("kill piece", killPieces[boxKey])
                canVisit = false;
                canKill = true;
            }
            boxesToRender.push(
                <Box
                key={boxKey}
                position={item.position}
                label={item.label}
                piece={item.piece}
                active={active}
                canKill={canKill}
                canVisit={canVisit}
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