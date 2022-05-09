// обычная функция - Function Declaration

const path = "/users/download/index.html";

function isHtml() {
  let result = path.slice(-4).includes("html");
  return result;
}

console.log(isHtml(path));
