const array = [2, 4, 6, 8, 9];
console.log(array[randomNumber(array)]);
function randomNumber(array){
const arraysLength = array.length - 1;
return (Math.random() * arraysLength).toFixed();
}