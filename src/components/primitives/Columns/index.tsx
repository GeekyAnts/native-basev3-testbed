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

export type IColumnsProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const Columns = styled.View<IColumnsProps>`
  flex-direction: row;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

export default Columns;
