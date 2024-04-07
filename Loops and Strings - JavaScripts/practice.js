/*Qsl. Prompt the user to enter their full name.
 Generate a username for them based on the input.
Start username with @, followed by their full name and ending 
with the fullname length */

let userNameinput = prompt("Enter your name (Must be at least 5 characters):");
console.log("@"+userNameinput);
if (userNameinput.length < 5) {
    console.log("Not accepted");
    console.log(userNameinput.length); 
} else {
    console.log("Accepted");
}
