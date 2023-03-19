import { getLabel } from './../helpers/label.helper';
import { allBoxAsObj } from './initialData/position.data';
import { IPiece } from './../interfaces/piece.interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoxPosition, IPosition } from '../interfaces/position.interface';
import { getPossibleMove, IGetAllPossibleMove } from '../logic';
import { ICastlingBox } from '../interfaces/castling.interface';
import { getCastlingBox } from '../logic/castling.logic';
export interface IGetCastingPayloadProps {
    piece: IPiece,
    rooks: IPosition[]
}
interface IInitialState {
    activePiece: IPiece | undefined;
    allPositions: Record<string, IBoxPosition>;
    allPossibleVisitingBoxes: Record<string, IBoxPosition>;
    allPossibleKillBoxes: Record<string, IBoxPosition>;
    castlingBoxes: Record<string, ICastlingBox>
}

const initialState:IInitialState = {
    activePiece: undefined,
    allPositions: allBoxAsObj,
    allPossibleVisitingBoxes: {},
    allPossibleKillBoxes: {},
    castlingBoxes: {}
}

function createReducers() {
    return {
        moveInCastling,
        moveToVisitingBox,
        makePieceInActive,
        makePieceActive,
        getKingCastlingAndDangerBoxes
    };

    function moveInCastling(state: IInitialState, action: PayloadAction<ICastlingBox>) {
        const { king, rook, kingNextPosition, rookNextPosition } = action.payload;
        if (king !== undefined && rook !== undefined) {
            const newKingPiece = { ...king, position: kingNextPosition };
            const newRookPiece = { ...rook, position: rookNextPosition };
            const kingLabel = getLabel(king.position.x, king.position.y);
            const rookLabel = getLabel(rook.position.x, rook.position.y);
            const newKingLabel = getLabel(kingNextPosition.x, kingNextPosition.y);
            const newRookLabel = getLabel(rookNextPosition.x, rookNextPosition.y);
            state.allPositions[newKingLabel] = newKingPiece;
            state.allPositions[newRookLabel] = newRookPiece;
            state.allPositions[kingLabel].piece = undefined;
            state.allPositions[rookLabel].piece = undefined;
            state.activePiece = undefined;
            state.allPossibleKillBoxes = {};
            state.allPossibleVisitingBoxes = {};
            state.castlingBoxes = {}
        }
    }

    function moveToVisitingBox(state: IInitialState, action: PayloadAction<IPosition>) {
        const newPosition = {...action.payload};
        const label = getLabel(newPosition.x, newPosition.y);
        if (state.activePiece !== undefined) {
            const newActivePiece  = {...state.activePiece, position: newPosition};
            const activePieceLabel = getLabel(state.activePiece?.position.x, state.activePiece.position.y);
            state.allPositions[label].piece = newActivePiece;
            state.allPositions[activePieceLabel].piece = undefined;
            state.activePiece = undefined;
            state.allPossibleKillBoxes = {};
            state.allPossibleVisitingBoxes = {};
            state.castlingBoxes = {}
        }
        
    }
    function makePieceInActive(state: IInitialState) {
        state.activePiece = undefined;
        state.allPossibleKillBoxes = {};
        state.allPossibleVisitingBoxes = {};
        state.castlingBoxes = {}
    }
    function makePieceActive(state: IInitialState, action: PayloadAction<IPiece>) {
        const allBoxesCloned = {...state.allPositions};
        const getPossibleMoveArgs: IGetAllPossibleMove = {
            allBoxes: allBoxesCloned,
            piece: action.payload
        }
        const { allPossibleKillBoxes, allPossibleVisitingBoxes } = getPossibleMove(getPossibleMoveArgs);
        state.activePiece = action.payload;
        state.allPossibleKillBoxes = allPossibleKillBoxes;
        state.allPossibleVisitingBoxes = allPossibleVisitingBoxes;
    }
    function getKingCastlingAndDangerBoxes(state: IInitialState, action: PayloadAction<IGetCastingPayloadProps>) {
        const { piece, rooks } = action.payload;
        const allBoxesCloned = {...state.allPositions};
        const getPossibleMoveArgs: IGetAllPossibleMove = {
            allBoxes: allBoxesCloned,
            piece
        }
        for (let i = 0; i < rooks.length; i++) {
            const rookPosition = rooks[i];
            const { label, value} = getCastlingBox(getPossibleMoveArgs, rookPosition);
            if (value !== undefined) {
                state.castlingBoxes[label] = value;
            }
        }
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