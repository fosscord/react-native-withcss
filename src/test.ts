setTimeout(() => {}, 1000000);
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

import { parse } from "./Parser";

const result = parse(`
:root {
  --background: #677bc4;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

button {
	background: var(--background);
}
`);
console.log(result);
