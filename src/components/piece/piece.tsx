import React from 'react';
import { useDispatch } from 'react-redux';
import { IPiece } from '../../interfaces/piece.interface';
import { positionActions } from '../../store/position.slice';
import { getImageUrl } from './piece.helper';
import { PieceStyled } from './piece_styled';

export interface IPieceImage {
    url: string;
}



function Piece(props: IPiece) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(positionActions.makePieceActive(props))
  }
    const url = getImageUrl(props.type, props.color)
  return (
    <PieceStyled onClick={() => handleClick()} url={url}></PieceStyled>
  )
}

export { Piece }
