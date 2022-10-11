const { parse, resolve, toString, toArray } = require('@estilles/expression-parser');

let args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("the number of arugments");
    process.exit(1);
}

console.log(toString(parse(args[0])));
