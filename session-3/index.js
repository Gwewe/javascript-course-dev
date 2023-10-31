// // This is a comment in JavaScript
// // You can see where this file is connected to your HTML in the index.html on line 14
// let a = 5
// const b = 10
// var c = a + b
// console.log("Original ouput for c:" + c)

// a = 20

// console.log("And no change for c:" + c)

// c = a + b
// console.log("There we go:" + c)

// function sayHey() {
//     console.log("Bonjour!");
// }


// function conversation() {
//     sayHey();
//     console.log("How are you?");
//     console.log("Bonne soirée!");
// }

// conversation()

function sayHey(name) {
        console.log("Bonjour, " + name + "!");
    }
function futureAge(name, x) {
    sayHey(name)
    x = x + 5
    return "Yay, so " + name+ "! You will " + x + " years old in 5 years"
}
console.log(futureAge("Sabrina", 28));
