import React from 'react';
import { allColorType, colorType, pieceType } from '../../App.constant';
import { IPiece } from '../../interfaces/piece.interface';
import { PieceStyled } from './piece_styled';

export interface IPieceImage {
    url: string;
}

function getImageUrl(type: pieceType, color: colorType): string {
  var image = "";

  if (type === pieceType.KING) {
    if (color === allColorType.LIGHT_COLOR) {
      image = "/assets/images/kingW.png"
    } else {
      image = "/assets/images/kingB.png"
    }
  }

  if (type === pieceType.QUEEN) {
    if (color === allColorType.LIGHT_COLOR) {
      image = "/assets/images/queenW.png"
    } else {
      image = "/assets/images/queenB.png"
    }
  }

  if (type === pieceType.ROOK) {
    if (color === allColorType.LIGHT_COLOR) {
      image = "/assets/images/rookW.png"
    } else {
      image = "/assets/images/rookB.png"
    }
  }

  if (type === pieceType.BISHOP) {
    if (color === allColorType.LIGHT_COLOR) {
      image = "/assets/images/bishopW.png"
    } else {
      image = "/assets/images/bishopB.png"
    }
  }
  

  if (type === pieceType.KNIGHT) {
    if (color === allColorType.LIGHT_COLOR) {
      image = "/assets/images/knightW.png"
    } else {
      image = "/assets/images/knightB.png"
    }
  }

  if (type === pieceType.PAWN) {
    if (color === allColorType.LIGHT_COLOR) {
      image = "/assets/images/pawnW.png"
    } else {
      image = "/assets/images/pawnB.png"
    }
  }

  return image;
}

function Piece(props: IPiece) {
    const url = getImageUrl(props.type, props.color)
  return (
    <PieceStyled url={url}></PieceStyled>
  )
}

export { Piece }