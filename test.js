
if(true && true){
    console.log('yes')
}








// setTimeout(()=> console.log(1))     // первая setTimeout
// Promise.reject(2).catch(console.log) // микротаска от .catch


// Promise.resolve().then(     
//      () => setTimeout(() => console.log(3))   
//     ) // setTimeout, запланированный внутри микротаски Micro -> Macro

// new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4)) // .then после setTimeout(resolve)

// Promise.resolve(5).then(console.log) // микротаска от .then

// setTimeout(() => console.log(6)) // вторая setTimeout

// console.log(7)// синхронно





// 7 2 5 1 4 6 3


// const add = (y) => {

// console.log(y)

// }


// add(1)

// console.log = 
//         (a) => x = a;


// console.log('test')
// add(2)
// console.log(x)

// add(3)






// function Count() {
//     let counter = 0;

//     return () => {
//         console.log(this.counter++) ;
//     }
// }
// const c = new Count();

// c();
// c();

// c.counter = 0;

// c();
// b = new Count();
// b();




// function flatten(arr) {
//     let result = [];

//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             result = result.concat(flatten(item)); 
//         } else {
//             result.push(item);
//         }
//     }

//     return result;
// }

// console.log(
//     flatten([1, [2, [3, 4], 5]])
// )





// function groupAnagrams(arr) {   
    

//     let obj = {}

//     for( x of arr){
//         let sortedKey = [...x].sort().toString();


//         if (!obj[sortedKey]) {
//             obj[sortedKey] = [x];
//         } else {
//             obj[sortedKey].push(x);
//         }
//     }
//     console.log(Object.values(obj))

 
//     return obj

// }






// console.log(
//     groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// )










// function isAnagram(one, two) {   
//     let obj = {};
//     for (let char of one) {
//         obj[char] = (obj[char] || 0) + 1; //here (obj[char] || 0) + 1
//     }
//     for(let char of two){
//         if(!obj[char]){   
//             return false
//         }
//         obj[char]--;
        
//     }
//     return true;



// }




// console.log(
//     isAnagram("listen", "silent") // true  
// )
// console.log(    
//     isAnagram("hello", "world")  // false
// )



// function isPalindrome(str) {
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length / 2; i++) {
//         console.log(str[i], str[str.length - 1 - i])
//         console.log([i], [str.length - 1 - i])

//         if(str[i] !== str[str.length - 1 - i]){
//             return false;
//         } 
//     }
//     return true;

// }


// // console.log(test([5, 4, 3, 2]));

// console.log(isPalindrome("xxmadamxx")) // true  



// function mostFrequent(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]]++;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//     return obj
// }

// function mostFrequent(arr){
//     let obj = {};
//     for(let i =0; i < arr.length; i++){
//         if(obj[arr[i]]){
//             obj[arr[i]]++
//         }
//         else{
//             obj[arr[i]] = 1;
//         }
//     }
//     return obj
// }

// console.log(mostFrequent([1, 3, 1, 3, 2, 1]))