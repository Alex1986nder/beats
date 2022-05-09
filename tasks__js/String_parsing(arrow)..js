// стрелочная функция

const path = "/users/download/index.html";


let isHtml = () => path.slice(-4)

.includes('html');

console.log (isHtml(path));

 


