import { allColorType, colorType } from './../../App.constant';
import styled from 'styled-components';
import { IColor } from '../../interfaces/color.interface';
export interface IBoxStyledProp {
  color: colorType,
  active: boolean
}
export const BoxStyled = styled("div")<IBoxStyledProp>`
  position: relative;
  background-color: ${props => {
    if (props.active) {
      return 'rgba(255, 255, 0, 0.5)'
    } 
    return props.color === allColorType.LIGHT_COLOR ? props.theme.lightBackground : props.theme.darkBackground
  }}
`;

export const HiddenLabel = styled("label")`
 visibility: hidden;
`