import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from '../components/Dashboard.js';
import { queryByTestId } from '@testing-library/react';
afterEach(rtl.cleanup);

/*
### Dashboard

- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.
*/
test.only("Dashboard is rendered", () => {
   const dashboard = rtl.render(<Dashboard />);
   dashboard.getByTestId("dashboard");
});

test("test Strike button", () => {
   expect(false).toBe(true);
   
});

//
test("test Ball button", () => {
   expect(false).toBe(true);
});

//
test("test Foul button", () => {
   expect(false).toBe(true);
});

//
test("test Hit button", () => {
   expect(false).toBe(true);
});