const data = require("./data.json");

const $1_4 = (data) => {
    return [...data].sort(
        (leading, trailing) => {
            if (leading.type !== trailing.type) {
                if (leading.type.includes("dog") && trailing.type.includes("cat")) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            if (leading.type.includes("cat")) {
                return trailing.age - leading.age;
            }
            else if (leading.type.includes("dog")) {
                return leading.age - trailing.age;
            }
        }
    );
};

console.log($1_4(data));
