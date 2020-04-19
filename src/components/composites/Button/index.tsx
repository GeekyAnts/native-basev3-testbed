import React from "react";
import { TextStyle, TouchableWithoutFeedbackProps } from "react-native";
import Ripple from "react-native-material-ripple";
import styled from "styled-components";
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

import { Text, TextProps } from "../../primitives";

type RippleProps =
  | BorderProps
  | ColorProps
  | FlexboxProps
  | LayoutProps
  | SpaceProps
  | {
      rippleColor?: string;
      rippleOpacity?: number;
      rippleDuration?: number;
    };

const StyledRipple = styled(Ripple)(color, border, flexbox, layout, space);

type ButtonProps = RippleProps &
  TouchableWithoutFeedbackProps & {
    label?: string;
    block?: boolean;
    outline?: boolean;
    transaprent?: boolean;
    variant?: "critical" | "caution" | "positive" | "neutral" | "info" | "promote";
    labelStyle?: TextStyle;
  };

/*
| Default button style
*/
const buttonDefaultprops: RippleProps = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4,
  rippleColor: "white",
  px: 7,
  py: 4,
};

/*
| Transparent button style
*/
const transparentButtonProps: RippleProps = {
  bg: "transparent",
  rippleColor: "black",
};

/*
| Default button text style
*/
const textDefaultProps: TextProps = {
  color: "white",
  fontSize: 2,
  fontWeight: 2,
};

const Button = ({
  block,
  variant,
  transaprent,
  label,
  labelStyle,
  outline,
  ...props
}: ButtonProps) => {
  /*
  | Updated button style based on props
  */
  const updatedButtonProps: ButtonProps = {
    ...buttonDefaultprops,
    bg: variant ?? "indigo.6",
    ...(block ? { alignSelf: "stretch" } : {}),
    ...(transaprent ? transparentButtonProps : {}),
    ...(outline
      ? { ...transparentButtonProps, borderWidth: 1, borderColor: variant ?? "indigo.6" }
      : {}),
  };

  const updatedTextProps: TextProps = {
    ...textDefaultProps,
    ...(outline || transaprent ? { color: variant ?? "indigo.6" } : {}),
  };

  return (
    <StyledRipple {...updatedButtonProps} {...props}>
      <Text {...updatedTextProps} style={labelStyle}>
        {label}
      </Text>
    </StyledRipple>
  );
};

export default Button;
