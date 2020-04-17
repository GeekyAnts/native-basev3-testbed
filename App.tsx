import React from "react";
import { ThemeProvider } from "styled-components";

import { View } from "./src/components/primitives";
import { Button } from "./src/components/composites";
import Theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} bg="white" justifyContent="center" alignItems="center" p={3}>
        <Button mb={3} label="Without Variant" />
        <Button variant="positive" mb={3} label="Login" />
        <Button variant="promote" mb={3} block label="Login" />
      </View>
    </ThemeProvider>
  );
}
