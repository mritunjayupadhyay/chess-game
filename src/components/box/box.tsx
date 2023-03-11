import { useEffect, useMemo, useState } from "react";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { allColorType } from "../../App.constant";
import { IPiece } from "../../interfaces/piece.interface";
import { IPosition } from "../../interfaces/position.interface";
import { RootState } from "../../store";
import { Piece } from "../piece/piece";
import { BoxStyled, HiddenLabel } from "./box_styled";

export interface IBoxProps {
    position: IPosition;
    label: string;
}

function Box(props: IBoxProps) {
    const initialPieceData: IPiece[] = [];
    const [pieceData, setPiecesData] = useState(initialPieceData);
    const pieces = useSelector((state: RootState) => state.piece.pieces);
    const p: IPiece[] = useMemo(() => {
        return pieces.filter((item) => {
            return (item.position.x === props.position.x)
            && (item.position.y === props.position.y)
        });
    }, [pieces, props.position]);

    useEffect(() => {
        setPiecesData([...p])
    }, [p]);

    let boxColor = ((props.position.x + props.position.y) % 2) === 0 ? allColorType.DARK_COLOR : allColorType.LIGHT_COLOR;
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
          accept: 'piece',
          drop: () => true,
          canDrop: () => true,
          collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
          })
        })
    )

    return (
        <BoxStyled ref={drop} color={boxColor}>
            <HiddenLabel>{props.label}</HiddenLabel>
            { pieceData.length ? <Piece {...pieceData[0]} /> : null}
        </BoxStyled>
    )
}

export { Box };