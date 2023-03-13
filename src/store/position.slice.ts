import { getLabel } from './../helpers/label.helper';
import { allBoxAsObj } from './initialData/position.data';
import { IPiece } from './../interfaces/piece.interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoxPosition, IPosition } from '../interfaces/position.interface';
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
        moveToVisitingBox,
        makePieceInActive,
        makePieceActive
    };

    function moveToVisitingBox(state: IInitialState, action: PayloadAction<IPosition>) {
        // state.activeColor = 'dark';
        const newPosition = action.payload;
        const label = getLabel(newPosition.x, newPosition.y);
        const { activePiece } = state;
        if (activePiece) {
            const activePieceLabel = getLabel(activePiece.position.x, activePiece.position.y);
            state.allPositions[label].piece = activePiece;
            state.allPositions[activePieceLabel].piece = undefined;
            state.activePiece = undefined;
            state.allPossibleKillBoxes = {};
            state.allPossibleVisitingBoxes = {};
        }
        
    }
    function makePieceInActive(state: IInitialState) {
        state.activePiece = undefined;
        state.allPossibleKillBoxes = {};
        state.allPossibleVisitingBoxes = {};
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