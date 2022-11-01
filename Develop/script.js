// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", ",", ".", "|", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-", "=", "/"];

function generatePassword() {
  var userChoiceLengths = window.prompt("How long do you want the password to be?\n(at least 8 characters and no more than 128 characters)");
  if (userChoiceLengths > 7 && userChoiceLengths < 128){
    window.alert("Noted! :)")
  } else if (userChoiceLengths < 8){
    window.alert("Too short, try again :(");
    return;
  } else if (userChoiceLengths > 128){
    window.alert("Too long, try again :(");
    return;
  } else {
    return;
  }

  var userChoiceUppercase = confirm("Do you want to include UPPERCASE?");
  if (userChoiceUppercase){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }

  var userChoiceLowercase = confirm("Do you want to include lowercase?");
  if (userChoiceLowercase){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }

  var userChoiceNumbers = confirm("Do you want to include numbers?");
  if (userChoiceNumbers){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }

  var userChoiceSpecialCharacters = confirm("Do you want to include special characters?");
  if (userChoiceSpecialCharacters){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }
}

function randomPassword(userChoiceLengths, userChoiceLowercase, userChoiceNumbers, userChoiceSpecialCharacters, userChoiceUppercase) {
  var result;
  if (userChoiceUppercase){
    result = result.concat(userChoiceUppercase);
  }

  if (userChoiceLowercase){
    result = result.concat(userChoiceLowercase);
  }

  if (userChoiceNumbers){
    result = result.concat(userChoiceNumbers);
  }

  if (userChoiceSpecialCharacters){
    result = result.concat(userChoiceSpecialCharacters);
  }

  var resultArray;
  for (var i=0; i <userChoiceLengths; i++){
    resultArray.push(result [Math.floor(Math.random() * userChoiceLengths)])
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join(" ");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
