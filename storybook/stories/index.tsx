/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { storiesOf } from "@storybook/react-native";

import { Box, Column, Columns, Icon, Stack, Text, View } from "../../src/components/primitives";
import { AppBar, Button, IconButton } from "../../src/components/composites";
import Theme from "../../src/theme";

type GetStory = () => JSX.Element | JSX.Element[];

storiesOf("Primitives", module)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="stretch" p={3} bg="gray.2">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Box", () => <Box borderRadius={4} height={70} shadow={1} bg="blue.3" />)
  .add("Columns", () => (
    <Columns space={3} height={100} mb={3}>
      <Column borderRadius={4} shadow={1} flexGrow={1} bg="green.5" />
      <Column borderRadius={4} shadow={1} width={1 / 2.5} bg="pink.3" />
      <Column borderRadius={4} shadow={1} flexGrow={1.5} bg="indigo.8" />
    </Columns>
  ))
  .add("Stack", () => (
    <Stack space={3} mb={3}>
      <Box borderRadius={4} height={70} shadow={1} bg="blue.3" />
      <Box borderRadius={4} shadow={1} height={70} bg="purple.5" />
      <Box borderRadius={4} shadow={1} height={70} bg="yellow.4" />
    </Stack>
  ))
  .add("Icon", () => <Icon name="menu" type="MaterialIcons" />);

storiesOf("Composites", module)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="stretch" p={3} bg="gray.2">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Button", () => <Button variant="critical" label="Login" />)
  .add("AppBar", () => (
    <AppBar
      leading={<IconButton name="menu" type="MaterialIcons" />}
      title={<Text>Header</Text>}
      actions={[
        <IconButton key="chat" name="chat" type="MaterialIcons" />,
        <IconButton key="favourite" name="favorite" type="MaterialIcons" />,
        <IconButton key="loop" name="loop" type="MaterialIcons" />,
      ]}
    />
  ))
  .add("IconButton", () => <IconButton type="MaterialIcons" name="menu" bg="blue.5" />);
