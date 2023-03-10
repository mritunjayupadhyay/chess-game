import { allColorType } from './../../App.constant';
import styled from 'styled-components';
import { IColor } from '../../interfaces/color.interface';
export const BoxStyled = styled("div")<IColor>`
  position: relative;
  background-color: ${props => props.color === allColorType.LIGHT_COLOR ? props.theme.lightBackground : props.theme.darkBackground}
`;

export const HiddenLabel = styled("label")`
 visibility: hidden;
`