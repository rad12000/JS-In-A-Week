import { Keys, Key } from "../../keys.js";
import { stepRightAsync, stepLeftAsync, playAreaWidth } from "./ken.js" 

let keyIsPressed = false;

/**
 * Function called when the page loads
 */
async function handleLoad() {
    console.log("page loaded!")
}

/**
 * Handler for key press
 * @param {Key} keyCode 
 */
async function handleKeyPress(keyCode) {
    keyIsPressed = true;

    console.log("key pressed!")
}

/**
 * Handler for key up
 */
function handleKeyUp() {
    keyIsPressed = false;

    console.log("key up!")
}

export { handleKeyPress, handleKeyUp, handleLoad }