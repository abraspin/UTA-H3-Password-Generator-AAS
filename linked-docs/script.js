// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaration of character arrays for RNG to choose from.
var upperCharArray = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(
  " "
);
console.log(upperCharArray);
var lowerCharArray = "a b c d e f g h i j k l m n o p q r s t u vw x y z".split(
  " "
);
var numericalCharArray = "0 1 2 3 4 5 6 7 8 9".split(" ");
// I'm omitting spaces, quotes, and slashes so they don't accidentally mess up wherever it gets passed
// I realized after the last 3 variables you can leave the space seperating value and just pass split an empty string ""
var specialCharArray = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~".split("");
console.log(specialCharArray);
var charPool = [];

function generatePassword() {
  var passwordLength = prompt(
    "What length would you like your new password to be? (Please choose a value between 1 and 128)"
  );
  console.log("password length: " + passwordLength);

  if (passwordLength > 1 && passwordLength < 128) {
    // Will add error handling later, nest each in an if statement checking for correct input
    // For each character type the user chooses, the array of all available of that category will be added to the array representing the pool of available random characters
    alert(
      "The next few prompts will ask about the special characters you want to be present in your new passwords."
    );
    var useUpperCase = prompt(
      "Would you like your new passsword to include \r\nCapitalized Letters? \r\nType 'yes' or 'no'"
    );
    if (useUpperCase.toLowerCase === "yes") {
      charPool.push(upperCharArray);
      console.log(charPool);
    }
    var useLowerCase = prompt(
      "Would you like your new passsword to include \r\nLowercase Letters? \r\nType 'yes' or 'no'"
    );

    if (useLowerCase.toLowerCase === "yes") {
      charPool.push(lowerCharArray);
      console.log(charPool);
    }
    var useNumericChars = prompt(
      "Would you like your new passsword to include \r\nNumeric Characters? \r\nType 'yes' or 'no'"
    );
    if (useNumericChars.toLowerCase === "yes") {
      charPool.push(numericalCharArray);
      console.log(charPool);
    }
    var useSpecialChars = prompt(
      "Would you like your new passsword to include \r\nSpecial Character? \r\nType 'yes' or 'no'"
    );

    console.log(useLowerCase, useUpperCase, useSpecialChars, useNumericChars);
    // wait is this necessary? (later: uh yes i think) can I just reroute all the conditionals to the final else for invalid entry?
    // If no types have been selected, it will exit the program here. the only way for this conditional to be true is if all 4 are empty (or null?)
    if (
      useUpperCase != "" &&
      useLowerCase != "" &&
      useNumericChars != "" &&
      useSpecialChars != ""
    ) {
      // loop through as many times as the user wants their password length to be, and spit out a random character from a random category
    } else {
      alert(
        "Invalid Entry. Please select at least one character type. This program will now end. Please click the 'Generate Password' button to try again."
      );
    }
  } else {
    alert(
      "Invalid character entered. This program will now end. Please click the 'Generate Password' button to try again."
    );
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

// *************************THE GENERATE BUTTON WILL NOT WORK UNTIL YOU UNCOMMENT 4 LINES DOWN
//The comment below is the correct code that came with the assignment, 2 below is my tester for the generatePassword() function
// the generateBtn var is declared at the top, it's assigned to the #generate button element
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword());
