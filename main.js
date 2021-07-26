// // console.log("New!!! Sanity Test"); 



// // function to say hello
// // DRY dont repeat yourself
// function sayHello(whatName)
// {
//     alert("Wassup" + whatName +"! Maybe u know" + anotherName);
//     return "finish processing...";
// }


// // anon function
// let myanonfunc = function(msg)
// {
// console.log(msg);
// }

// // call the fucntion
// let finishMsg = sayHello("Bob","Kim");
// console.log("received this message:  " +finishMsg);

// myanonfunc("dont panic");

// // do some research into JS arrow functions

// // object literals
// // oop


// // Define some instances of objects with object literal notation
const person =
{
    name: "Grace Hopper",
    age: 85,
    isNinja: true,
    sayHi: function()
    {
        alert("well hello there!!!");
    }
}



// dot notation
console.log("Here is the name of person: " + person.name);
// call a function
console.log(person);
person.sayHi();