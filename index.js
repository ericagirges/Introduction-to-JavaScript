/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 28;
console.log(votingAge > 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
const answer = 16;
let yellow = "banana";

if (answer === 16) {
  yellow = "lemon";
}

console.log(yellow);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const year = "1999";
console.log(parseInt(year));

//Task d: Write a function to multiply a*b

function solve(a, b) {
  return a * b;
}

console.log(solve(6, 7));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(age) {
  return age * 7;
}

console.log(dogYears(4));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(age, weight) {
  if (age <= 0.33) {
    return weight * 0.1;
  } else if (age <= 0.58) {
    return weight * 0.05;
  } else if (age <= 0.99) {
    return weight * 0.04;
  } else if (age >= 1 && weight <= 5) {
    return weight * 0.05;
  } else if (age >= 1 && weight <= 10) {
    return weight * 0.04;
  } else if (age >= 1 && weight <= 15) {
    return weight * 0.03;
  } else if (age >= 1 && weight > 15) {
    return weight * 0.02;
  }
}

console.log(dogFeeder(1, 15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function letsPlay(option) {
  let comp = Math.floor(Math.random() * 3);
  const compChoice = ["scissors", "paper", "rock"];
  const choice = compChoice[comp];

  console.log("Computer picked " + choice);

  if ((choice === "scissors" && option === "paper") || (choice === "paper" && option === "rock") || (choice === "rock" && option === "scissors") ) {
    return "You lose.";
  } else if ((choice === "scissors" && option === "rock") || (choice === "paper" && option === "scissors") || (choice === "rock" && option === "paper")) {
    return "You win!";
  } else {
    return "It's a draw!";
  }
}

console.log(letsPlay("scissors"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmConverter(km) {
    return km * 0.621371
}

console.log(kmConverter(16));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetConverter(ft) {
    return ft * 30.48
}

console.log(feetConverter(4));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(numBottles){
    for(let i = numBottles; i > 0; i--) {
        const leftOver = i - 1;
        console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + leftOver + " bottles of soda on the wall");
    }
}

annoyingSong(99);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalculator(percent) {
    if(percent >= 90){
        return "A";
    }else if(percent >= 80 && percent < 90){
        return "B";
    }else if(percent >= 70 && percent < 80){
        return "C";
    }else if(percent >= 60 && percent < 70){
        return "D";
    }else{
        return "F"
    }
}

console.log(gradeCalculator(87));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

function totalVowels(str) {

    let vowels = str.match(/[aeiou]/gi);

    if(vowels) {
        return vowels.length
    }else{
        return 0;
    }
}

console.log(totalVowels("Supercalifragilisticexpealidocious"));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
