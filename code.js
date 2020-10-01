// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input){
//     if(input === "Alex"){
//         return "Hello, Alex!";
//     } else if(input === "Pat"){
//         return "Hello, Pat!";
//     } else return "Hello, Jane!";
//
// }

//------Refactoring....

// function sayHello(input){
//     if(input === undefined || input === true || input === false){
//         return "Hello, World!";
//     } else {
//         return "Hello, " + input + "!";
//     }
//
// }

//------Refactoring some more....

function sayHello(input){
    if(typeof input === "string"){
        return "Hello, " + input + "!";
    } else if(typeof input === "number"){
        return "I cannot say hello to a number...";
    } else if(typeof input === "object") {
        return "I cannot say hello to an object...";
    } else {
        return "Hello, World!";
    }

}

function isFive(input){
    return (parseInt(input)) === 5;
}

function isEven(input){
    return input % 2 ===  0;
}

function isVowel(input){
    return (input === "a" || input === "A");
}

