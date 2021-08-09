function test(){
var a = "8";
var b = "3";

var c = a;
a = b;
b=c;

console.log("a is " + a);
console.log("b is " + b)

}

var tweet = prompt("What are you thinking?");

var tweetUnder140 = tweet.slice(0,140);
alert(tweet.slice (0,140);

//or

alert(prompt("Compose your tweet").slice(0,140));

//alert hello, Iffy
var name = "iffster";
function capFirstLetter(string){
  return

 string.indexOf(0).toUpperCase() + str.slice(1);
}

capFirstLetter(name);

//break things down

//1. create a var that stores the name that the user enters in a prompt
var name = prompt("What yo name is?");

//2. capitalize the first capFirstLetter
//break it down further

//get the first char
var firstChar = name.slice(0,1);
//make it toUpperCase
var upperCase = firstChar.toUpperCase();
//get the rest of the name
//var restofName = name.slice(1,name.length);
restofName = restofName.toLowerCase();
//concat it up with upper first char
var capitalizedName = firstChar + restofName;
//3. use the capitalize name in the greeting alert
alert("Hello " + capitalizedName);

function main(){
   move();
   move();
   move();
   move();
   turnleft();
   move();
   move();
   move();
   move();

}
//lots of repeated code so think of a function, 


function moveFourTimes(){
   move();
   move();
   move();
   move();
}

// now it's consolidated code

function main () {
   moveFourTimes ();
   turnLeft();
   moveFourTimes();
}
