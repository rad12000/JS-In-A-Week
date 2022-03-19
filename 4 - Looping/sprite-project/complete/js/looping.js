import { Keys, Key } from "../../keys.js";
import { stepRightAsync, stepLeftAsync, playAreaWidth } from "./ken.js" 

const stepWidth = playAreaWidth / 7;
let keyIsPressed = false;

/**
 * Function called when the page loads
 */
async function handleLoad() {
    for (let i = 0; i < 7; i++) {
        await stepRightAsync(stepWidth)
    }

    for (let i = 0; i < 7; i++) {
        await stepLeftAsync(stepWidth)
    }
}

/**
 * Handler for key press
 * @param {Key} keyCode 
 */
async function handleKeyPress(keyCode) {
    keyIsPressed = true;

    if (keyCode === Keys.RightArrow) {
        while (keyIsPressed) {
            await stepRightAsync()
        }
    }

    if (keyCode === Keys.LeftArrow) {
        while (keyIsPressed) {
            await stepLeftAsync()
        }
    }
}

function handleKeyUp() {
    keyIsPressed = false;
}

export { handleKeyPress, handleKeyUp, handleLoad }