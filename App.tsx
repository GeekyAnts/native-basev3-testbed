import React from "react";
import { ThemeProvider } from "styled-components";

import { View } from "./src/components/primitives";
import { Button, Variants } from "./src/components/composites";
import Theme from "./src/theme";

/*
 <Button  label="Login" /> 
*/

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="center" p={3}>
        <Button mb={3} label="Without Variant" />
        <Button variant={Variants.critical} mb={3} label="NOOOOO!" />
        <Button variant={Variants.positive} mb={3} label="Login" />
        <Button variant={Variants.promote} mb={3} block label="Block" />
        <Button variant={Variants.info} mb={3} outline label="Outline button" />
      </View>
    </ThemeProvider>
  );
}
