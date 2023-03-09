import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    activePlayer: string;
    winner: string | undefined;
    draw: boolean;
}

const initialState:IInitialState = {
    activePlayer: 'light',
    winner: undefined,
    draw: false
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