import React from "react";
import { TextInput, TextProps } from "react-native";
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  layout,
  space,
  typography,
} from "styled-system";
import styled from "styled-components";

type InputProps = TypographyProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  ColorProps & {
    placeholder?: string;
    placeholderTextColor?: string;
    style?: TextProps | {};
  };

const StyledInput = styled(TextInput)<InputProps>(typography, space, border, color, layout);

const Input = ({ placeholder, placeholderTextColor, style, ...props }: InputProps) => {
  const inputDefaultProps: InputProps = {
    p: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray.3",
    fontSize: 2,
  };

  return (
    <StyledInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      {...inputDefaultProps}
      style={style}
      {...props}
    />
  );
};

export default Input;
