// стрелочная функция - Фильтрация массива.

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = () => n % 2 !== 0;

let filterArray = () => mixedArray.filter((n) => n % 2 !== 0);

console.log(filterArray(mixedArray, isEven));

