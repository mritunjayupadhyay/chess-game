import { HorizontalKeys, VerticalKeys, colorType } from "../App.constant";
import { IPiece } from "../interfaces/piece.interface";
import { IBoxPosition, IPosition } from "../interfaces/position.interface";
import { getLabel } from "./label.helper";
import { checkKingInDanger, getUpdatePiecesAfterMovement } from "./piece.helper";

export const checkIfOutside = (x: number, y: number): boolean => {
    if ((x > HorizontalKeys.length - 1) 
    || (x < 0)
    || (y > VerticalKeys.length - 1)
    || (y < 0)) {
        return true;
    }
    return false;
}

export const getUpdatedPositionAfterMove = (allPositions: Record<string, IBoxPosition>, movedPiece: IPiece, newPosition: IPosition):Record<string, IBoxPosition>  => {
    const allPositionsAfterMove = {...allPositions}
    const label = getLabel(newPosition.x, newPosition.y);
    const activePieceWithNewPosition  = {...movedPiece, position: newPosition};
    const activePieceExistingLabel = getLabel(movedPiece.position.x, movedPiece.position.y);
    allPositionsAfterMove[label] = {...allPositionsAfterMove[label], piece: activePieceWithNewPosition};
    allPositionsAfterMove[activePieceExistingLabel] = {...allPositionsAfterMove[activePieceExistingLabel], piece: undefined};
    return allPositionsAfterMove;
}

export interface IFilterInvalidBoxesToMove {
    pieces: IPiece[], 
    piece: IPiece,
    allPositions: Record<string, IBoxPosition>, 
    color: colorType, 
    boxes: Record<string, IBoxPosition>
}

export const filterInvalidBoxesToMove = (args: IFilterInvalidBoxesToMove): Record<string, IBoxPosition> => {
    const {
        piece, pieces, allPositions, color, boxes
    } = args;
    console.log("the args we ahvae", args)
    const validBoxes: Record<string, IBoxPosition> = {}
    for (const [key, value] of Object.entries(boxes)) {
        const updatedPieces = getUpdatePiecesAfterMovement(pieces, piece, value.position)
        console.log("updated pieces", JSON.parse(JSON.stringify(updatedPieces)));
        const allPositionsAfterMove = getUpdatedPositionAfterMove(allPositions, piece, value.position)
        console.log("updated positions", JSON.parse(JSON.stringify(allPositionsAfterMove)));

        console.log("checkKingSafty", checkKingInDanger(updatedPieces, allPositionsAfterMove, color))
        if (checkKingInDanger(updatedPieces, allPositionsAfterMove, color) === false) {
            validBoxes[key] = value;
        }
    }
    console.log("valida box", validBoxes)
    return validBoxes;
}