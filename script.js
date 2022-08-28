//Do the below programs in anonymous function & IIFE
//-----------
//a. Print odd numbers in an array

// let getData=()=>
// {
//   let array=[1,2,3,4,5,6,7,8,9,10];
// let odds = array.filter(number=>{
//     return number%2 !==0
// })
//   console.log(odds);
// }

// getData();

//-----------
//b.Convert all the strings to title caps in a string array
//Method1:
// let getData=()=>
// {
//     var string=prompt("Please enter a string");
//     //console.log(string);
//     var first=string.charAt(0);
//     //console.log(first)
//     //console.log(first.toUpperCase())
//     var rem=(string.slice(1));
//     //console.log(rem);

//     var caps=first.toUpperCase()+rem;
//     console.log(caps);
   
    
// }

// getData();
//---------
//Method:2
// let getData=()=>
// {
//     let komal= ('my name is komal');

//     let captializeString= (str) =>str.toUpperCase() + str.Slice(1).toLowerCase;

//     let captializeWord= (str) =>str.split(' ').map(captializeString).join(' ');

//     console.log(captializeWord(komal));
// }
// getData( );

//----------------------------------------------------------
//3.Sum of all numbers in an array

//  let getData=()=>
// {
//     const array = [1, 2, 3, 4];
//     let sum = 0;
    
//     for (let i = 0; i < array.length; i++)
//      {
//         sum += array[i];
//     }
//     console.log(sum);
// }

// getData();
//-------------------------------------------------------------------
//4.Return all the prime numbers in an array
// let getData=()=>
// {
//     var numArray = [ 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     numArray = numArray.filter((number) => {
//       for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//       }
//       return true;
//     });
    
//     console.log(numArray);
// }
//getData();
//----------------------------------------------------------------------
//5.Return all the palindromes in an array
// let input3 = ['sydney', 141, 'madam','noon', 'abc', 'sus', 444]
// let output4= []

// let palCheck = ()=>{
//     for (let value of input3){  
//         let str = value.toString();             //for of loop to get value from array
//         let flag = 1
//         for(i=0; i<=str.length/2; i++){         //Palindrome logic
//             if(str[i]!==str[str.length - 1 -i]){
//                 flag = 0;                       
//             }
//         }
//         if(flag==1){                            
//             output4.push(value)                 //if its plaindrome , push to output array
//         }
//     }console.log(output4)
// }
// palCheck();
//---------------------------------------------------------------------------
//f.Return median of two sorted arrays of the same size.
// let arr1=[1,6,8,10];
// let arr2=[4,5,7,9];
// let median=()=>{
    
//     Array.prototype.push.apply(arr1,arr2); //murge two array [1,4,5,6,7,8,9,10]
// arr1.sort((a, b) => a - b) //sort the array

// let median;//declare median variable

// //if else block to check for even or odd
// if(arr1.length%2 != 0){
//     //odd case

//     //find middle index
//     let middleIndex = Math.floor(arr1.length/2)

//     //find median
//     median = arr1[middleIndex]
// }else{
//     //even case

//     //find middle index
//     let middleIndex = Math.floor(arr1.length/2)

//     //find median
//     median = (arr1[middleIndex] + arr1[middleIndex - 1])/2
// }

// //print median
// console.log(median)
// }
// median()
//---------------------------------------------------------------------------
//g.Remove duplicates from an array
// let array=['komal', 'manju','ram' , 'sham','komal','manju','shaila','dilip']
// let dupli=()=>{
    
//     let uniqueChars = [...new Set(array)]; //set is used to remove duplicate
    
//     console.log(uniqueChars);
// }
// dupli();
//---------------------------------------------------------------------------
//h.Rotate an array by k times

// let rotate=()=>{
// let nums=(1,2,3,4,5,6,7);

//     for (let i = 0; i < nums.length; i++) {
//        nums.unshift(nums.pop());
//  }
// console.log(nums);
// }
// rotate();