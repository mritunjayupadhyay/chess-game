import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IPiece } from '../../interfaces/piece.interface';
import { RootState } from '../../store';
import { positionActions } from '../../store/position.slice';
import { getImageUrl } from './piece.helper';
import { PieceStyled } from './piece_styled';

export interface IPieceImage {
    url: string;
}



function Piece(props: IPiece) {
  const dispatch = useDispatch();
  const activeColor = useSelector((state: RootState) => state.game.activeColor);
  const handleClick = () => {
    if (activeColor !== props.color) {
      alert(`${activeColor} turn to play`);
      return;
    }
    dispatch(positionActions.makePieceActive(props))
  }
    const url = getImageUrl(props.type, props.color)
  return (
    <PieceStyled onClick={() => handleClick()} url={url}></PieceStyled>
  )
}

export { Piece }
