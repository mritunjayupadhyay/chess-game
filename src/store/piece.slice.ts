import { allColorType, pieceType } from './../App.constant';
import { IPiece } from './../interfaces/piece.interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pieceData } from './initialData/piece.data';
import { IPositionAndPiece } from '../interfaces';
import { colorType } from '../App.constant';
import { ICastlingData } from '../interfaces/castling.interface';

interface IInitialState {
    activeColor: string;
    winner: string | undefined;
    draw: boolean;
    pieces: IPiece[],
    castlingData: Record<colorType, ICastlingData>
}

const castlingData: Record<colorType, ICastlingData> = {
   [allColorType.LIGHT_COLOR]: {
    isDone: false,
    isKingMoved: false,
    rook: [
        {
            isMoved: false,
            position: {
                x: 0, y: 0
            }
        },
        {
            isMoved: false,
            position: {
                x: 7, y: 0
            }
        }
    ]
   },
   [allColorType.DARK_COLOR]: {
    isDone: false,
    isKingMoved: false,
    rook: [
        {
            isMoved: false,
            position: {
                x: 0, y: 7
            }
        },
        {
            isMoved: false,
            position: {
                x: 7, y: 7
            }
        }
    ]
   }
}

const initialState:IInitialState = {
    activeColor: 'light',
    winner: undefined,
    draw: false,
    pieces: pieceData,
    castlingData: castlingData
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
            // If it is a kill
            if (item.position.x === newPosition.x && item.position.y === newPosition.y) {
                return {...item, isAlive: false, position: {x: -1, y: -1}}
            }
            return item;
        });
        const castlingData = state.castlingData[piece.color]
        if (!(castlingData.isDone || castlingData.isKingMoved)) {
             // Check if rook has been moved
            if (piece.type === pieceType.ROOK) {
                const rook = castlingData.rook.map((item) => {
                    if (item.position.x === piece.position.x && item.position.y === piece.position.y) {
                        return {...item, isMoved: true }
                    }
                    return item
                })
                const isDone = rook.filter((item) => item.isMoved === false).length === 0;
                state.castlingData[piece.color].isDone = isDone;
                state.castlingData[piece.color].rook = rook;
            }
            // Check if King is moved.
            if (piece.type === pieceType.KING) {
                state.castlingData[piece.color].isKingMoved = true       
            }
        }
       
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