var a = 10
var a =20 
console.log(a);
let ba = 10;
 b = 20;
 console.log(ba);
const ca =15;
console.log(ca);
console.log(a);
var a = 20;
console.log(b);
let bc =20;
let a =20;
let ab = '20';
let c = a==b;
let d = a===b;
console.log(c);
console.log(d);
const arr3 = [1,2,3,4,5,"hi"]
const arr1 = [6,7,8,9,10,"hello"]
console.log(arr3);
console.log(...arr)
console.log(...arr1)
console.log(...arr,...arr1)
///Example using MRF and function
const numbers = [1,2,3,4,5,6,7,8,9,10];
//find even numbers , multiply the array by 2 , calculate the sum of the array.
//filter function
const filterFunction=(num)=>num%2==0;
//map function
const mapFunction = (num)=>num*2;
//reduce function
const reduceFunction=(acc,num)=>acc+num;
//applying MRF
const filteredNumbers= numbers.filter(filterFunction);
const mappedNumbers= filteredNumbers.map(mapFunction);
const result1 = mappedNumbers.reduce(reduceFunction,0);
//Printing the values
console.log("Original Numbers:",numbers);
console.log("Filtered Numbers:",filteredNumbers);
console.log("Mapped Numbers:",mappedNumbers);
console.log("Results:",result1);

// Template literals
const a = 50;
const b =60;
console.log(`the value of 
a is :${a}
b is :${b}
sum is :${a+b}`)
//`${}`

// Given two Strings, return true if they are anagrams of one another
function isAnagram(string1,string2){
    const str1 = string1.toLowerCase().split('').sort().join(" ")
    const str2 = string2.toLowerCase().split('').sort().join(" ")
    console.log(str1);
    console.log(str2);
}
console.log(isAnagram("Worth","Throw"));

// collect books from array of Objects and return collection of books as an array.
const books = [
    {
        author:"Paulo",
        books:["The Alchemist",'Eleven Minutes']
    },
    {
        author:"John Green",
        books:['The Fault in our Stars']
    },
    {
        author:"James Alen",
        books:['The Way Of Peace','As you Think']
    }
];
const result = books.reduce((acc,curr)=>{
    return [...acc,...curr.books];
},[])
console.log(result);

// to find the elements exist or not
const arr = [10,20,40]
//using includes
console.log(arr.includes(20))//true
console.log(arr.includes(90))//false
//using indexOf
console.log(arr.indexOf(10) !==-1)
console.log(arr.indexOf(90) !==-1)
//using find
console.log(arr.find(val => val ===40)) //true
console.log(arr.find(val => val ===90)) 

// finding duplicates in an array

const arr2 = [1,2,3,4,4,5,5,3,2,1,8,9,9,12]
// using filter and indexof
function dup(arr){
  return arr.filter((ele,index)=>
    arr.indexOf(ele) === index
  )
}
console.log(dup([1,2,3,4,4,5,5,3,2,1,8,9,9,12]))
// using set
function dup(arr){
      return [...new Set(arr)]
    }
    console.log(dup([1,2,3,4,4,5,5,3,2,1,8,9,9,12]))