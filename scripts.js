
function randomNumber(from, to){
return (Math.random() * (to - from) + from).toFixed();
// const arraysLength = array.length - 1;
// return (Math.random() * arraysLength).toFixed();
}
console.log(randomNumber(10,20));
