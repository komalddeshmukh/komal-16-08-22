// Do the below programs in arrow functions.
//----------------------------------------------------------------------
// a.Print odd numbers in an array

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
// let odds = arr.filter(n => n%2);
// console.log(odds);

//-----------------------------------------------------------------------------------
//b.
// var string=prompt("Please enter a string");
//     //console.log(string);
//     var first=string.charAt(0);
//     //console.log(first)
//     //console.log(first.toUpperCase())
//     var rem=(string.slice(1));
//     //console.log(rem);

//     var caps=first.toUpperCase()+rem;
//     console.log(caps);

//-------------------------------------------------------------------------------------
//c.Sum of all numbers in an array
// const array = [1, 2, 3, 4];
//     let sum = 0;
    
//     for (let i = 0; i < array.length; i++)
//      {
//         sum += array[i];
//     }
//     console.log(sum);
//--------------------------------------------------------------------------------------
//d.Return all the prime numbers in an array

// var numArr = [ 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     numArr = numArr.filter((number) => {
//       for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) 
//         return false;
//       }
//       return true;
//     });
    
//     console.log(numArr);
//--------------------------------------------------------------------------------
//e.Return all the palindromes in an array
// let input3 = ['sydney', 141, 'madam','noon', 'abc', 'sus', 444]
// let output4= []

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