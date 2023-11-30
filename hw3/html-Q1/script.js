/*let input = +prompt("enter number");

function logger(num) {
  let result;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  console.log(result);
}
logger(input); */


let container = [];
let number = prompt("enter number");
while (+number !== 100) {
        container.push(number)
  number = prompt("enter number");
}
if(+number === 100){
    container.push(number)
    
}
console.log(container);
