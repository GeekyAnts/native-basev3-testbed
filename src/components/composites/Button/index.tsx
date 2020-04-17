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

import { Variants } from "../../../@types/enums";

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
    variant?: Variants;
    labelStyle?: TextStyle;
  };

const buttonDefaultprops: RippleProps = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4,
  rippleColor: "white",
  px: 7,
  py: 4,
};

const textDefaultProps: TextProps = {
  color: "white",
  fontSize: 2,
  fontWeight: 2,
};

const Button = ({ block, variant, label, labelStyle, outline, ...props }: ButtonProps) => {
  const updatedButtonProps: ButtonProps = {
    ...buttonDefaultprops,
    bg: variant ?? "indigo.6",
    ...(block ? { alignSelf: "stretch" } : {}),
    ...(outline
      ? /* eslint-disable indent */
        {
          bg: "transparent",
          borderWidth: 1,
          borderColor: variant ?? "indigo.6",
          rippleColor: "black",
        }
      : {}),
    /* eslint-enable indent */
  };

  const updatedTextProps: TextProps = {
    ...textDefaultProps,
    ...(outline ? { color: variant ?? "indigo.6" } : {}),
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
