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

export type IColumnProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const Column = styled.View<IColumnProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

export default Column;
