#!/usr/bin/env node

"use strict";
const program = require("commander");

program
  .version("0.1.0")
  .option("-n, --yourname [yourname]", "Your name")
  .option("-g, --glad", "Tell us you are happy")
  .parse(process.argv);

if (program.yourname) {
  console.log(
    `Hello, ${program.yourname}! ${
      program.glad ? "I am very happy to see you!" : ""
    }`
  );
}
