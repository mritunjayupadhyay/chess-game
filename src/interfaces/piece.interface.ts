import { colorType, pieceType } from './../App.constant';
import { IPosition } from './position.interface';
export interface IPiece {
    position: IPosition;
    color: colorType;
    type: pieceType;
}