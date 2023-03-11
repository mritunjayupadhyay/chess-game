import { DragPreviewImage, useDrag } from 'react-dnd';
import { IPiece } from '../../interfaces/piece.interface';
import { getImageUrl } from './piece.helper';
import { PieceStyled } from './piece_styled';

export interface IPieceImage {
  url: string;
  isDragging: boolean;
}

function Piece(props: IPiece) {
  const url = getImageUrl(props.type, props.color);
  // `${props.color}_${props.type}_${props.position.x}_${props.position.y}`,
  const [{isDragging}, drag, preview] = useDrag(() => ({
    type: 'piece',
    item: {...props},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [props.color, props.type, props.position.x, props.position.y])
  return (
    <>
    {
      isDragging 
      ? <DragPreviewImage connect={preview} src={url} /> 
      : <PieceStyled ref={drag} url={url} isDragging={isDragging}></PieceStyled>
    }
    
    </>
  )
}

export { Piece }