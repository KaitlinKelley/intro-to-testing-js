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

function sayHello(input){
    if(input === undefined || input === true || input === false){
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }

}

