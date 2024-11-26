const data = require("./data.json");

const $1_2 = (data) => {
    return data.reduce(
        (count, animal) => {
            if (animal.type.includes("dog") && animal.breed) {
                return count + 1;
            }
            return count;
        },
        0
    );
};

console.log($1_2(data));
