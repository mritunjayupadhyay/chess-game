import { getLabel } from './../helpers/label.helper';
import { colorType } from './../App.constant';
import { IGetAllPossibleMove } from ".";
import { IBoxPosition } from "../interfaces/position.interface";
import { checkIfOutside } from '../helpers/position.helper';

const getVisitingAndKillingBoxes = (x: number, y: number, pieceColor: colorType, allBoxes: Record<string, IBoxPosition>): {
    visitingBox: IBoxPosition | undefined,
    killingBox: IBoxPosition | undefined,
    label: string,
    shouldBreak: boolean
} => {
    var visitingBox = undefined, killingBox = undefined, label = '', shouldBreak = false;
    label = getLabel(x, y);
    const box = allBoxes[label];
    if (box) {
        if (box.piece) {
            shouldBreak = true;
            if (box.piece.color !== pieceColor) {
                killingBox = box;
            } 
        } else {
            visitingBox = box;
        }
    } else {
        shouldBreak = true;
    }
    return {
        visitingBox,
        killingBox,
        shouldBreak,
        label
    }
}

const getPossibleMove = (getPossibleMoveArgs: IGetAllPossibleMove)
    : {
        allPossibleVisitingBoxes: Record<string, IBoxPosition>,
        allPossibleKillBoxes: Record<string, IBoxPosition>
    } => {
    let allPossibleVisitingBoxes: Record<string, IBoxPosition> = {},
        allPossibleKillBoxes: Record<string, IBoxPosition> = {};

    // A bishop can move diagonally. Maximum in four direction.
    // but can not move forward if there is no boxes
    // or some piece is in the way.

    const startPositionX = getPossibleMoveArgs.piece.position.x;
    const startPositionY = getPossibleMoveArgs.piece.position.y;


    // First Direction: top
    for (let i = startPositionX, j = startPositionY + 1; !checkIfOutside(i, j); j++) {
        // Break when condition meet
        const {
            shouldBreak,
            label,
            visitingBox,
            killingBox
        } = getVisitingAndKillingBoxes(i, j, getPossibleMoveArgs.piece.color, getPossibleMoveArgs.allBoxes);
        console.log("first bishop direction", i, j, visitingBox, killingBox, shouldBreak, label)
        if (visitingBox !== undefined) {
            allPossibleVisitingBoxes[label] = visitingBox;
        }
        if (killingBox !== undefined) {
            allPossibleKillBoxes[label] = killingBox;
        }
        if (shouldBreak) {
            break;
        }
    }

    // Second Direction: right
    for (let i = startPositionX + 1, j = startPositionY; !checkIfOutside(i, j); i++) {
        // Break when condition meet
        const {
            shouldBreak,
            label,
            visitingBox,
            killingBox
        } = getVisitingAndKillingBoxes(i, j, getPossibleMoveArgs.piece.color, getPossibleMoveArgs.allBoxes);
        if (visitingBox !== undefined) {
            allPossibleVisitingBoxes[label] = visitingBox;
        }
        if (killingBox !== undefined) {
            allPossibleKillBoxes[label] = killingBox;
        }
        if (shouldBreak) {
            break;
        } 
    }

    // Third Direction: bottom
    for (let i = startPositionX, j = startPositionY -1; !checkIfOutside(i, j); j--) {
        // Break when condition meet
        const {
            shouldBreak,
            label,
            visitingBox,
            killingBox
        } = getVisitingAndKillingBoxes(i, j, getPossibleMoveArgs.piece.color, getPossibleMoveArgs.allBoxes);
        if (visitingBox !== undefined) {
            allPossibleVisitingBoxes[label] = visitingBox;
        }
        if (killingBox !== undefined) {
            allPossibleKillBoxes[label] = killingBox;
        }
        if (shouldBreak) {
            break;
        }
    }

    // Fourth Direction: top left
    for (let i = startPositionX -1, j = startPositionY; !checkIfOutside(i, j); i--) {
        // Break when condition meet
        const {
            shouldBreak,
            label,
            visitingBox,
            killingBox
        } = getVisitingAndKillingBoxes(i, j, getPossibleMoveArgs.piece.color, getPossibleMoveArgs.allBoxes);
        if (visitingBox !== undefined) {
            allPossibleVisitingBoxes[label] = visitingBox;
        }
        if (killingBox !== undefined) {
            allPossibleKillBoxes[label] = killingBox;
        }
        if (shouldBreak) {
            break;
        }
    }
    return {
        allPossibleVisitingBoxes,
        allPossibleKillBoxes
    }
}

export { getPossibleMove };