import { HorizontalKeys, VerticalKeys } from "../../App.constant";
import { IBoxPosition } from "../../interfaces/position.interface";

export const allBoxPositions: IBoxPosition[] = [];

for (let j = VerticalKeys.length - 1; j >= 0; j--) {
    for (let i = 0; i < HorizontalKeys.length; i++) {
        allBoxPositions.push({
            label: `${VerticalKeys[j]}${HorizontalKeys[i]}`, 
            position: { x: i, y: j }
        })
    }
}
