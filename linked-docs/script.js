// Assignment Code
var generateBtn = document.querySelector("#generate");
//good to set this to false here, in case the program is run twice in a row.
var hasSelectedType = false; //This boolean tracks whether the user has not selected any character types

// Declaration of character arrays for RNG to choose from.
var upperCharArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(  "");
console.log(upperCharArray);
var lowerCharArray = "abcdefghijklmnopqrstuvwxyz".split(  "");
var numericalCharArray = "0123456789".split("");
// I'm omitting spaces, quotes, and slashes from special characters so they don't accidentally mess up wherever it gets passed
var specialCharArray = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~".split("");
// console.log(specialCharArray);
//initializing empty array that will eventually contain pool of characters to build new password
var charPool = [];

// my extremely lazy function to post charPool to console
function logCharPool() {
  console.log("carpool array", charPool);
}

// my function, checks if the user wants a type of character included in
//their password and if they do, it appends that character
// type's pool array on to the master charPool

// I need to check to make sure they don't hit cancel, which returns "null"
function pushCharArray(wantsIncluded, charArray) {
  if (wantsIncluded !== null && wantsIncluded.toLowerCase() === "yes") {
    for (var i = 0; i<charArray.length; i++){
      charPool.push(charArray[i]);
    }
    hasSelectedType = true;
  }
}

////////////////////////////////////////////////////////////////////////

// This function asks the user to enter their password length, 
//and choose which type of character they want included in 
//their new password (upper case, lower case, numbers, special characters)
//Error handling: 
///////Will escape function if no or bad password length is entered, or
///////fewer than 1 type of character is selected
////////WILL NOT alert user if they have entered a char type OTHER THAN "yes" or "no"
function generatePassword() {
  //Ask the user how long they want their password to be, and check it is between 8 and 128. 
  var newPassword = "";

  var passwordLength = prompt(
    "What length would you like your new password to be? (Please choose a whole number between 8 and 128)"  );
  console.log("password length: " + passwordLength);
  // This error checking confirms range but also ensures a whole number  has been entered, 
console.log("typeof passwordLength: " + typeof passwordLength)
  console.log("is int true or false? "+parseInt(passwordLength));

console.log("Number.isInteger(parseInt(passwordLength))---" + Number.isInteger(parseInt(passwordLength)))

passwordLength = parseInt(passwordLength);
console.log("line 58 passwordLength----" +passwordLength)
//this peculiar conditional parses the user input to an int. If it is passed a NaN or empty string it will be false...I think
//Also if the user enters a decimal that is within range it will be rounded down 
//password length error checking -----  string, special char, empty, cancel, out of range
  if (parseInt(passwordLength) &&
  passwordLength >= 8 && 
  passwordLength <= 128) {
    alert(
      "The next few prompts will ask about the special characters you want to be present in your new passwords."    );


//Ask user if they want Capitalized Letters included in their new password
    var useUpperCase = prompt(
      "Would you like your new passsword to include \r\nCapitalized Letters? \r\nType 'yes' or 'no'"    );
    pushCharArray(useUpperCase, upperCharArray);



//Ask user if they want Lower case Letters included in their new password
///////EXPERIMENTAL ERROR HANDLING FOR INDIVIDUAL CHAR TYPE PROMPT
    var useLowerCase = prompt(
      "Would you like your new passsword to include \r\nLowercase Letters? \r\nType 'yes' or 'no'"    );
    // if (useLowerCase.toLowerCase() === "yes") {
      pushCharArray(useLowerCase, lowerCharArray);
    // }
    // else {
    //   alert("Invalid entry detected. Please input EITHER 'yes' OR 'no'. The program will now exit.");
    //   return;
    // }

    
//Ask user if they want Numeric Characters included in their new password
    var useNumericChars = prompt(
      "Would you like your new passsword to include \r\nNumeric Characters? \r\nType 'yes' or 'no'"    );
    // if (useNumericChars.toLowerCase() === "yes") {
      pushCharArray(useNumericChars, numericalCharArray);
    // }
    // else {
    //   alert("Invalid entry detected. Please input EITHER 'yes' OR 'no'. The program will now exit.");
    //   return;
    // }


//Ask user if they want Special  Characters included in their new password
    var useSpecialChars = prompt(
      "Would you like your new passsword to include \r\nSpecial Character? \r\nType 'yes' or 'no'"    );
    // if (useSpecialChars.toLowerCase() === "yes") {
      pushCharArray(useSpecialChars, specialCharArray);
    // }
    // else {
    //   alert("Invalid entry detected. Please input EITHER 'yes' OR 'no'. The program will now exit.");
    //   return;
    // }

alert("You have made the following selections: " +
"\nPassword Length----------" + passwordLength +
"\nUpper Case Characters----" + useUpperCase +
"\nLower Case Character-----" + useLowerCase +
"\nNumerical Characters-----" + useNumericChars +
"\nSpecial Characters--------" + useSpecialChars);
    // If no character types have been selected, it will exit the program here and return an empty string
    //The boolean check will be set to true if any of the 4 char types are selected.
    if (hasSelectedType) {
      // loop through as many times as the user wants their password length to be, and 
      //spit out and append a random character from the master pool (random category of the types selected by the user)
      for (var i = 0; i < passwordLength; i++) {
        newPassword += charPool[Math.floor(Math.random() * charPool.length)];
      }
      ///this must be set back to false, 
      ///because it is global to the page 
      ///if the program runs succesfully once, 
      // it will retain true value and run this conditional
      // -->Resetting charPool is probably unnecessary. 
      hasSelectedType = false;
      charPool = [];
      return newPassword;

    } else if (!hasSelectedType) {
      alert(
        "Invalid Entry. Please select at least one character type. This program will now end. Please click the 'Generate Password' button to try again."
      );
    }
  } else {
    alert(
      "\nInvalid character entered. \n\nPlease enter a whole number between 8 and 128." +
       "\n\nThis program will now end. \n\nPlease click the 'Generate Password' button to try again."
    );
  }
 console.log("hasSelectedType at the end line 145:---" +hasSelectedType)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log("generatePassword function is returning: "+ password)
  //The conditional is Abraham's addition so the password doesn't 
  //become the word "undefined" on-screen if something goes awry in the prompts. 
  //This works because it would then be passed a falsy value of NaN or undefined or "". Nifty!

  console.log("password: "+ password)
  if (!password) {passwordText.value="YOUR PASSWORD WAS NOT GENERATED." +
  "\nPLEASE DOUBLE CHECK YOUR INPUTS AND TRY AGAIN."} else
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);