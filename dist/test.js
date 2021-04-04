"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
setTimeout(function () { }, 1000000);
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
var Parser_1 = require("./Parser");
// MediaQuery.parse("only screen and (max-width: 600px) ");
var result = Parser_1.parse("\n:root {\n  --background: #677bc4;\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}\n\nbutton {\n\tbackground: var(--background);\n}\n");
console.log(result);
