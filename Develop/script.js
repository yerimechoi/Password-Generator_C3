// Assignment Code
var generateBtn = document.querySelector("#generate");

var choice2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var choice3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choice4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var choice5 = ["!", ",", ".", "|", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-", "=", "/"];

function generatePassword() {
  var userChoice1 = window.prompt("How long do you want the password to be?\n(at least 8 characters and no more than 128 characters)");
  if (userChoice1 > 7 && userChoice1 < 128){
    window.alert("Noted! :)")
  } else if (userChoice1 < 8){
    window.alert("Too short, try again :(");
  } else if (userChoice1 > 128){
    window.alert("Too long, try again :(");
  } else {
    return;
  }

  var userChoice2;
  if (confirm("Do you want to include UPPERCASE?")){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }

  var userChoice3;
  if (confirm("Do you want to include lowercase?")){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }

  var userChoice4;
  if (confirm("Do you want to include numbers?")){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }

  var userChoice5;
  if (confirm("Do you want to include special characters?")){
    window.alert("Noted! :)")
  } else {
    window.alert("Noted! :)")
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
