import React, { useContext } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { ColorProps, SpaceProps, TypographyProps, color, space, typography } from "styled-system";
import styled, { ThemeContext } from "styled-components";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

export type IconType =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Octicons"
  | "SimpleLineIcons"
  | "Zocial";

export type IconProps = TypographyProps &
  ColorProps &
  SpaceProps & {
    iconName: string;
    iconType?: IconType;
    style?: TextStyle | {};
  };

const Icon = ({ iconName, iconType, style, ...props }: IconProps) => {
  const theme: Theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    iconDefaultStyle: {
      fontSize: 30,
      color: theme.colors.black,
    },
  });

  const flattenedIconStyle: TextStyle = StyleSheet.flatten([styles.iconDefaultStyle, style]);
  let CustomIconType;
  switch (iconType) {
    case "AntDesign":
      CustomIconType = AntDesign;
      break;
    case "Entypo":
      CustomIconType = Entypo;
      break;
    case "EvilIcons":
      CustomIconType = EvilIcons;
      break;
    case "Feather":
      CustomIconType = Feather;
      break;
    case "FontAwesome":
      CustomIconType = FontAwesome;
      break;
    case "FontAwesome5":
      CustomIconType = FontAwesome5;
      break;
    case "Foundation":
      CustomIconType = Foundation;
      break;
    case "Ionicons":
      CustomIconType = Ionicons;
      break;
    case "MaterialCommunityIcons":
      CustomIconType = MaterialCommunityIcons;
      break;
    case "MaterialIcons":
      CustomIconType = MaterialIcons;
      break;
    case "Octicons":
      CustomIconType = Octicons;
      break;
    case "SimpleLineIcons":
      CustomIconType = SimpleLineIcons;
      break;
    case "Zocial":
      CustomIconType = Zocial;
      break;
    default:
      CustomIconType = Ionicons;
      break;
  }
  return <CustomIconType name={iconName} style={flattenedIconStyle} {...props} />;
  // switch (iconType) {
  //   case "AntDesign":
  //     return <AntDesign name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "Entypo":
  //     return <Entypo name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "EvilIcons":
  //     return <EvilIcons name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "Feather":
  //     return <Feather name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "FontAwesome":
  //     return <FontAwesome name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "FontAwesome5":
  //     return <FontAwesome5 name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "Foundation":
  //     return <Foundation name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "Ionicons":
  //     return <Ionicons name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "MaterialCommunityIcons":
  //     return <MaterialCommunityIcons name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "MaterialIcons":
  //     return <MaterialIcons name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "Octicons":
  //     return <Octicons name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "SimpleLineIcons":
  //     return <SimpleLineIcons name={iconName} style={flattenedIconStyle} {...props} />;
  //   case "Zocial":
  //     return <Zocial name={iconName} style={flattenedIconStyle} {...props} />;
  //   default:
  //     return <MaterialIcons name={iconName} style={flattenedIconStyle} {...props} />;
  // }
};

const styledIcon = styled(Icon)<IconProps>`
${color}
${space}
${typography}`;

export default styledIcon;
