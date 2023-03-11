import { allBoxAsObj } from './initialData/position.data';
import { IPiece } from './../interfaces/piece.interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoxPosition } from '../interfaces/position.interface';
import { getPossibleMove, IGetAllPossibleMove } from '../logic';

interface IInitialState {
    activePiece: IPiece | undefined;
    allPositions: Record<string, IBoxPosition>;
    allPossibleVisitingBoxes: Record<string, IBoxPosition>;
    allPossibleKillBoxes: Record<string, IBoxPosition>;
}

const initialState:IInitialState = {
    activePiece: undefined,
    allPositions: allBoxAsObj,
    allPossibleVisitingBoxes: {},
    allPossibleKillBoxes: {}
}

function createReducers() {
    return {
        nextMove,
        makePieceActive
    };

    function nextMove(state: IInitialState) {
        // state.activePlayer = 'dark';
    }
    function makePieceActive(state: IInitialState, action: PayloadAction<IPiece>) {
        console.log("this call is from makePieceActive")
        const allBoxesCloned = {...state.allPositions};
        const getPossibleMoveArgs: IGetAllPossibleMove = {
            allBoxes: allBoxesCloned,
            piece: action.payload
        }
        const { allPossibleKillBoxes, allPossibleVisitingBoxes } = getPossibleMove(getPossibleMoveArgs);
        // state = {...state, activePiece: action.payload, allPossibleKillBoxes, allPossibleVisitingBoxes};
        state.activePiece = action.payload;
        state.allPossibleKillBoxes = allPossibleKillBoxes;
        state.allPossibleVisitingBoxes = allPossibleVisitingBoxes;
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