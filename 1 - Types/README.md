# Types mini-project
The goal here is to log information about a given Star Wars character every 3 seconds:

1. Declare a function to `log` any message of your choosing.
2. Call that function `everyThreeSeconds`.
3. Within the function you declared, assign a new `const` variable to the result of calling `getRandomStarWarsCharacter`. Log that instead.
4. Use the object members you receieve from the `getRandomStarWarsCharacter` function to write a message formatted like the following:
> "Hi my name is `${your character's name}`. I am `${your character's height}` inches tall. My hair is `${your character's hair color}`. AND my skin color is `${your character's skin color}`."
5. Declare a global variable to count how many characters have been logged. Increment that variable each time your function is called.
6. Start the message you are logging with 
> "Log number `${character logged count}`."