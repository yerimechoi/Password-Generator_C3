// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var userChoice1 //numbers
  var userChoice2 = true; //boolean
  var userChoice3 = true; //boolean
  var userChoice4 = 0-9; //numbers
  var userChoice5 = `!@#$%^&*()_+-=":;'{}[]|\/?<>,.~`; //string

  var userChoice1 = window.prompt("How long do you want the password to be? (at least 8 characters and no more than 128 characters)");
  if (userChoice1 > 7, userChoice1 < 128){
    window.alert("Noted! :)")
  } else if (userChoice1 < 8){
    window.alert("Too short, try again :(");
  } else if (userChoice1 > 128){
    window.alert("Too long, try again :(");
  } else if(!userChoice1){
    return;
  }

  var userChoice2 = window.prompt("Do you want to include lowercase? (y or n)");
  if (userChoice2 == true){
    window.alert("Noted! :)")
  } else if (userChoice2 == false){
    window.alert("Noted! :)")
  } else if (!userChoice2){
    return;
  }

  var userChoice3 = window.prompt("Do you want to include uppercase? (y or n");
  if (userChoice3 == true){
    window.alert("Noted! :)")
  } else if (userChoice3 == false){
    window.alert("Noted! :)")
  } else if (!userChoice3){
    return;
  }

  var userChoice4 = window.prompt("Do you want to include numbers? If so, please type the number(s). If not, press n");
  if (userChoice4 >= 0, userChoice4 < 9){
    window.alert("Noted! :)")
  } else if (userChoice4 = "n"){
    window.alert("Noted! :)")
  } else if (!userChoice4){
    return;
  }

  var userChoice5 = window.prompt("Do you want to include special characters? If so, please type them in. If not, press n");
  if (userChoice5){
    window.alert("Noted! :)")
  } else if (userChoice5 = "n"){
    window.alert("Noted! :)")
  } else if (!userChoice5){
    return;
  }

  // userChoice1.value, userChoice2.value, userChoice3.value, userChoice4.value, userChoice5.value = passwordText;
  // passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
