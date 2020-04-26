import React from "react";
import { StyleSheet, TextStyle } from "react-native";

import Button, { ButtonProps } from "../Button";

type IconButtonProps = ButtonProps & {
  iconName: string;
  iconStyle?: TextStyle | {};
};

const iconButtonDefaultprops: ButtonProps = {
  borderRadius: 40,
  padding: 4,
  overflow: "hidden",
};

const styles = StyleSheet.create({
  iconDefaultStyle: {
    fontSize: 30,
  },
});

const IconButton = ({ iconStyle, iconName }: IconButtonProps) => {
  const flattenedIconStyle: TextStyle = StyleSheet.flatten([styles.iconDefaultStyle, iconStyle]);
  return (
    <Button
      {...iconButtonDefaultprops}
      transparent
      icon={{ name: iconName, style: flattenedIconStyle }}
    />
  );
};

export default IconButton;
