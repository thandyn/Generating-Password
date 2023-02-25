// Assignment Code
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "?",
  ",",
  ".",
  "~",
  ":",
  ";",
];
// password prompt
function getPasswordPrompt() {
  var length = parseInt(prompt("How long do you want your password to be?"));
  // return if input is not a number
  if (Number.isNaN(length)) {
    alert("Password length must be a number.");
    return;
  }
  // return if input is less than 8
  if (length < 8) {
    alert("Password needs to have 8 or more characters.");
    return;
  }
  // return if input is more than 128
  if (length > 128) {
    alert("Password needs to have 128 or less characters");
    return;
  }

  var includeLowerCase = confirm("Click OK to include lowercase characters.");
  var includeUpperCase = confirm("Click OK to incude uppercase charaters.");
  var includeNumbers = confirm("Click OK to include numbers.");
  var includeSpecialChar = confirm("Click OK to include special characters.");
  // returns if all choices are false
  if (
    includeLowerCase === false &&
    includeUpperCase === false &&
    includeNumbers === false &&
    includeSpecialChar === false
  ) {
    alert("You must pick at least one character type.");
    return;
  }
  //store boolean value to variable
  var passwordPrompt = {
    length: length,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumbers: includeNumbers,
    includeSpecialChar: includeSpecialChar,
  };

  return passwordPrompt;
}
//generate random password into variable
function randomPassword(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomEl = arr[randomIndex];

  return randomEl;
}
//verifying if password contain user's choice
function generatePassword() {
  var options = getPasswordPrompt();
  // store added characters
  var results = [];
  //incuded type of characters to password
  var possibleChar = [];
  // make sure to store characters included from user's choice
  var containChar = [];

  if (!options) return;
  //pushing charaters to be included based on user's choice
  if (options.includeLowerCase) {
    possibleChar = possibleChar.concat(lowerCaseLetters);
    containChar.push(randomPassword(lowerCaseLetters));
  }
  if (options.includeUpperCase) {
    possibleChar = possibleChar.concat(upperCaseLetters);
    containChar.push(randomPassword(upperCaseLetters));
  }
  if (options.includeNumbers) {
    possibleChar = possibleChar.concat(numbers);
    containChar.push(randomPassword(numbers));
  }
  if (options.includeSpecialChar) {
    possibleChar = possibleChar.concat(specialChar);
    containChar.push(randomPassword(specialChar));
  }
  //
  for (var i = 0; i < options.length; i++) {
    var possibleChars = randomPassword(possibleChar);

    results.push(possibleChars);
  }
  //mixes containing character into the results
  for (var i = 0; i < containChar.length; i++) {
    results[i] = containChar[i];
  }
  // puts together the everything into a string
  return results.join("");
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
