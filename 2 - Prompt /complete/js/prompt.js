import { displayMessage } from "./helpers.js"

function start() {
    const name = getName();
    const age = getAge();

    displayMessage("Name", name);
    displayMessage("Age", age);
}

function getName() {
    const userName = prompt("What is your name?");

    if (userName === null || userName.length < 3) {
        alert("Please provide a name with a minimum of 3 characters!");
        return getName();
    }

    return userName;
}

function getAge() {
    const userAge = Number(prompt("How old are you?"));

    if (isNaN(userAge)) {
        alert("Please make sure you enter a number!");
        return getAge();
    }

    return userAge;
}

export { start };