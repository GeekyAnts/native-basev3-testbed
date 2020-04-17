import styled from "styled-components/native";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space,
} from "styled-system";

export type IBoxProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const Box = styled.View<IBoxProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

export default Box;
