import morseLetters from "./letters.js";

const input = document.querySelector("#toBeTranslated");
const form = document.querySelector("form");
const output = document.querySelector("#output");
const checkbox = document.querySelector('input[type="checkbox"]');

let engToMorse = true;

checkbox.addEventListener('change', function () {
    if(checkbox.checked){
        engToMorse = false;
    } else {
        engToMorse = true;
    }
});

const translateEnglishToMorse = () => {
    // split input string into array of letters
    const lowerCase = input.value.toLowerCase();
    const engInputArray = (lowerCase).split("");

    // for each letter in array, find letter object and return morse code
    const engToMorseArray = engInputArray.map((letter) => {
        const findLetterObject = morseLetters.find(element => element.name === letter);
        return findLetterObject.code;
    })

    // join morse letters back into string
    const engToMorseStr = engToMorseArray.join("")
    console.log(engToMorseStr);
    output.innerHTML = engToMorseStr;
}

const translateMorseToEnglish = () => {
    const morseInputSplit = input.value.split(" ");
    const morseInputArray = morseInputSplit.map((value) => {
        return value += " ";
    })

    const morseToEnglishArray = morseInputArray.map((morseLetter) => {
        const findMorseObject = morseLetters.find(element => element.code === morseLetter);
        return findMorseObject.name
    })

    const morseToEnglishStr = morseToEnglishArray.join(" ");
    output.innerHTML = morseToEnglishStr;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(engToMorse === false) {
        translateMorseToEnglish();
    } else {
        translateEnglishToMorse(); 
    }
});