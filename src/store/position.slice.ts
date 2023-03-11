import { allBoxPositions } from './initialData/position.data';
import { IPiece } from './../interfaces/piece.interface';
import { createSlice } from "@reduxjs/toolkit";
import { IBoxPosition } from '../interfaces/position.interface';

interface IInitialState {
    activePiece: IPiece | undefined;
    allPositions: IBoxPosition[];
    allPossibleVisitingBoxes: IBoxPosition[];
}

const initialState:IInitialState = {
    activePiece: undefined,
    allPositions: allBoxPositions,
    allPossibleVisitingBoxes: []
}

function createReducers() {
    return {
        nextMove
    };

    function nextMove(state: IInitialState) {
        // state.activePlayer = 'dark';
    }
}

const slice = createSlice({
    name: 'position',
    initialState,
    reducers: createReducers()
});

// exports
export const positionActions = { 
    ...slice.actions };
export const positionReducer = slice.reducer;