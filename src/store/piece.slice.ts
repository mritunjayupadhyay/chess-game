import { IPiece } from './../interfaces/piece.interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pieceData } from './initialData/piece.data';
import { IPositionAndPiece } from '../interfaces';

interface IInitialState {
    activeColor: string;
    winner: string | undefined;
    draw: boolean;
    pieces: IPiece[]
}

const initialState:IInitialState = {
    activeColor: 'light',
    winner: undefined,
    draw: false,
    pieces: pieceData
}

function createReducers() {
    return {
        changePosition
    };

    function changePosition(state: IInitialState, action: PayloadAction<IPositionAndPiece>) {
        const newPosition = {...action.payload.position};
        const piece = action.payload.piece;
        const pieces = state.pieces.map((item) => {
            if (item.position.x === piece.position.x 
            && item.position.y === piece.position.y) {
                return {...piece, position: newPosition };
            }
            return item;
        });
        state.pieces = pieces;
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