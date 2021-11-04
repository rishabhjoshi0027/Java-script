 /*
 /*
 let js = 'amazing';
 console.log(40 + 8 + 23 - 10);

 console.log("Rishabh");
 console.log(23);

 let firstName = "Rishabh"; // variable declaration
 console.log(firstName);
 console.log(firstName);
 console.log(firstName);

 // variable name convention 
 let rishabh_joshi = "RJ";
 let $function = 27;

 let person = "Rishabh";
 let PI = 3.13;

 let myfirstJob = "Programmer";
 let myCurrentJob = "Teacher";

 let job1 = "Programmer";
 let job2 = "teacher";

 console.log(myfirstJob);

 // data types 

 let javascriptIsFun = true;
 console.log(javascriptIsFun);

 console.log(typeof true);
 console.log(typeof javascriptIsFun);
 console.log(typeof 23);

 javascriptIsFun = "YES! ";
 console.log(typeof javascriptIsFun);

 console.log(console.log(typeof year); console.log(typeof year);

         let age = 30; age = 31;

         const birthYear = 1991;
         // birthYear = 2001 ;
         // const job ;

         var job = "Programmer"; job = "teacher";

         // Math operator 
         const now = 2039
         const ageJonar = now - 1991;
         const ageSarah = now - 2019; console.log(ageJonar, ageSarah);

         console.log(ageJonar * 2, ageJonar / 10, 2 ** 3);
         // 2 ** 3 means 2 to power 3 = 2 * 2 *2  

         const firstName = "Rishabh";
         const lastName = "joshi"; console.log(firstName + ' ' + lastName);

         // Assignemet operator
         let x = 10 + 5; console.log(x);

         //comparison operator 
         console.log(ageJonar > ageSarah);



         ////////////////////////////////////
         // Coding Challenge #1

         /*
         Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
         1. Store Mark's and John's mass and height in variables
         2. Calculate both their BMIs using the formula (you can even implement both versions)
         3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
         TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
         TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
         GOOD LUCK 😀
         */

         // const massMark = 78;
         // const heightMark = 1.69;
         // const massJohn = 92;
         // const heightJohn = 1.95;


        //  const massMark = 95;
        //  const heightMark = 1.88;
        //  const massJohn = 85;
        //  const heightJohn = 1.76;
        //  const BMIMark = massMark / heightMark ** 2;
        //  const BMIJohn = massJohn / (heightJohn * heightJohn);
        //  const markHigherBMI = BMIMark > BMIJohn; console.log(BMIMark, BMIJohn, markHigherBMI);


         ////////////////////
         // string nad template literals
/*
         const firstName = "rishabh" ;
         const job = "Programmer" ;
         const birthYear = 2001 ;
         const year = 2037 ;

         const rishabh = "I'm " + firstName + ',a ' +( year - birthYear ) + ' years old ' + ' job ' + '!'  ;
         console.log(rishabh) ;

        const rishabhNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}` ;

        console.log(rishabhNew) ;

        console.log(`Just a regular string...`) ;

        console.log('String with \n\
        mutiple \n\
        lines')

        console.log(`string 
        multiple
        lines`)

*/

///////////////////////

// Taking decisions if/else statemets

/* const age = 15 ;
if(age >= 18)
 console.log(`Rishabh can start driving license `) ;
 else{
     const yearsLeft = 18 - age ;
     console.log(`Rishabh is too Young. wait another ${yearsLeft} years :`) ;

 }

 const birthYear = 2012 ;

 let century ;

 if(birthYear <= 2000)
     century = 20 ;
 else
     century = 21; 

    console.log(century) ;
*/


///////////coding challenge 2 ///////
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
*/

///////////////////////////
// Type conversion and coercion 

//Type conversion 
/*
const inputYear = '1991' ;
console.log(Number(inputYear), inputYear) ;
console.log(Number(inputYear) + 18) ;
console.log(String(23) + 23) ;

//Type coercion 

console.log('I am' + 23 + 'years old') ;
console.log('23' - '10' -3) ;
console.log('23'/'2') ;
console.log('23' > '18') ;

let n = '1' + 1 ; // '11'
n = n -1 ;
console.log(n) ;
*/

/////////////////////////////
// Truthy and falsy values 
 
// 5 falsy values: 0 , '', undefined, null, Nan
/* console.log(Boolean(0)) ;
console.log(Boolean(undefined)) ;
console.log(Boolean('Jonas'));
console.log(Boolean({})) ;
console.log(Boolean('')) ;

const money = 100 ;
if(money){
    console.log("Don't spent it all ") ;
}
else{
    console.log("You should get a job!") ;
}
let height = 0 ;
if(height) {
    console.log("YAY! Height is defined") ;
}
else 
{
    console.log("Height is Undefined") ;
}

*/
///////////////////////////
// Equality operators : == vs === 
/*
const age = '18' ;
if(age === 18) console.log("You just became an adult : D(strict)") ;
if(age == 18) console.log("You just became an adult: d(loose") ;

const favourite =Number(prompt("What's your favourite number?")) ;
console.log(favourite) ;
console.log(typeof favourite) ;

if(favourite === 23){ // 22 ===23 ->false
    console.log("Cool! 23 is an amazing number!") ;
}
else if(favourite === 7){
    console.log('7 is also a cool number') ;
}
else if(favourite === 9){
    console.log("9 is also a cool number") ;
}
else{
    console.log("Number is 23 or 7 or 9") ;
}
*/

//////////////////////////////////
// Logical operators
/*
const hasDriversLicense = true ;// A
const hasGoodVision = true ; // B 

console.log(hasDriversLicense && hasGoodVision) ;
console.log(hasDriversLicense || hasGoodVision) ;
console.log(!hasDriversLicense) ;

if(hasDriversLicense && hasGoodVision){
    console.log('Rishabh is able to drive') ;
}
else{
    console.log('Someone else should drive...') ;
}

const isTired = false ;
console.log(hasDriversLicense && hasGoodVision && isTired) ;

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Rishabh should drive") ;
}
else{
    console.log("someone else should drive....") ;
}

*/

///////////////////////////////////////
// Introduction to Objects
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  */


  ///////////////////////////////////
  /// Dot vs. Bracket Noatations 


  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  console.log(jonas) ;
  console.log(jonas.lastName) ;
  console.log(jonas['lastName']) ;
