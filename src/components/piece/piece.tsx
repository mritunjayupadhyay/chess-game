import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pieceType } from '../../App.constant';
import { IPiece } from '../../interfaces/piece.interface';
import { RootState } from '../../store';
import { IGetCastingPayloadProps, positionActions } from '../../store/position.slice';
import { getImageUrl } from './piece.helper';
import { PieceStyled } from './piece_styled';

export interface IPieceImage {
    url: string;
}



function Piece(props: IPiece) {
  const dispatch = useDispatch();
  const activeColor = useSelector((state: RootState) => state.game.activeColor);
  const castlingData = useSelector((state: RootState) => state.piece.castlingData[props.color])

  const handleClick = () => {
    if (activeColor !== props.color) {
      alert(`${activeColor} turn to play`);
      return;
    }
    dispatch(positionActions.makePieceActive(props));
    if (props.type === pieceType.KING && (!castlingData.isDone && !castlingData.isKingMoved)) {
      // Check if we can castle or not :TODO
      const castingPayloadProps: IGetCastingPayloadProps = {
        piece: props,
        rooks: castlingData.rook.filter((item) => !item.isMoved).map((item) => item.position)
      }
      dispatch(positionActions.getKingCastlingAndDangerBoxes(castingPayloadProps));
    }
  }
    const url = getImageUrl(props.type, props.color)
  return (
    <PieceStyled onClick={() => handleClick()} url={url}></PieceStyled>
  )
}

export { Piece }
