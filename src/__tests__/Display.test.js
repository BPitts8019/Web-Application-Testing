import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from "../components/Display.js";
afterEach(rtl.cleanup);

/*
### Display

- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.
*/

test("Display is rendered", () => {
   const dashboard = rtl.render(<Display />);
   dashboard.getByTestId("display");
});