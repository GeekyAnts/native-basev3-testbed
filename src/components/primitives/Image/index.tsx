import React, { forwardRef } from "react";
import { Image, ImageProps } from "react-native";
import styled from "styled-components";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flex,
  layout,
  space,
} from "styled-system";

type imageProps = ImageProps & ColorProps & LayoutProps & SpaceProps & BorderProps & FlexboxProps;

const StyledImage = styled(Image)<imageProps>(color, layout, space, border, flex);

const defaultImageProps: imageProps = {
  width: 100,
  height: 100,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Image1 = (props: imageProps, ref: any) => {
  return <StyledImage {...defaultImageProps} ref={ref} {...props} />;
};

export default forwardRef(Image1);
