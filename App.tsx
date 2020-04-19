import React from "react";
import { ThemeProvider } from "styled-components/native";

import { Box, Column, Columns, Stack, View } from "./src/components/primitives";
import { Button } from "./src/components/composites";
import Theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="stretch" p={3} bg="gray.2">
        <Columns space={3} height={100} mb={3}>
          <Column borderRadius={4} flexGrow={1} bg="green.5" />
          <Column borderRadius={4} width={1 / 2.5} bg="pink.3" />
          <Column borderRadius={4} flexGrow={1.5} bg="indigo.8" />
        </Columns>
        <Stack space={3} mb={3}>
          <Box borderRadius={4} height={70} shadow={2} bg="blue.3" />
          <Box borderRadius={4} shadow={2} height={70} bg="purple.5" />
          <Box borderRadius={4} shadow={2} height={70} bg="yellow.4" />
        </Stack>
        <Button variant="critical" label="Login" />
      </View>
    </ThemeProvider>
  );
}
