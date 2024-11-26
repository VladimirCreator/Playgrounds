const data = require("./data.json");

const $1_1 = (data) => {
    const stdout = {
        cat: 0,
        dog: 0,
        age: 0
    };
    for (const animal of data) {
        stdout[animal.type] += 1;
        stdout.age += animal.age
    }
    return {
        cats: stdout.cat,
        dogs: stdout.dog,
        avage: stdout.age / data.length
    };
};

console.log($1_1(data));
