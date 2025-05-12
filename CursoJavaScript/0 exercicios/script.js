// --------------------------------- JavaScript Fundamentals Part 1 ---------------------------------

// LECTURE: Values and Variables 
/* 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console */

const country = "Brasil";
const continent = "America do Sul";
let population = 40;

console.log(country, continent, population);

// LECTURE: Data Types 
/* 1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable 
'language', but don't assign it any value yet 
2. Log the types of 'isIsland', 'population', 'country' and 'language' 
to the console */

const isIsland = false;
const language = "portuguese"

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: Basic Operators 
/* 1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half? 
2. Increase the population of your country by 1 and log the result to the console 
3. Finland has a population of 6 million. Does your country have more people than 
Finland? 
4. The average population of a country is 33 million people. Does your country 
have less people than the average country? 
5. Based on the variables you created, create a new variable 'description' 
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese' */

console.log(population / 2)
console.log(++population);
const finland = 6;
console.log(finland <= population);
const averagePopulation = 33;
console.log(averagePopulation >= population);
const description = "O " + country + " fica na " + continent + " e tem em média " + population + " milhões de pessoas, nossa lingua nativa é " + language;

console.log(description);

/* LECTURE: Strings and Template Literals 
1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax */

const newDescription = `O ${country} fica na ${continent} e tem em média ${population} milhões de pessoas, nossa lingua nativa é ${language} `;
console.log(newDescription);

// LECTURE: Taking Decisions: if / else Statements
/* 1.2. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

if (population > 33) {
  console.log(`A população do ${country}(${population}), está acima da média.`)
} else {
  console.log(`A população do ${country} está ${33 - population} abaixo da média`);
}


// LECTURE: Type Conversion and Coercion
/* 1. Predict the result of these 5 operations without executing them:
'9' - '5'; - 4
'19' - '13' + '17'; - 617
'19' - '13' + 17; - 23
'123' < 57; - false
5 + 6 + '4' + 9 - 4 - 2; - 117
2. Execute the operations to check if you were right */

console.log('9' - '5');
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);


// LECTURE: Equality Operators: == vs. ===
/* Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
Test the code with different values of 'numNeighbours', including 1 and 0.
Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
Reflect on why we should use the === operator and type conversion in this
situation */

// var numNeighbours = prompt('How many neighbour countries does your country have?');

// if (numNeighbours == 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log('No borders');
// }

// LECTURE: Logical Operators
/* 1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D) */

if (language && population && !isIsland) {
  console.log(`You should live in Brasil`);
} else {
  console.log(`Brasil does not meet your criteria`);
}

// LECTURE: The switch Statement
/* 1.Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

switch (language) {
  case `mandarin`:
    console.log(`Most number of native speakers`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `portuguese`:
    console.log(`number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
  default:
    console.log(`Great language too :D`);
    break;
}

// LECTURE: The Conditional (Ternary) Operator
/* 1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);

// --------------------------------- JavaScript Fundamentals Part 2 ---------------------------------

// LECTURE: Functions
/* 1.Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'.
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descBrazil = describeCountry(`Brasil`, 211, `Brazilian`);
const descPortugal = describeCountry(`Portugal`, 11, `Lisboa`);
const descUSA = describeCountry(`USA`, 340, `Washington`);
console.log(descBrazil, descPortugal, descUSA);

// LECTURE: Function Declarations vs. Expressions
/* 1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population.
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console.
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */

function percentageOfWorld2(population) {
  return (population / 7900) * 100
}

const percentageOfWorld1 = function(population) {
  return (population / 7900) * 100
}

const percBrazil = percentageOfWorld1(211);
const percChina = percentageOfWorld1(1441);
const percPortugal = percentageOfWorld1(11);
console.log(percChina.toFixed(2), percBrazil.toFixed(2), percPortugal.toFixed(2));

// LECTURE: Arrow Functions
/* 1.Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

const percentageOfWorld3 = population => (population / 7900) * 100
const percFrench = percentageOfWorld3(68)
console.log(percFrench.toFixed(2));

// LECTURE: Functions Calling Other Functions
/* 1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population)
  return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}
console.log(describePopulation(`Brazil`, 211));

// LECTURE: Introduction to Arrays
/* 1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values */

const populations = [11, 211, 1441, 68]
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]).toFixed(2),
  percentageOfWorld1(populations[1]).toFixed(2),
  percentageOfWorld1(populations[2]).toFixed(2),
  percentageOfWorld1(populations[3]).toFixed(2),
];
console.log(percentages);