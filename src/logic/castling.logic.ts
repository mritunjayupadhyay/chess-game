import { getLabel } from './../helpers/label.helper';
import { IGetAllPossibleMove } from '.';
import { ICastlingBox } from '../interfaces/castling.interface';
import { IPosition } from './../interfaces/position.interface';
import { kingMovementInCastling } from '../App.constant';
export const getCastlingBox = (getPossibleMoveArgs: IGetAllPossibleMove, rookPosition: IPosition): { label: string, value: ICastlingBox | undefined} => {
    var label = '';
    var value: ICastlingBox | undefined = undefined;

    // Get data of arguments (all boxes and the specific piece)
    const {
        allBoxes,
        piece
    } = getPossibleMoveArgs;

    // Rook and king will be in a horizontal line;
    const yIndex = piece.position.y;
    const isLeftRook: boolean = piece.position.x > rookPosition.x;
    let startIndex = isLeftRook ? rookPosition.x : piece.position.x;
    let lastIndex = isLeftRook ? piece.position.x : rookPosition.x;
    // Check if there is any piece between rook and king. If yes then return undefined.
    for (let i = startIndex + 1; i < lastIndex; i++) {
        const label = getLabel(i, yIndex);
        const box = allBoxes[label];
        if (!(box && box.piece === undefined)) {
            return { label: '', value: undefined}
        }
    }
    const kingNextPositionX = isLeftRook ? piece.position.x - kingMovementInCastling : piece.position.x + kingMovementInCastling
    const kingLabel = getLabel(piece.position.x, piece.position.y);
    const rookLabel = getLabel(rookPosition.x, rookPosition.y);
    value = {
        kingNextPosition: { 
            x: kingNextPositionX,
            y: yIndex
        },
        rookNextPosition: {
            x: isLeftRook ? kingNextPositionX + 1 : kingNextPositionX - 1,
            y: yIndex
        },
        king: allBoxes[kingLabel],
        rook: allBoxes[rookLabel]
    }
    return { label: getLabel(kingNextPositionX, yIndex), value};
}