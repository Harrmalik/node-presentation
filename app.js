var greeting = require('./greeting');
var os = require("os");
console.log(os.type());
console.log(greeting.name("malik", "n", "sad"));
console.log(greeting.name("sam", "en", "happy"));