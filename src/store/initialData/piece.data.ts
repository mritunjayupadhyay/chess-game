import { pieceType, allColorType, piecePoint } from '../../App.constant';
import { IPiece } from './../../interfaces/piece.interface';
export const pieceData: IPiece[] = [];

// This is example of rook at chess.com. Here the size can be different for different screen. (50. 100, 150)
// In future we can use these as it is more good looking.
// https://www.chess.com/chess-themes/pieces/neo/50/br.png

// Add King
pieceData.push({
    position: {x: 4, y: 0},
    isAlive: true,
    type: pieceType.KING,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.KING
});
pieceData.push({
    position: {x: 4, y: 7},
    isAlive: true,
    type: pieceType.KING,
    color: allColorType.DARK_COLOR,
    points: piecePoint.KING
});

// Add Queen
pieceData.push({
    position: {x: 3, y: 0},
    isAlive: true,
    type: pieceType.QUEEN,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.QUEEN
});
pieceData.push({
    position: {x: 3, y: 7},
    isAlive: true,
    type: pieceType.QUEEN,
    color: allColorType.DARK_COLOR,
    points: piecePoint.QUEEN
});

// Add ROOK
pieceData.push({
    position: {x: 0, y: 0},
    isAlive: true,
    type: pieceType.ROOK,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.ROOK
});
pieceData.push({
    position: {x: 7, y: 0},
    isAlive: true,
    type: pieceType.ROOK,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.ROOK
});

pieceData.push({
    position: {x: 0, y: 7},
    isAlive: true,
    type: pieceType.ROOK,
    color: allColorType.DARK_COLOR,
    points: piecePoint.ROOK
});
pieceData.push({
    position: {x: 7, y: 7},
    isAlive: true,
    type: pieceType.ROOK,
    color: allColorType.DARK_COLOR,
    points: piecePoint.ROOK
});

// Add Bishop
pieceData.push({
    position: {x: 2, y: 0},
    isAlive: true,
    type: pieceType.BISHOP,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.BISHOP
});
pieceData.push({
    position: {x: 5, y: 0},
    isAlive: true,
    type: pieceType.BISHOP,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.BISHOP
});

pieceData.push({
    position: {x: 2, y: 7},
    isAlive: true,
    type: pieceType.BISHOP,
    color: allColorType.DARK_COLOR,
    points: piecePoint.BISHOP
});
pieceData.push({
    position: {x: 5, y: 7},
    isAlive: true,
    type: pieceType.BISHOP,
    color: allColorType.DARK_COLOR,
    points: piecePoint.BISHOP
});

// Add Knight
pieceData.push({
    position: {x: 1, y: 0},
    isAlive: true,
    type: pieceType.KNIGHT,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.KNIGHT
});
pieceData.push({
    position: {x: 6, y: 0},
    isAlive: true,
    type: pieceType.KNIGHT,
    color: allColorType.LIGHT_COLOR,
    points: piecePoint.KNIGHT
});

pieceData.push({
    position: {x: 1, y: 7},
    isAlive: true,
    type: pieceType.KNIGHT,
    color: allColorType.DARK_COLOR,
    points: piecePoint.KNIGHT
});
pieceData.push({
    position: {x: 6, y: 7},
    isAlive: true,
    type: pieceType.KNIGHT,
    color: allColorType.DARK_COLOR,
    points: piecePoint.KNIGHT
});

// Add pawn
for (let i = 0; i < 8; i++) {
    // Add Light color pawn
    pieceData.push({
        position: {x: i, y: 1},
        isAlive: true,
        type: pieceType.PAWN,
        color: allColorType.LIGHT_COLOR,
        points: piecePoint.PAWN
    });
    // Add Dark color pawn
    pieceData.push({
        position: {x: i, y: 6},
        isAlive: true,
        type: pieceType.PAWN,
        color: allColorType.DARK_COLOR,
        points: piecePoint.PAWN
    })
}