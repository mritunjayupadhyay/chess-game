import { useSelector } from "react-redux";
import { pieceType } from "../../App.constant";
import { IColor } from "../../interfaces/color.interface";
import { RootState } from "../../store";
import { getImageUrl } from "../piece/piece.helper";
import { EachPiece, FallenPieceStyled, NameAndPiecesContainer, NameContainer, NumberContainer, PieceListContainer, ProfilePic, ProfilePicContainer } from "./fallen_pieces.styled";

function FallenPieces(props: IColor) {
    const imageUrl = getImageUrl(pieceType.KING, props.color);
    const pieces = useSelector((state: RootState) => state.piece.pieces.filter((item) => (item.color === props.color && item.isAlive === false)));
    const opponentPieces = useSelector((state: RootState) => state.piece.pieces.filter((item) => (item.color !== props.color && item.isAlive === false)));
    const ourPoint = pieces.reduce((sum, item) => sum + item.points, 0);
    const opponentPoint = opponentPieces.reduce((sum, item) => sum + item.points, 0)
    const point = opponentPoint - ourPoint;
    const renderAllPieces = () => {
        return opponentPieces.map((item) => {
            const pieceUrl = getImageUrl(item.type, item.color);
            return (
                <EachPiece src={pieceUrl}/>
            );
        })
    }
    return (
        <FallenPieceStyled color={props.color}>
            <ProfilePicContainer color={props.color}>
                <ProfilePic src={imageUrl} />
            </ProfilePicContainer>
            <NameAndPiecesContainer>
                <NameContainer>Player {props.color}</NameContainer>
                <PieceListContainer>
                    {renderAllPieces()}
                    {point > 0 ? <NumberContainer>{point}+</NumberContainer> : null}
                </PieceListContainer>
            </NameAndPiecesContainer>
        </FallenPieceStyled>
    )
}

export { FallenPieces };