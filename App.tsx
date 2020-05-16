import React from "react";
import { ThemeProvider } from "styled-components/native";

import { Column, Columns, View } from "./src/components/primitives";
import Theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="stretch" p={3} bg="gray.2">
        <Columns space={3} align="right" alignY="bottom" reverse my={4}>
          <Column borderRadius={4} height={100} shadow={1} width={60} bg="green.5" />
          <Column borderRadius={4} height={70} shadow={1} width={1 / 2.5} bg="pink.3" />
          <Column borderRadius={4} height={90} shadow={1} width={30} bg="indigo.8" />
        </Columns>
      </View>
    </ThemeProvider>
  );
}
