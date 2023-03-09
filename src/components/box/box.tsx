import { DarkColor, LightColor, pieceType } from "../../App.constant";
import { IPiece } from "../../interfaces/piece.interface";
import { IPosition } from "../../interfaces/position.interface";
import { Piece } from "../piece/piece";
import { BoxStyled, HiddenLabel } from "./box_styled";

export interface IBoxProps {
    position: IPosition;
    label: string;
}

function Box(props: IBoxProps) {
    const p: IPiece = {
        position: { x: 1, y: 1},
        color: "light",
        type: pieceType.BISHOP
    }
    console.log("the props we have", props);
    let boxColor = ((props.position.x + props.position.y) % 2) === 0 ? DarkColor : LightColor;
    return (
        <BoxStyled color={boxColor}>
            <HiddenLabel>{props.label}</HiddenLabel>
            <Piece {...p} />
        </BoxStyled>
    )
}

export { Box };