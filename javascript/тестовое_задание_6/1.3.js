const data = require("./data.json");

const $1_3 = (data) => {
    return data.filter(
        (animal) => {
            if (animal.type.includes("cat") && animal.features.includes("black")) {
                return true;
            }
            else if (animal.type.includes("dog") && animal.features.includes("white")) {
                return true;
            }
            return false;
        }
    );
};

console.log($1_3(data));
