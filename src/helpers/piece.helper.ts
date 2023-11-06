
import { allColorType, colorType, pieceType } from '../App.constant';
import { IPiece } from '../interfaces/piece.interface';
import { IBoxPosition, IPosition } from '../interfaces/position.interface';
import { IGetAllPossibleMove, getPossibleMove, isInDanger } from '../logic';
import { getUpdatedPositionAfterMove } from './position.helper';

export const getImageUrl = (type: pieceType, color: colorType): string => {
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

export const getUpdatePiecesAfterMovement = (pieces: IPiece[], movedPiece: IPiece, newPosition: IPosition): IPiece[] => {
  return pieces.map((item) => {
    if (item.position.x === movedPiece.position.x 
    && item.position.y === movedPiece.position.y) {
        return {...movedPiece, position: newPosition };
    }
    // If it is a kill
    if (item.position.x === newPosition.x && item.position.y === newPosition.y) {
        return {...item, isAlive: false, position: {x: -1, y: -1}}
    }
    return item;
});
}

export const getCheckAndCheckmate = (pieces: IPiece[], allPositions: Record<string, IBoxPosition>, movedPiece: IPiece, newPosition: IPosition, color: colorType )
: {check: colorType | undefined, checkmate: colorType | undefined} => {
  // check if there is check or checkmate
  const king = pieces.find((item) => item.color !== color && item.type === pieceType.KING);
  let check: undefined | colorType = undefined;
  let checkmate: undefined | colorType = undefined;
  if (king === undefined) {
      alert('Game Error');
      return { check, checkmate };
  }
  const piecesToKill = pieces.filter((item) => item.color === color && item.isAlive);
  if (isInDanger(piecesToKill, allPositions, king.position)) {
      check = king.color;
      const allPositionsAfterMove = getUpdatedPositionAfterMove(allPositions, movedPiece, newPosition)

      const getPossibleMoveArgs: IGetAllPossibleMove = {
          allBoxes: allPositionsAfterMove,
          piece: king
      }
      const { allPossibleKillBoxes, allPossibleVisitingBoxes } = getPossibleMove(getPossibleMoveArgs);
      checkmate = king.color;
      for (const move of Object.values({...allPossibleKillBoxes, ...allPossibleVisitingBoxes})) {

          if(!isInDanger(piecesToKill, allPositions, move.position)) {
              checkmate = undefined;
              break;
          }
      }
  }
  return { check, checkmate }
}