// problem  1
// let arr = [1,2,3,4,5,6,7,83]
const prompt=require("prompt-sync")({signit:true});
// let a = prompt("Enter a number \n")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

let age = prompt("What is your age? \n");
 
 if (age>=10 && age<=20){
   console.log("You are Excellent");
 }
else{
  console.log("age", age)
}

// problem  2
let umar = prompt("Enter your umar \n");
switch (umar){
  case '12':
  console.log("Your umar is 12");
  break;
  case '22':
  console.log("Your umar is 22");
break;
  default:
  console.log("Your umar is not special")
}

// problem  3
let num = prompt("Enter a number \n");
num = Number.parseInt(num);
if (num%2==0 && num%3==0){
  console.log("Your number is divisible by 2 and 3")
}
else{
  console.log("Your number is not divisible by 2 and 3")
}

// Problem 4
console.log(num>10?'its great':'its ok ok ...')