//Guess The Correct Number

const prompt = require("prompt-sync")();

let x = Math.round(Math.random()*100)+1;
var count = 10;
let c=0;
console.log("You've "+count+" guess");
while(true){
    let m = prompt("Enter Your Guessed Number : ");
    if(x>m){
        console.log("The number you've entered is smaller than the number computer is gessed");
        count--;
        c++;
    }
    else if(m>x){
        console.log("The number you've entered is bigger than the number computer is gessed");
        count--;
        c++;
    }
    else{
        count--;
        console.log("Congratulations!!!! You've entered the correct number in ",c," guess");
        break;
    }
    console.log("You've ",count," guess left");
}