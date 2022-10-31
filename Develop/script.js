// Assignment Code
var generateBtn = document.querySelector("#generate");

var userChoice1 = 8-128
var userChoice2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userChoice3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoice4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var userChoice5 = ["!", ",", ".", "|", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-", "=", "/"];

var userChoice1 = window.prompt("How long do you want the password to be?\n(at least 8 characters and no more than 128 characters)");
if (userChoice1 > 7, userChoice1 < 128){
  window.alert("Noted! :)")
} else if (userChoice1 < 8){
  window.alert("Too short, try again :(");
} else if (userChoice1 > 128){
  window.alert("Too long, try again :(");
} else if(!userChoice1){
  return;
}

var userChoice2 = window.prompt("Do you want to include uppercase?\nIf so, which letter(s)?");
if (userChoice2 || userChoice2 == ""){
  window.alert("Noted! :)")
} else if (!userChoice2){  // even tho they write nothing want to be "noted"
  window.alert("Noted! :)")
} else if (userChoice2 == "null" || userChoice2 == null || userChoice2 == ""){
  return;
}

var userChoice3 = window.prompt("Do you want to include lowercase?\nIf so, which letter(s)?");
if (userChoice3){
  window.alert("Noted! :)")
} else if (!userChoice3){  // even tho they write nothing want to be "noted"
   window.alert("Noted! :)")
} else if (userChoice3 == "null" || userChoice3 == null || userChoice3 == ""){
  return;
}

var userChoice4 = window.prompt("Do you want to include numbers?\nIf so, which number(s)?");
if (userChoice4 >= 0, userChoice4 < 9){
  window.alert("Noted! :)")
} else if (!userChoice4){  // even tho they write nothing want to be "noted"
  window.alert("Noted! :)")
} else if (userChoice4 > 10){
  return;
}

var userChoice5 = window.prompt("Do you want to include special characters\nIf so, which character(s)?");
if (userChoice5){
  window.alert("Noted! :)")
} else if (!userChoice5){   // even tho they write nothing want to be "noted"
  window.alert("Noted! :)")
} else if (userChoice5 == "null" || userChoice5 == null || userChoice5 == ""){
  return;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
