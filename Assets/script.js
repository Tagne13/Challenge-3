// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

// Arrays 

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "@", "#", "$", "^", "(", ")", "_", "=", "`", "|", "{", "}", "[", "]", "'", "?"];

// Variable Declaration 

var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialCharacter;

// Prompt to confirm how many characters wanted in password

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters. Please choose again.");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  // Repeat back how many charactes the password will have  

  alert("Your password will have " + confirmLength + " characters");

  // Determine parameters of password 

  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");

  // Loop if answer is outside the parameters 

  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  }

  // Assign an action to the password parameters
  
  var passwordCharacters = []

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the array

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
