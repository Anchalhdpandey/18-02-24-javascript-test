// 1 Q1

// 2 Q2
// let x=121;
// function isPalindrome(string){
//     for(var i=0;i<Math.floor(string.length/2);i++){
//         if(string[0]!==string[string.length-1-i]){
//             return "Not a palindrome"
//         }
//     }return "it is a palindrome"
// }
// console.log(isPalindrome(x))

// // 3 Q3

// function calculateSum(arr){
//     let arr = [1,2,3,4,5];
//     let sum=0;
//     for(let i of arr){
//         sum +=i;
//     }
//    return sum;
// }
// console.log("The Sum is:" +calculateSum([1,2,3,4,5]));


// // 4 Q4
// let pal="abcba";
// function isPal(string1){
//     for(var i=0;i<Math.floor(string1.length/2);i++){
//         if(string1[0]!==string1[string1.length-1-i]){
//             return "Not a palindrome"
//         }
//     }return "it is a palindrome"
// }
// console.log(isPal(pal));

// // Q05
// var array1=[1,2,3,4,5]
// const arraynew=[].concat(array1).reverse();
// console.log(arraynew)

// //Q06//
// // Q07
// function factorial(n){
//     if(n===0||n===1){
//         return 1;
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(5))

// // Q08
// function isPrime(m){
//     if(m%2!==0){
//         console.log("is prime")
//     }else{
//         console.log("not prime")
//     }
// }
// isPrime(9);

// Q09
function calculateFactorial(a){
    while(a===0||a===1){
        return a*calculateFactorial(a-1)
    }
}
console.log(calculateFactorial(5))

// Q10
let num1=[1,2,3,4,5,6,67]
let num2=[]
function sortNumbers(new){
for(i=0;i<new.length;i++){
num2=num1.sort((a,b)=>a-b)
}
}
sortNumbers(num1)
console.log(num2)
