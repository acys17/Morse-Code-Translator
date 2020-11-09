import morseLetters from "./letters.js";

const input = document.querySelector("#toBeTranslated");
const form = document.querySelector("form");
const output = document.querySelector("#output")

const translate = () => {
    // split input string into array of letters
    const lowerCase = input.value.toLowerCase();
    const inputArray = (lowerCase).split("");

    // for each letter in array, find letter object and return morse code
    const engToMorseArray = inputArray.map((letter) => {
        const findLetterObject = morseLetters.find(element => element.name === letter);
        return findLetterObject.code;
    })

    // join morse letters back into string
    const engToMorseStr = engToMorseArray.join("")
    console.log(engToMorseStr);
    output.innerHTML = engToMorseStr;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    translate(); 
});