import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from '../components/Dashboard.js';
afterEach(rtl.cleanup);

/*
### Dashboard

- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.
*/

test("Dashboard is rendered", () => {
   const dashboard = rtl.render(<Dashboard />);
   expect(dashboard).toBeDefined(null);
});