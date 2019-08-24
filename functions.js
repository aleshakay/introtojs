console.log('FUNctions')

let firstName ='Michael'
let lastName = 'Jordan'

console.log(`${firstName} ${lastName}`)

firstName ='Jenny'
lastName = 'Bowles'

console.log(`${firstName} ${lastName}`)

const sayMyName =(first, last) => {
    return (`${first} ${last}`)
}
console.log(sayMyName('Nevaeh', 'Reed'))

//Nugget Time

const nuggetizer = (animal)=> {
    return `nugget ${animal}`;
}

const humaneNuggetizer = (animal)=> {
    return animal;
}

const spam = (anything)=> {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('snail'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('pig'));
console.log(humaneNuggetizer('snail'));

console.log(spam('chicken'));
console.log(spam('pig'));
console.log(spam('spam'));

//Print to DOM
const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint// something
}

//band excersise
let bandNumber = 1;

const takeNumber = (bandName)=> {
    printToDOM(`<h3>${bandNumber}. ${bandName}</h3> `);
    bandNumber++;
}

takeNumber('RollingStones')
takeNumber('Blues Brother')

