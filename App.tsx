import React from "react";
import { ThemeProvider } from "styled-components/native";

import { Box, Column, Columns, Icon, Stack, View } from "./src/components/primitives";
import { AppBar, Button, IconButton } from "./src/components/composites";
import Theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="flex-start" p={3} bg="gray.2">
        <AppBar leading={<IconButton name="menu" />} title="Action" />
        <Columns space={3} height={100} my={3}>
          <Column borderRadius={4} shadow={1} flexGrow={1} bg="green.5">
            <IconButton type="Ionicons" name="md-checkmark-circle" />
          </Column>
          <Column borderRadius={4} shadow={1} width={1 / 2.5} bg="pink.3" />
          <Column borderRadius={4} shadow={1} flexGrow={1.5} bg="indigo.8" />
        </Columns>
        {/* <Input /> */}
        <Stack space={3} mb={3}>
          <Box borderRadius={4} height={70} shadow={1} bg="red.4" />
          <Box borderRadius={4} shadow={1} height={70} bg="purple.5" />
          <Box borderRadius={4} shadow={1} height={70} bg="yellow.3" />
        </Stack>
        <Button
          variant="promote"
          label="Click Me Hany!"
          shadow={4}
          icon={{
            name: "md-checkmark-circle",
            type: "Ionicons",
            position: "left",
          }}
        />
        <IconButton type="Ionicons" name="md-checkmark-circle" />
        <Icon type="Ionicons" name="md-checkmark-circle" />
      </View>
    </ThemeProvider>
  );
}
