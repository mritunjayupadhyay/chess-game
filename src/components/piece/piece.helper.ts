import { allColorType, colorType, pieceType } from "../../App.constant";

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