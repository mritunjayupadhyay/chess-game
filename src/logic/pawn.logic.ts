import { allColorType, HorizontalKeys } from './../App.constant';
import { IGetAllPossibleMove } from ".";
import { getLabel } from "../helpers/label.helper";
import { IBoxPosition } from "../interfaces/position.interface";

const getPossibleMove = (getPossibleMoveArgs: IGetAllPossibleMove)
    : {
        allPossibleVisitingBoxes: Record<string, IBoxPosition>,
        allPossibleKillBoxes: Record<string, IBoxPosition>
    } => {
    // Initialize variable
    let allPossibleVisitingBoxes: Record<string, IBoxPosition> = {},
        allPossibleKillBoxes: Record<string, IBoxPosition> = {};

    // Get data of arguments (all boxes and the specific piece)
    const {
        allBoxes,
        piece
    } = getPossibleMoveArgs;

    // Use for loop for visiting places
    for (let i = 1; i <= 2; i++) { // A pawn can move maximum 2 box
        if (i === 2) { // Can move two place only if it is first time.
            if ((piece.color === allColorType.LIGHT_COLOR && piece.position.y !== 1)
            || (piece.color === allColorType.DARK_COLOR && piece.position.y !== 6)) {
                break;
            }
        }
        const steps = piece.color === allColorType.LIGHT_COLOR ? i : -i;
        const label = getLabel(piece.position.x, piece.position.y + steps);
        const box = allBoxes[label];
        if (box.piece) { // Any piece exist in way, can not go forward
            break; 
        }
        allPossibleVisitingBoxes[label] = box;
    }

    // Use for loop for killing places
    const leftRightArr = [1, -1]
    for (let i = 0; i <= leftRightArr.length; i++) { // A pawn can move maximum 2 box, one left top or right top
        const leftRight = leftRightArr[i];
        if ((piece.position.x + leftRight > HorizontalKeys.length - 1)
        || piece.position.x + leftRight < 0) {
            continue;
        }
        const steps = piece.color === allColorType.LIGHT_COLOR ? 1 : -1;
        const label = getLabel(piece.position.x + leftRight, piece.position.y + steps);
        const box = allBoxes[label];
        if (box && box.piece !== undefined && box.piece.color !== piece.color) { // Any piece exist in way and not my team
            allPossibleKillBoxes[label] = box;
        }
    }
    
    // for (let i = 0; i < positions.length; i++) {
    //     const label = getLabel(positions[i].x, positions[i].y);
    //     const box = allBoxes[label];
    //     if (box.piece) { // Any piece exist in way
    //         if (box.piece?.color !== piece.color) {
    //             allPossibleKillBoxes[label] = box;
    //         }
    //     } else {
    //         allPossibleVisitingBoxes[label] = box;
    //     }
    // }
    return {
        allPossibleVisitingBoxes,
        allPossibleKillBoxes
    }
}

export { getPossibleMove };