import { IPiece } from './../interfaces/piece.interface';
import { createSlice } from "@reduxjs/toolkit";
import { pieceData } from './initialData/piece.data';

interface IInitialState {
    activePlayer: string;
    winner: string | undefined;
    draw: boolean;
    pieces: IPiece[]
}

const initialState:IInitialState = {
    activePlayer: 'light',
    winner: undefined,
    draw: false,
    pieces: pieceData
}

function createReducers() {
    return {
        nextMove
    };

    function nextMove(state: IInitialState) {
        state.activePlayer = 'dark';
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