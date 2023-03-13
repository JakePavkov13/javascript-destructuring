const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// const a = alphabet[0]

// const [a,,c, ...rest] = alphabet  // pulls a skips b pulls c and then spread operator gets rest

const newArray = [...alphabet, ...numbers]
const newArray2 = alphabet.concat(numbers)  // both newArrays do same thing. puts everything into an array alphabet first first, then numbers

function sumAndMultiply(a, b){
    return [a+b, a*b]
}

const array = sumAndMultiply(2,3)

// const [sum, multiply] = sumAndMultiply( 2, 3 ) //Both do the same thing but 2nd const is destructured and more workable

const [sum, multiply, division = 'No division'] = sumAndMultiply( 2, 3 )


// destructuring and objects
const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'Beans',
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}


// const { name: firstName = 'John', age, favoriteFood = 'Rice', ...rest } = personTwo  // personTwo has a firstName so it will be Sally not John. they do not have a favorite food so it will default to Rice rest will then pull out the address

const {name: firstName, address: { city, street } } = personTwo


// saying take everything from person one and throw it in an object. then take person 2 and throw it in the same object and overwrite anything that was already there
const personThree = { ...personOne, ...personTwo}      

console.log(firstName)
console.log(city)
console.log(street)  // street is undefined but sows the destructuring of multiple things in an object within an object
console.log(personThree) // everything from person one got over ridden except favoriteFood. useful for combining objects


function printUser({ name, age }) {
    console.log(`Name is: ${name}. Age is ${age}`)
}
printUser(personOne)