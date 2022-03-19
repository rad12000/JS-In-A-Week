import { Keys, Key } from "../../keys.js";
import { stepRightAsync, stepLeftAsync } from "./ken.js" 

let keyIsPressed = false;

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

export { handleKeyPress, handleKeyUp }