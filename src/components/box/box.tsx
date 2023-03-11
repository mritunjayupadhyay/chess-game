import { allColorType } from "../../App.constant";
import { IPiece } from "../../interfaces/piece.interface";
import { IPosition } from "../../interfaces/position.interface";
import { Piece } from "../piece/piece";
import { BoxStyled, HiddenLabel } from "./box_styled";

export interface IBoxProps {
    position: IPosition;
    label: string;
    piece?: IPiece;
    active: boolean;
}

function Box(props: IBoxProps) {

    let boxColor = ((props.position.x + props.position.y) % 2) === 0 ? allColorType.DARK_COLOR : allColorType.LIGHT_COLOR;
    return (
        <BoxStyled color={boxColor} active={props.active}>
            <HiddenLabel>{props.label}</HiddenLabel>
            { props.piece ? <Piece {...props.piece} /> : null}
        </BoxStyled>
    )
}

export { Box };