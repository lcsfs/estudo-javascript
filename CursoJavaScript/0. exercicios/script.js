// LECTURE: Values and Variables 
/* 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console */

let country = "Brasil";
let continent = "America do Sul";
let population = 214.3;

console.log(country, continent, population);

// LECTURE: Data Types 
/* 1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable 
'language', but don't assign it any value yet 
2. Log the types of 'isIsland', 'population', 'country' and 'language' 
to the console */

let isIsland = false;
let language;

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
let finland = 6;
console.log(finland <= population);
let averagePopulation = 33;
console.log(averagePopulation >= population);
let description = "Portugal is in Europe, and its 11 million, and people speak portuguese";