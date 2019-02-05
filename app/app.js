var people = [{
    name: "Ryan",
    food: "pasta"
}, {
    name: "Jack",
    food: "steak"
}, {
    name: "Jan",
    food: "salad"
}, {
    name: "Ben",
    food: "pasta"
}, {
    name: "Alison",
    food: "lasagne"
}]

/*
let me = {
    name: "Ryan",
    age: 31,
    food: "pasta",
    hair: true,
    eyes: true,
}

console.log(`Hello, my name is ${people[0].name} and my favorite food is ${people[0].food}`);
console.log(`Hello, my name is ${people[0].name} and my favorite food is ${people[0].food}`);
console.log(`Hello, my name is ${people[0].name} and my favorite food is ${people[0].food}`);

// 'FOR' LOOP
for (let i = 0; i < people.length; i++) {
    // Alias a temporary variable for each iteration
    let person = people[i];
    // Print to the console
    console.log(`Hello, my name is ${person.name} and my favorite food is ${person.food}.`);
}
console.log("\'For\' Loop completed!");

// 'FOR-EACH' LOOP (an array method).
//  Cannot be stopped and must go through the entire array.
people.forEach(person => {
    console.log(`Hello, my name is ${person.name} and my favorite food is ${person.food}.`);
})
console.log("\'For-Each\' Loop completed!");

// 'FOR-IN' LOOP
people.forEach(person => {
    for (let key in me) {
        console.log(key +":", me[key]);
    }
    console.log("_____________");
})

// 'WHILE' loop
let i = 0;
while (i < people.length) {
    let person = people[i];
    console.log(`Hello, my name is ${person.name} and my favorite food is ${person.food}.`);
    i++;
}
console.log("\'While\' Loop completed!");

// 'DO-WHILE' loop
do {
    console.log("Do once")
} while (false);
console.log("\'Do-While\' Loop completed!");

// FILTER array method returns an array of items that meet the condition
let pastaLovers = people.filter(person => {
    let personVar = person;
    return person.food == "pasta"
})
console.log(pastaLovers);

// FIND array method returns the first element from the array that meets the condition
let foundPerson = people.find(person => {
    return (person.food.toLowerCase() == "pasta");
})
console.log(foundPerson);

// MAP array method iterates over the array and runs the function whatever is returned replaces each element
let justNames = people.map(person => person.name);

let nums = [1,2,3,4,5,6];
let doubleNums = nums.map(num => num*2);
console.log( doubleNums);
*/

let template = ""
people.forEach(person => {
   // debugger // Execution stops here, and is paused line by line for debugging
    template += `<li>${person.name} likes ${person.food}</li>`
    console.log(template);
})
document.getElementById('staff').innerHTML = template