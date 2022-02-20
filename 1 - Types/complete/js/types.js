import { log, everyThreeSeconds, getRandomStarWarsCharacter } from "./helpers.js";

let counter = 0;

function logPerson() {
    const character = getRandomStarWarsCharacter();
    log(`Log number ${++counter}. Hi my name is ${character.name}, 
        I am ${character.height} inches tall! And guess what! 
        My hair is ${character.hairColor}`);
}

everyThreeSeconds(logPerson)