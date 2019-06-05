"use strict"

var bob = 5
let chicken = 10
const taxes = 1.14975

chicken = chicken + 5
console.log(chicken)

//  This will cause an error
// taxes = taxes + 1
// console.log(taxes)

const randomArray = [1,2,3,4,5]
randomArray.push(6)
// randomArray = [1,2,3,4,5,6] will explode again

console.log(randomArray)

const randomObject = {}
randomObject.name = "Bob"

console.log(randomObject)

let var1 = 5
let var2 = 5

if(true){
    let secret = "shhh"
    let secret2 = "ssssssssssshhhhhhhhhh"
    console.log("This is the real secret", secret)
}
if(true){
    var secret = "shhh"
    var secret = "AHAHAHAHAHHAAH"
}
console.log(secret)

let goodQuestion = "can var reinitialize me ?"
// var goodQuestion = "Yes I can"

console.log(goodQuestion)

var veryGoodQuestion = "What if var is first ?!"
// let veryGoodQuestion = "Maybe ??"

console.log(veryGoodQuestion)

/*
    iAmACamelCase
    PascalCaseIAm
    ssss_i_am_a_snake
    thisIsAVeryBadJokeThatIMadeBecauseItLooksLikeAChainOfMountains (this is bad)
*/

// someName = "Francis" Need to declare before usage
// console.log(someName)





let sortNum = function (a, b) {
    return b - a
}
let sortNumArrow = (a,b) => {
    return b - a
}
// let sortNumArrow = (a,b) => b - a

// let arrowFunctionOneParam = param => param * 2


// let sortableArray = [5, 6, 3, 2, 2, 1, 16, 4]
// sortableArray.sort(sortNum(a, b))
// sortableArray.sort((a, b) => b - a)
// sortableArray.sort(function (a, b) { return b - a })
// let bob = function(){
//     return this
// }
// let bobArrow = () => {
//     return this
// }

let someArray = [1,2,3,4,5,6,7]
let newArray = [...someArray, 8, 9, 10, ...someArray]

console.log(someArray,newArray)

let oneVar = 45
let twoVar = 55

console.log("the age is between "+oneVar+" and "+twoVar+" years old")
console.log(`The age is between ${oneVar} and ${twoVar} years old`)
