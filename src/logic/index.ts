import { IPiece } from './../interfaces/piece.interface';
import { IBoxPosition } from '../interfaces/position.interface';
import * as pawnLogic from './pawn.logic';
import * as knightLogic from './knight.logic';
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
    if (getPossibleMoveArgs.piece.type === pieceType.KNIGHT) {
        return knightLogic.getPossibleMove(getPossibleMoveArgs)
    }
    return {
        allPossibleVisitingBoxes,
        allPossibleKillBoxes
    }
}

export { getPossibleMove };