/* eslint-disable prettier/prettier */
import React from "react";

export default (
  children: JSX.Element[] | JSX.Element,
  space: number | undefined,
  axis: "X" | "Y",
  reverse: boolean | undefined,
) => {
  const childrenArray = React.Children.toArray(children);
  /*
  | Separate the trailing (not first) children from the children array
  */
  const trailingChildren = childrenArray.slice(1);
  /*
  | Set margin prop based on axis
  */
  const marginProp: object = {
    // eslint-disable-next-line no-nested-ternary
    ...(axis === "X"
      ? reverse
        ? { mr: space }
        : { ml: space }
      : reverse
      ? { mb: space }
      : { mt: space }),
  };

  /*
  | Add the margiin to the children
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trailingChildrenWithSpacing = trailingChildren.map((child: any) => {
    return React.cloneElement(child, marginProp, null);
  });
  /*
  | New children array with applied margin to trailing children
  */
  return [childrenArray[0], trailingChildrenWithSpacing];
};
