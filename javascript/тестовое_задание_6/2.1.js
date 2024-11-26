const $2_1 = (number, power) => {
    let final_number = number;

    for (let i = 1; i < power; ++i) {
        final_number *= number;
    }
    return final_number;
};

console.log($2_1(2, 5));
