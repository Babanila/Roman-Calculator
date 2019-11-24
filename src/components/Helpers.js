export const convertToRoman = (baseArray, item) => {
    if (item === 0) return " ";
    let result = "";
    for (let key in baseArray) {
        while (item >= baseArray[key]) {
            result += key;
            item -= baseArray[key];
        }
    }
    return result;
};

export const convertToNumber = (baseArray, element) => {
    let resultArray = [];
    for (let i = 0; i < element.length; i++) {
        if (baseArray[element[i]] < baseArray[element[i + 1]]) {
            resultArray.push(baseArray[element[i + 1]] - baseArray[element[i]]);
            i++;
            continue;
        } else {
            resultArray.push(baseArray[element[i]]);
        }
    }
    const result = resultArray.reduce((total, current) => total + current);
    return result;
};
