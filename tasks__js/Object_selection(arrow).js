//стрелочная функция

const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1500 },
];

let getWorthyWorkers = () =>
  workers
  .filter(workers => workers.salary > 1000)

  .map(workers => workers.name);

console.log(getWorthyWorkers(workers));
