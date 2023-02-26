const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-syntax");

console.log(data);

console.log(sayHi);

sayHi(names.john);
sayHi(names.peter);
sayHi("susan");
