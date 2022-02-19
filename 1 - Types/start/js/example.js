import { logger, everyThreeSeconds } from "./helpers.js";

// Number variables
var unclearVar = 1;
const unchangableNumber = 2;
let changeableNumber = 3;

// String variables
var unclearStr = "I was declared using the 'var' keyword";
const unchangeableStr = "I was declared using the 'const' keyword";
let changableStr = "I was declared using the 'let' keyword";

// Object variables (key, value pairs)
var unclearObj = {
    firstName: "Chad",
    lastName: "Bekmezian"
};

const unchangeableObj = {
    firstName: "Chad",
    lastName: "Bekmezian"
};

let changeableObj = {
    firstName: "Chad",
    lastName: "Bekmezian"
};

// Array variables
var unclearArr = ["Entry one", "Entry two"];
const unchangableArr = ["Entry one", "Entry two"];
let changableArr = ["Entry one", "Entry two"];

// Functions
var lameFunction = function() {
    logger.log(unclearArr);
}

function betterFunction() {
    logger.log(unchangableArr[0]);
}

// Arrow Function
const myArrowFunc = () => {
    logger.log(unchangeableStr);
}

const timer = everyThreeSeconds(lameFunction);
