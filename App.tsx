import React from "react";
import { ThemeProvider } from "styled-components/native";

import { Column, Columns, View } from "./src/components/primitives";
import Theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="stretch" p={3} bg="gray.2">
        <Columns space={3} height={100} my={4}>
          <Column borderRadius={4} shadow={1} flexGrow={1} bg="green.5" />
          <Column borderRadius={4} shadow={1} width={1 / 2.5} bg="pink.3" />
          <Column borderRadius={4} shadow={1} flexGrow={1.5} bg="indigo.8" />
        </Columns>
      </View>
    </ThemeProvider>
  );
}
