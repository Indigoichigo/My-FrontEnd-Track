const person = {
    name: 'John',
    age: 25,
    location: {
        city: 'Taipei',
        temp: 20
    }
};

const {name, age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${person.name} is ${person.age}`);


const {temp: temperature, city} = person.location
console.log(`It's ${temperature}c in ${city}`);

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}
const {name: publisherName = 'self-Published'} = book.publisher;

console.log(publisherName);