const $2_2 = (data) => {
    return data.reduce(
        (data, element) => {
            if (Array.isArray(element)) {
                return data.concat($2_2(element));
            }
            else {
                return data.concat(element)
            }
        },
        []
    );
};

$2_2([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 79]]]]])
    .forEach(el => console.log(el));
