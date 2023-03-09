import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { gameReducer } from './game.slice';
import { pieceReducer } from './piece.slice';
import { positionReducer } from './position.slice';

export const store = configureStore({
    reducer: {
        game: gameReducer,
        piece: pieceReducer,
        position: positionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});