/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { storiesOf } from "@storybook/react-native";
import { number, text, withKnobs } from "@storybook/addon-knobs";

import { Box, Column, Columns, Icon, Stack, Text, View } from "../../src/components/primitives";
import { AppBar, Button, IconButton } from "../../src/components/composites";
import Theme from "../../src/theme";

type GetStory = () => JSX.Element | JSX.Element[];

storiesOf("Primitives", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" p={3} bg="gray.2">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Box", () => (
    <Box
      borderRadius={number("borderRadius", 4)}
      height={number("height", 70)}
      shadow={number("shadow", 1)}
      bg={text("bg", "blue.3")}
    />
  ))
  .add("Columns", () => (
    <Columns space={number("space", 3)} height={number("height", 100)} mb={number("mb", 3)}>
      <Column
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        flexGrow={number("flexGrow", 1)}
        bg="green.5"
      />
      <Column
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        width={1 / 2.5}
        bg="pink.3"
      />
      <Column
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        flexGrow={number("flexGrow", 1.5)}
        bg="indigo.8"
      />
    </Columns>
  ))
  .add("Stack", () => (
    <Stack space={number("space", 3)} mb={number("mb", 3)}>
      <Box
        borderRadius={number("borderRadius", 4)}
        height={number("height", 70)}
        shadow={number("shadow", 1)}
        bg="blue.3"
      />
      <Box
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        height={number("height", 70)}
        bg="purple.5"
      />
      <Box
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        height={number("height", 70)}
        bg="yellow.4"
      />
    </Stack>
  ))
  .add("Icon", () => <Icon name={text("name", "menu")} type="MaterialIcons" />);

storiesOf("Composites", module)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" p={3} bg="gray.2">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Button", () => <Button variant="critical" label={text("label", "Login")} />)
  .add("AppBar", () => (
    <AppBar
      leading={<IconButton name={text("leading iconName", "menu")} type="MaterialIcons" />}
      title={<Text>{text("title", "Header")}</Text>}
      actions={[
        <IconButton key="chat" name="chat" type="MaterialIcons" />,
        <IconButton key="favourite" name="favorite" type="MaterialIcons" />,
        <IconButton key="loop" name="loop" type="MaterialIcons" />,
      ]}
    />
  ))
  .add("IconButton", () => (
    <IconButton type="MaterialIcons" name={text("name", "menu")} bg={text("bg", "blue.5")} />
  ));
