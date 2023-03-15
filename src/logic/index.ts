import { IPiece } from './../interfaces/piece.interface';
import { IBoxPosition } from '../interfaces/position.interface';
import * as pawnLogic from './pawn.logic';
import * as knightLogic from './knight.logic';
import * as bishopLogic from './bishop.logic';
import * as rookLogic from './rook.logic';
import * as queenLogic from './queen.logic';
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
    switch (getPossibleMoveArgs.piece.type) {
        case pieceType.PAWN:
            return pawnLogic.getPossibleMove(getPossibleMoveArgs);
        case pieceType.KNIGHT:
            return knightLogic.getPossibleMove(getPossibleMoveArgs);
        case pieceType.BISHOP:
            return bishopLogic.getPossibleMove(getPossibleMoveArgs);
        case pieceType.ROOK:
            return rookLogic.getPossibleMove(getPossibleMoveArgs);
        case pieceType.QUEEN:
            return queenLogic.getPossibleMove(getPossibleMoveArgs);
        default:
            return {
                allPossibleVisitingBoxes,
                allPossibleKillBoxes
            }
    }
}

export { getPossibleMove };