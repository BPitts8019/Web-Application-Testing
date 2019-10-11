import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "src/components/Display.js";
import Dashboard from "src/components/Dashboard.js";
import App from './App';
afterEach(rtl.cleanup);

/*
### Display

- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.

### Dashboard

- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.

### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

*/

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<App />, div);
   ReactDOM.unmountComponentAtNode(div);
});

test("Display is rendered", () => {
   const display = rtl.render(<Display />);
   expect(display).notToBe(null);
});

test("Dashboard is rendered", () => {
   const dashboard = rtl.render(<Dashboard />);
   expect(display).notToBe(null);
});
