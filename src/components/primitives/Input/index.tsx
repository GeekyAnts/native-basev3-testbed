import React, { useContext } from "react";
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
import styled, { ThemeContext } from "styled-components";

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
  const theme: Theme = useContext(ThemeContext);
  const inputDefaultProps: InputProps = {
    p: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.gray[6],
    fontSize: 16,
  };

  return (
    <StyledInput
      placeholder={placeholder}
      {...inputDefaultProps}
      style={style}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default Input;
