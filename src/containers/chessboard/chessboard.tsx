import { useSelector } from "react-redux";
import { Box } from "../../components/box/box";
import { RootState } from "../../store";
import './chessboard.scss';
import { ChessBoardContent, ChessBoardStyled } from "./chessboard_styled";

function ChessBoard() {

     // Get all Boxes from store
    const boardBoxes = useSelector((state: RootState) => state.position.allPositions);
    const activePiece = useSelector((state: RootState) => state.position.activePiece);
    const visitingPieces = useSelector((state: RootState) => state.position.allPossibleVisitingBoxes);
    const killPieces = useSelector((state: RootState) => state.position.allPossibleKillBoxes);
    const castlingBoxes = useSelector((state: RootState) => state.position.castlingBoxes);
    // Render Boxes with store Data
    const renderBoxes = () => {
        const boxesToRender = [];
        for (const boxKey in boardBoxes) {
            let item = boardBoxes[boxKey];
            let canKill = false;
            let canVisit = false;
            let active = false;
            let canCastle = false;
            if ((item.position.x === activePiece?.position.x)
            && (item.position.y === activePiece?.position.y)) {
                active = true;
            }
            if (visitingPieces[boxKey] || castlingBoxes[boxKey]) {
                canVisit = true;
            }
            if (castlingBoxes[boxKey]) {
                canCastle = true;
            }
            if (killPieces[boxKey]) {
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
                canCastle={canCastle}
                castlingData={castlingBoxes[boxKey]}
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