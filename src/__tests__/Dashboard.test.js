import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from '../components/Dashboard.js';
afterEach(rtl.cleanup);


function testButton(name, propName, callback) {
   let props = {};
   props[propName] = callback;
   const dashboard = rtl.render(<Dashboard {...props}/>);
   const testButton = dashboard.getByText(new RegExp(name, "i"));

   testButton.click();
   expect(callback).toHaveBeenCalledTimes(1);
   testButton.click();
   expect(callback).toHaveBeenCalledTimes(2);
   testButton.click();
   expect(callback).toHaveBeenCalledTimes(3);
   testButton.click();
   testButton.click();
   testButton.click();
   testButton.click();
   testButton.click();
   expect(callback).toHaveBeenCalledTimes(8);
};

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

describe("Test Buttons", () => {
   const handleStrikes = jest.fn();
   const handleBalls = jest.fn();
   const handleFouls = jest.fn();
   const handleHits = jest.fn();
   
   test("Strike click calls handleStrikes function", () => {
      testButton("strike", "handleStrikes", handleStrikes)
   });

   test("Ball click calls handleBalls function", () => {
      testButton("ball", "handleBalls", handleBalls)
   });
   
   test("Foul click calls handleFouls function", () => {
      testButton("foul", "handleFouls", handleFouls)
   });

   test("Hit click calls handleHits function", () => {
      testButton("hit", "handleHits", handleHits)
   });
});


// test("Ball click calls increaseBalls function", () => {
//    const handleBalls = jest.fn();
//    const strike = rtl.render(<Dashboard increaseStrikes={handleBalls}/>)
//       .getByText(/strike/i);
//    strike.click();

//    expect(handleStrikes).toHaveBeenCalledTimes(1);
// });

// test("Strike click calls increaseStrikes function", () => {
//    const handleStrikes = jest.fn();
//    const strike = rtl.render(<Dashboard increaseStrikes={handleStrikes}/>)
//       .getByText(/strike/i);
//    strike.click();

//    expect(handleStrikes).toHaveBeenCalledTimes(1);
// });

// test("Strike click calls increaseStrikes function", () => {
//    const handleStrikes = jest.fn();
//    const strike = rtl.render(<Dashboard increaseStrikes={handleStrikes}/>)
//       .getByText(/strike/i);
//    strike.click();

//    expect(handleStrikes).toHaveBeenCalledTimes(1);
// });
