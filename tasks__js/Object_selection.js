//обычная функция (Function Expression)

const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1500 },
];

let getWorthyWorkers = function () {
  let result = workers

    .filter(function (workers) {
      return workers.salary > 1000;
    })

    .map(function (workers) {
      return workers.name;
    });
  return result;
};
console.log(getWorthyWorkers(workers));
