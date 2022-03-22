/**
 * Displays a given message to the user.
 * @param {string} title - The heading to use for your message.
 * @param {string} message - The message you want displayed.
 */
function displayMessage(title, message) {
    const header = document.createElement("H3");
    header.innerHTML = title;
    const body = document.createElement("P");
    body.innerHTML = message;

    document.getElementById("container").appendChild(header);
    document.getElementById("container").appendChild(body);
}

export { displayMessage };