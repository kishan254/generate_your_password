//........................................................................................................................................
// PLAN: generate a password

// when user click on the button

// we will ask the user to enter a password length
    // 8- 128 chars, otherwise we should yell at the user

    // ask to include symbols

    // ask to include uppercase

    // ask to include lowercase

    // ask to include numbers 

// if the user didnt choose any of the options

// we will alert the user

// once we got all the inputs

// we will generate the password
//........................................................................................................................................

// Define our constants and variables

let buttonGenerate = document.getElementById("button-generate"); 
var inputPasswordRange = document.getElementById("input-password-range");
var spanPasswordLength = document.getElementById("span-password-length");
const inputSymbol = document.getElementById("input-symbol");
const inputUppercase = document.getElementById("input-uppercase");
const inputLowercase = document.getElementById("input-lowercase");
const inputNumber = document.getElementById("input-number");
const textareaPassword= document.getElementById('textarea-password');

//bank of input for random characters

const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "!@#$%^&*()*_";

//Event listener for the click on the range of characters

inputPasswordRange.addEventListener("input", function (event) {
    const passwordLength = inputPasswordRange.value;

    // update the span pass length to show current password length the user has chosen
    spanPasswordLength.textContent = passwordLength;
});

// Event listener for click on the Generate Password button

buttonGenerate.addEventListener("click", function (event) {
    
    // we will ask the user to enter a password length
    // 8- 128 chars, otherwise we should yell at the user
    // ask to include symbols
    // ask to include uppercase
    // ask to include lowercase
    // ask to include numbers 
    const passwordLength = Number(inputPasswordRange.value);
    const hasNumber = inputNumber.checked;
    const hasSymbol = inputSymbol.checked;
    const hasUppercase = inputUppercase.checked;
    const hasLowercase = inputLowercase.checked;

    // if the user did not choose any of the options then prompt user immediately

    const userDidntChooseAnyOption = !hasNumber && !hasSymbol && !hasUppercase && !hasLowercase;

    if (userDidntChooseAnyOption) {
        alert("PLEASE SELECT ONE OR MORE BOXES!"); //alert box
        return;
    }
    // user has selected at least 1 option. We will generate the password.

    let characterSet = "";

    if (hasNumber) {
        characterSet = characterSet + numbers;
    }
    if (hasSymbol) {
        characterSet = characterSet + symbol;
    }
    if (hasUppercase) {
        characterSet = characterSet + uppercase;
    }
    if (hasLowercase) {
        characterSet = characterSet + lowercase;
    }

    // accumulator

    let password = "";
    for (let index = 0; index < passwordLength; index++) {
    
    // grab a random char from the bank
      
        const randomCharacter = characterSet[ Math.floor(Math.random() * characterSet.length) ]

    // add to password
        password = password + randomCharacter;
    }
    
    // once we got the password
    console.log(password);

    // put the password in the box (DOM)
    textareaPassword.textContent = password;    
});