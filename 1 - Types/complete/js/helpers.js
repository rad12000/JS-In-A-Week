/**
 * Writes a given message to the log
 * @param {any} message - The content to log
 */
 function log(message) {
    const messageType = Array.isArray(message) ? "array" : typeof message;
    
    if (typeof message === "object") {
        message = JSON.stringify(message);
    }

    const element = document.createElement("DIV");
    element.classList.add('log-message');
    element.innerHTML = `${message} <span class='log-meta'>- (${messageType}) logged at ${new Date().toLocaleTimeString()}</span>`;
    
    const container = document.getElementById("log-container");
    container.append(element);
    console.log(message);
}

//#region Interval
class SimpleInterval {
    #intervalId;

    constructor(functionToRun) {
        this.#intervalId = setInterval(functionToRun, 3000);
    }

    stop() {
        clearInterval(this.#intervalId);
    }
}

/**
 * Runs your function every three seconds.
 * @param {Function} functionToRun - The function to run after 3 seconds
 */
function everyThreeSeconds(functionToRun) {
    return new SimpleInterval(functionToRun);
}
//#endregion

//#region Star Wars
class Person {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
     height;

     /**
     * @type {string}
     */
    hairColor;

    /**
     * @type {string}
     */
     skinColor;
}


const peopleArr = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "hairColor": "blond",
        "skinColor": "fair"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "hairColor": "n/a",
        "skinColor": "gold"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "hairColor": "n/a",
        "skinColor": "white, blue"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "hairColor": "none",
        "skinColor": "white"
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "hairColor": "brown",
        "skinColor": "light"
    },
    {
        "name": "Owen Lars",
        "height": "178",
        "hairColor": "brown, grey",
        "skinColor": "light"
    },
    {
        "name": "Beru Whitesun lars",
        "height": "165",
        "hairColor": "brown",
        "skinColor": "light"
    },
    {
        "name": "R5-D4",
        "height": "97",
        "hairColor": "n/a",
        "skinColor": "white, red"
    },
    {
        "name": "Biggs Darklighter",
        "height": "183",
        "hairColor": "black",
        "skinColor": "light"
    },
    {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "hairColor": "auburn, white",
        "skinColor": "fair"
    },
    {
        "name": "Luke Skywalker",
        "height": "172",
        "hairColor": "blond",
        "skinColor": "fair"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "hairColor": "n/a",
        "skinColor": "gold"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "hairColor": "n/a",
        "skinColor": "white, blue"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "hairColor": "none",
        "skinColor": "white"
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "hairColor": "brown",
        "skinColor": "light"
    },
    {
        "name": "Owen Lars",
        "height": "178",
        "hairColor": "brown, grey",
        "skinColor": "light"
    },
    {
        "name": "Beru Whitesun lars",
        "height": "165",
        "hairColor": "brown",
        "skinColor": "light"
    },
    {
        "name": "R5-D4",
        "height": "97",
        "hairColor": "n/a",
        "skinColor": "white, red"
    },
    {
        "name": "Biggs Darklighter",
        "height": "183",
        "hairColor": "black",
        "skinColor": "light"
    },
    {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "hairColor": "auburn, white",
        "skinColor": "fair"
    }
];

/**
 * Returns a random Star Wars character.
 * @returns {Person}
 */
function getRandomStarWarsCharacter() {
    const arrLen = peopleArr.length;
    const index = Math.floor(Math.random() * arrLen);

    return peopleArr[index];
}
//#endregion

export { log, everyThreeSeconds, getRandomStarWarsCharacter };