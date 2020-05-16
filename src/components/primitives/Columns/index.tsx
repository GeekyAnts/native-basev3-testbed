import React from "react";
import { ViewProps, ViewStyle } from "react-native";
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
  space as spacing,
} from "styled-system";

import { getSpacedChildren } from "../../../utils";

import View from "../View";

export type IColumnsProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const StyledColumns = styled(View)(color, spacing, layout, flexbox, border);

type ColumnsProps = IColumnsProps &
  ViewProps & {
    align?: "left" | "right" | "center";
    alignY?: "top" | "bottom" | "center";
    reverse?: boolean;
    children: JSX.Element[] | JSX.Element;
    space?: number;
  };

const getAlignValue = (alignValue: "left" | "right" | "center") => {
  switch (alignValue) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    case "center":
      return "center";
    default:
      return "center";
  }
};
const getAlignYValue = (alignYValue: "top" | "bottom" | "center") => {
  switch (alignYValue) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    case "center":
      return "center";
    default:
      return "center";
  }
};

const Columns = ({ space, align, alignY, reverse, children, ...props }: ColumnsProps) => {
  let alignProps: ViewStyle = {};
  let alignYProps: ViewStyle = {};
  const reverseProps: ViewStyle = { flexDirection: reverse ? "row-reverse" : "row" };
  if (align) {
    alignProps = {
      justifyContent: getAlignValue(align),
    };
  }
  if (alignY) {
    alignYProps = {
      alignItems: getAlignYValue(alignY),
    };
  }
  return (
    <StyledColumns {...alignProps} {...alignYProps} {...reverseProps} {...props}>
      {getSpacedChildren(children, space, "X", reverse)}
    </StyledColumns>
  );
};

export default Columns;
