# NativeBase_v3.0 Testbed

Expo app used to build native-base v3 components.

## Installation

Clone the repo and

```bash
yarn
```

## Run the app

Please make sure that you have Expo installed in your system.

```bash
yarn ios
```

or

```bash
yarn android
```

## Building components

Please note that all the `composite` components are to be built using the `primitives`. Use [styled-system](https://styled-system.com/getting-started).

The components are to be created in the
`/src/components/` directory.

The types are present in
`/src/@types/`.

We might change these later.

For development, import the components into the `App.tsx` file.

#### Button component example usage

```js
import React from "react";
import { ThemeProvider } from "styled-components";

import { View } from "./src/components/primitives";
import { Button, Variants } from "./src/components/composites";
import Theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" alignItems="center" p={3}>
        <Button label="Without Variant" />
      </View>
    </ThemeProvider>
  );
}
```

## Contributing

Create a branch with the following convention

```
feat/button
```

Replace _button_ with the component name.

Make sure the branch is updated with remote master before creating a PR against the `master` branch. Avoid changing the `App.tsx` file in the PR's.

Make sure the commit messages adhere to the following pattern

```bash
fix(button): fixes button transparency issue
```

```bash
feat(button): adds outline prop to button
```

```bash
chore(button): removes unused styles and cleans up
```

Squash your commits into one before merging.
