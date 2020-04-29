import React from "react";
import { TextStyle } from "react-native";

import Button, { ButtonProps } from "../Button";

import { IconProps } from "../../primitives/Icon";

type iconProps = IconProps & {
  iconStyle?: TextStyle | {};
};

type IconButtonProps = ButtonProps & iconProps;

const iconButtonDefaultprops: ButtonProps = {
  borderRadius: 40,
  padding: 4,
  overflow: "hidden",
  rippleColor: "white",
};

const IconButton = ({ name, type, iconStyle, ...props }: IconButtonProps) => {
  return (
    <Button
      {...iconButtonDefaultprops}
      transparent
      icon={{ name, type, style: iconStyle }}
      {...props}
    />
  );
};

export default IconButton;
