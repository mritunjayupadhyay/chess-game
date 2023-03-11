import { allBoxAsObj } from './initialData/position.data';
import { IPiece } from './../interfaces/piece.interface';
import { createSlice } from "@reduxjs/toolkit";
import { IBoxPosition } from '../interfaces/position.interface';

interface IInitialState {
    activePiece: IPiece | undefined;
    allPositions: Record<string, IBoxPosition>;
    allPossibleVisitingBoxes: Record<string, IBoxPosition>;
}

const initialState:IInitialState = {
    activePiece: undefined,
    allPositions: allBoxAsObj,
    allPossibleVisitingBoxes: {}
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