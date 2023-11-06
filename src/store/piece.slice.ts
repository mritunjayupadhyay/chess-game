import { IPiece } from './../interfaces/piece.interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pieceData } from './initialData/piece.data';
import { colorType } from '../App.constant';
import { ICastlingData } from '../interfaces/castling.interface';
import { IBoxPosition, IPosition } from '../interfaces/position.interface';
import { castlingData, getUpdatedCastlingData } from '../logic/castling.logic';
import { getCheckAndCheckmate, getUpdatePiecesAfterMovement } from '../helpers/piece.helper';

interface IInitialState {
    activeColor: string;
    check: colorType | undefined;
    checkmate: colorType | undefined;
    pieces: IPiece[],
    castlingData: Record<colorType, ICastlingData>
}

interface IChangePositionProps {
    allPositions: Record<string, IBoxPosition>,
    position: IPosition
    piece: IPiece
}

const initialState:IInitialState = {
    activeColor: 'light',
    check: undefined,
    checkmate: undefined,
    pieces: pieceData,
    castlingData: castlingData
}

function createReducers() {
    return {
        changePosition,
    };

    function changePosition(state: IInitialState, action: PayloadAction<IChangePositionProps>) {
        // const newPosition = {...action.payload.position};
        const {piece, allPositions, position: newPosition} = action.payload;
        const stateCopy = {...state};

        // Get updated Pieces after movement
        const pieces = getUpdatePiecesAfterMovement(stateCopy.pieces, piece, newPosition)

        // Get updated castling Data
        const newCastlingData = getUpdatedCastlingData(stateCopy.castlingData[piece.color], piece)

        // Get Check and checkmate
        const { check, checkmate } = getCheckAndCheckmate(pieces, allPositions, piece, newPosition, piece.color)
       
        state.pieces = pieces;
        state.castlingData[piece.color] = newCastlingData
        state.check = check;
        state.checkmate = checkmate
    }
}

const slice = createSlice({
    name: 'piece',
    initialState,
    reducers: createReducers()
});

// exports
export const pieceActions = { 
    ...slice.actions };
export const pieceReducer = slice.reducer;