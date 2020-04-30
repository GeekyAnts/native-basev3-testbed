import React from "react";
import { TextInput } from "react-native";
import { TypographyProps } from "styled-system";
import styled from "styled-components";

type InputProps = TypographyProps;

const Input = () => {
  return <TextInput placeholder="Enter" />;
};

const styledInput = styled(Input)<InputProps>`
$(typography)
`;

export default styledInput;
