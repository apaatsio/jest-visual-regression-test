import { generateImage } from "component-image";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import React from "react";
import App from "./App";

expect.extend({ toMatchImageSnapshot });

describe("App", () => {
  it("has no visual regressions (default)", () => {
    return generateImage(<App />, {
      stylesheet: "./src/App.css",
      puppeteerOptions: {
        args: ["--no-sandbox"],
      }
    }).then(image => {
      expect(image).toMatchImageSnapshot();
    });
  });

  it("has no visual regressions (slowMo)", () => {
    return generateImage(<App />, {
      stylesheet: "./src/App.css",
      puppeteerOptions: {
        args: ["--no-sandbox"],
        slowMo: 250,
      }
    }).then(image => {
      expect(image).toMatchImageSnapshot();
    });
  });
});
