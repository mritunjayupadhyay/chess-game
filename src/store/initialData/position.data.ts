import { IPosition } from './../../interfaces/position.interface';
import { HorizontalKeys, VerticalKeys } from "../../App.constant";
import { IBoxPosition } from "../../interfaces/position.interface";
import { pieceData } from "./piece.data";
import { getLabel } from '../../helpers/label.helper';
export const allBoxAsObj: Record<string, IBoxPosition> = {};

// Add boxes to a Map
for (let j = VerticalKeys.length - 1; j >= 0; j--) {
    for (let i = 0; i < HorizontalKeys.length; i++) {
        const position: IPosition = { x: i, y: j };
        const label = getLabel(i, j);
        const boxPosition: IBoxPosition = {
            label, 
            position: position
        }
        allBoxAsObj[label] = boxPosition;
    }
}

// Add pieces to Box in Map
for (let k = 0; k < pieceData.length; k++) {
    const position: IPosition = pieceData[k].position;
    const label = getLabel(position.x, position.y)
    const boxPosition = allBoxAsObj[label];
    if (boxPosition !== undefined && boxPosition?.label === label) {
        const newBoxPosition: IBoxPosition = {...boxPosition, piece: pieceData[k]}
        allBoxAsObj[label] = newBoxPosition;
    }
}
