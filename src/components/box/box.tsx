import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { allColorType } from "../../App.constant";
import { getLabel } from "../../helpers/label.helper";
import { ICastlingBox } from "../../interfaces/castling.interface";
import { IPiece } from "../../interfaces/piece.interface";
import { IPosition } from "../../interfaces/position.interface";
import { RootState } from "../../store";
import { gameActions } from "../../store/game.slice";
import { pieceActions } from "../../store/piece.slice";
import { positionActions } from "../../store/position.slice";
import { Piece } from "../piece/piece";
import { BoxStyled, CanCastleDiv, CanKillDiv, CanVisitDiv, HiddenLabel } from "./box_styled";

export interface IBoxProps {
    position: IPosition;
    label: string;
    piece?: IPiece;
    active: boolean;
    canKill: boolean;
    canVisit: boolean;
    canCastle: boolean;
    castlingData?: ICastlingBox
}

function Box(props: IBoxProps) {
    const dispatch = useDispatch();
    const activePiece = useSelector((state: RootState) => state.position.activePiece);
    const handleClick = () => {
        if (!activePiece) return;
        if (props.canCastle && props.castlingData) {
            const { king, rook, kingNextPosition, rookNextPosition } = props.castlingData;
            // Use above data to do castling(move pieces)
            console.log("castling data", king, rook, kingNextPosition, rookNextPosition);
            const castlingProps: ICastlingBox = {
                king,
                rook,
                kingNextPosition,
                rookNextPosition
            }
            // Move king and rook
            if (king.piece !== undefined && rook.piece !== undefined) {
                dispatch(positionActions.moveInCastling(castlingProps));
                dispatch(pieceActions.changePosition({
                    position: kingNextPosition, piece: king.piece
                }));
                dispatch(pieceActions.changePosition({
                    position: rookNextPosition, piece: rook.piece
                }));
            }
            dispatch(gameActions.nextMove());
        } else {
            if (props.canVisit || props.canKill) {
                dispatch(positionActions.moveToVisitingBox(props.position));
                dispatch(pieceActions.changePosition({
                    position: props.position, piece: activePiece
                }));
                dispatch(gameActions.nextMove());
            } else {
                dispatch(positionActions.makePieceInActive())
            }
        }
    }
    let boxColor = ((props.position.x + props.position.y) % 2) === 0 ? allColorType.DARK_COLOR : allColorType.LIGHT_COLOR;
    let clickable = !!props.piece || props.canVisit || props.canKill;
    return (
        <BoxStyled onClick={() => handleClick()} clickable={clickable} color={boxColor} active={props.active}>
            <HiddenLabel>{props.label}</HiddenLabel>
            {props.piece ? <Piece {...props.piece} /> : null}
            {props.canVisit ? <CanVisitDiv /> : null}
            {props.canKill ? <CanKillDiv /> : null}
            {props.canCastle ? <CanCastleDiv /> : null}
        </BoxStyled>
    )
}

export { Box };