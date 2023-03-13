import { IPiece } from './../interfaces/piece.interface';
import { createSlice } from "@reduxjs/toolkit";
import { pieceData } from './initialData/piece.data';

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
        nextMove
    };

    function nextMove(state: IInitialState) {
        state.activeColor = 'dark';
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