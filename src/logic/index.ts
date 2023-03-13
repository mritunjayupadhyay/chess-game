import { IPiece } from './../interfaces/piece.interface';
import { IBoxPosition } from '../interfaces/position.interface';
import * as pawnLogic from './pawn.logic';
import { pieceType } from '../App.constant';

export interface IGetAllPossibleMove {
    allBoxes: Record<string, IBoxPosition>;
    piece: IPiece;
}

const getPossibleMove = (getPossibleMoveArgs: IGetAllPossibleMove)
    : {
        allPossibleVisitingBoxes: Record<string, IBoxPosition>,
        allPossibleKillBoxes: Record<string, IBoxPosition>
    } => {
    let allPossibleVisitingBoxes: Record<string, IBoxPosition> = {},
        allPossibleKillBoxes: Record<string, IBoxPosition> = {};

    if (getPossibleMoveArgs.piece.type === pieceType.PAWN) {
        return pawnLogic.getPossibleMove(getPossibleMoveArgs)
    }
    return {
        allPossibleVisitingBoxes,
        allPossibleKillBoxes
    }
}

export { getPossibleMove };