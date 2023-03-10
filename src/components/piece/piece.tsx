import { IPiece } from '../../interfaces/piece.interface';
import { getImageUrl } from './piece.helper';
import { PieceStyled } from './piece_styled';

export interface IPieceImage {
  url: string;
}

function Piece(props: IPiece) {
  const url = getImageUrl(props.type, props.color)
  return (
    <PieceStyled url={url}></PieceStyled>
  )
}

export { Piece }