import { IGetAllPossibleMove } from ".";
import { getLabel } from "../helpers/label.helper";
import { IBoxPosition, IPosition } from "../interfaces/position.interface";

const getPossibleMove = (getPossibleMoveArgs: IGetAllPossibleMove)
    : {
        allPossibleVisitingBoxes: Record<string, IBoxPosition>,
        allPossibleKillBoxes: Record<string, IBoxPosition>
    } => {
    let allPossibleVisitingBoxes: Record<string, IBoxPosition> = {},
        allPossibleKillBoxes: Record<string, IBoxPosition> = {};
    const {
        allBoxes,
        piece
    } = getPossibleMoveArgs;
    const positions: IPosition[] = [];
    positions.push({
        x: piece.position.x,
        y: piece.position.y + 1
    });
    positions.push({
        x: piece.position.x,
        y: piece.position.y + 2
    });
    for (let i = 0; i < positions.length; i++) {
        const label = getLabel(positions[i].x, positions[i].y);
        const box = allBoxes[label];
        if (box.piece) {
            if (box.piece?.color !== piece.color) {
                allPossibleKillBoxes[label] = box;
            }
        } else {
            allPossibleVisitingBoxes[label] = box;
        }
    }
    return {
        allPossibleVisitingBoxes,
        allPossibleKillBoxes
    }
}

export { getPossibleMove };