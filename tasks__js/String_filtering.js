// обычная функция - Function Expression

const string = "мой первый код";

let getVowels = function() {

  return string.replace(/[бвгджзйклмнпрстфхцчшщъь/\s/]/g, '')

}

console.log(getVowels(string));