export const HorizontalKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const VerticalKeys = ['1', '2', '3', '4', '5', '6', '7', '8'];
export type colorType = 'light' | 'dark';

export enum pieceType {
    PAWN = "PAWN",
    KNIGHT = "KNIGHT",
    BISHOP = "BISHOP",
    ROOK = "ROOK",
    QUEEN = "QUEEN",
    KING = "KING"
}

export enum piecePoint {
    PAWN = 1,
    KNIGHT = 3,
    BISHOP = 3,
    ROOK = 5,
    QUEEN = 9,
    KING = 1000
}

export const LightColor: colorType = 'light';
export const DarkColor: colorType = 'dark';

export enum allColorType {
    LIGHT_COLOR = "light",
    DARK_COLOR = "dark"
}