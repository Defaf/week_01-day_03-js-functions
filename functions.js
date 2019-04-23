/*
Lab: Functions
Define a youRock function that accepts a string argument of a name 
and returns a string using that name.
*/
const youRock  = function (name){
    return ("You rock "+ name);
}
youRock('Dhaffaf');// output You rock Dhaffaf

/*
Define a square function that accepts a number argument 
and returns that number multipled by itself.
*/
const square = function (num){
    return Math.pow(num,2);
}
square(2);// output 4

/*
Define a cube function that accepts a number argument 
and returns that number raised to the third power.
*/
const cube = function (num){
    return Math.pow(num,3);
}
cube(2);// output 8

//Another solution 
const cube = function (num){
    return square(num)*num;
}
/*
Define a toTheFourth function that accepts a number argument 
and returns that number raised to the fourth power.
*/
const toTheFourth = function (num){
    return Math.pow(num,4);
}
toTheFourth(2);// output 16

/*
Extra Practice
Write a function that will add, subtract, 
multiply or divide two numbers and return the answer
*/
const calculator = function (num1,num2,operation){
    if(isNaN(num1) || isNaN(num2) ) {
        return ("calculator only accepts numbers");
    }else {
        if(operation == "add"){
            return (num1+num2);
        }else if (operation == "subtract"){
            return ( num1-num2);
        }else if(operation == "divide"){
            return ( num1/num2);
        }else if(operation == "multiply"){
            return ( num1*num2);
        }else if( operation !== "add" || "subtract"|| "divide"|| "multiply"){
            return ("calculator can only add, subtract, divide, or multiply");
        }
    }//end else of checking the numbers 
}//end calculator function

/*
Lab: FizzBuzz Function
Write a function that accepts an argument of a number
If it is a multiple of 3, return “Fizz” instead of the number.
If it is a multiple of 5, return “Buzz” instead of the number.
If it is a multiple of both 3 and 5, return “FizzBuzz” instead of the number.
Otherwise, return the number
*/
const fizzBuzz= function (num ){
    if(isNaN(num) ) {
        return "Sorry "+ num + "it's not a number ! " ;
    }else {
        if(num % 3 === 0 && num %5 ===0){
            return "FizzBuzz" ;
        }else if(num %3===0){
            return "Fizz" ;
        }else if(num %5 === 0 ){
            return "Buzz" ;
        }else {
            return num ; 
        }
    }//end else of checking the numbers   
}//end fizzBuzz function

/*
Lab: RainDrop Function
Write a function that accepts an argument of a number
If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the
number as a string.
*/

const rainDrop = function (num){
    if(isNaN(num)){
        return "Sorry "+ num + "it's not a number ! " ;
    }else{
        if(num % 3 === 0 && num % 5 ===0 && num %7 === 0 ){
            return "PlingPlangPlong";
        }else if(num % 3 === 0 && num % 5 ===0 ){
            return "PlingPlang";
        }else if(num % 5 ===0 && num %7 === 0){
            return "PlangPlong";
        }else if(num % 3 === 0 && num % 7 ===0){
            return "PlingPlong";
        }else if(num % 3 === 0){
            return "Pling";
        }else if(num % 5 === 0){
            return "Plang";
        }else if(num % 7 === 0){
            return "Plong";
        }else{
            return num ;
        }
    }
}// end rainDrop function 