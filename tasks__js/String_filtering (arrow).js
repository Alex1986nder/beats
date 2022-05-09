// стрелочная функция

const string = "мой первый код";

let getVowels = () => string.replace(/[бвгджзйклмнпрстфхцчшщъь/\s/]/g, '')

console.log(getVowels(string));


