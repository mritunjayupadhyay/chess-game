import React from 'react';
import { IPiece } from '../../interfaces/piece.interface';
import { PieceStyled } from './piece_styled';

export interface IPieceImage {
    url: string;
}

function Piece(props: IPiece) {
    const url = "/assets/images/pawnW.png"
  return (
    <PieceStyled url={url}></PieceStyled>
  )
}

export { Piece }