import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from '../components/Dashboard.js';
afterEach(rtl.cleanup);

/*
### Dashboard

- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.
*/
test("Dashboard is rendered", () => {
   const dashboard = rtl.render(<Dashboard />);
   dashboard.getByTestId("dashboard");
});

test("All buttons exist", () => {
   const dashboard = rtl.render(<Dashboard />);

   dashboard.getByText(/strike/i);
   dashboard.getByText(/ball/i);
   dashboard.getByText(/foul/i);
   dashboard.getByText(/hit/i);
});

describe.only("Strike button", () => {
   const handleStrikes = jest.fn();
   const strike = rtl.render(<Dashboard increaseStrikes={handleStrikes}/>)
      .getByText(/strike/i);

   test("Strike click calls increaseStrikes function", () => {
      strike.click();

      expect(handleStrikes).toHaveBeenCalledTimes(1);
   });
});

// describe.only("Hit button", () => {
//    const hit = rtl.render(<Dashboard />)
//       .getByTestId("hit");

//    test("Click Hit calls increaseHits function", () => {
//       expect(false).toBe(true);
//    });
// });

// describe.only("Foul button", () => {
//    const strike = rtl.render(<Dashboard />)
//       .getByTestId("strike");

//    test("Click Strike call increaseStrikes function", () => {
//       expect(false).toBe(true);
//    });

//    test("Strikes max at 3", () => {
//       expect(false).toBe(true);
//    });
// });

// describe.only("Hit button", () => {
//    const strike = rtl.render(<Dashboard />)
//       .getByTestId("strike");

//    test("Click Strike call increaseStrikes function", () => {
//       expect(false).toBe(true);
//    });

//    test("Strikes max at 3", () => {
//       expect(false).toBe(true);
//    });
// });