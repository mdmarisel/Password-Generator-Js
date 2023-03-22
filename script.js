var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];
var lowerCassArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } 
  else {
    passwordText.vualue = "";
  }
}

function generatePassword() {
  // I would generatePassword based on the prompts
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password += choiceArr[randomIndex]
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 -128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a numer, 8 - 128 degits. Please try again.");
    return false
  }
  if (confirm("Would you like lowercase letters in your password")) {
    choiceArr = choiceArr.concat(lowerCassArr);
 }
  if (confirm("Would you like uppercase letters in your password")) {
    choiceArr = choiceArr.concat(upperCaseArr);
 } 
  if (confirm("Would you like specia letters in your password")) {
    choiceArr = choiceArr.concat(specialCharArr);
} 
  if (confirm("Would you like lowercase letters in your password")) {
    choiceArr = choiceArr.concat(lowerCassArr);
} 
  if (confirm("Would you like numbers in your password")) {
    choiceArr = choiceArr.concat(numberArr);
 }
  return true;
}