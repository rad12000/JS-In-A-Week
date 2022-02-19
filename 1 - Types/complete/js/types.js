import { logger, everyThreeSeconds, getRandomStarWarsCharacter } from "./helpers.js";

function logPerson() {
    const character = getRandomStarWarsCharacter();
    logger.log(`Hi my name is ${character.name}, I am ${character.height} inches tall! And guess what! My hair is ${character.hairColor}`);
}

everyThreeSeconds(logPerson)