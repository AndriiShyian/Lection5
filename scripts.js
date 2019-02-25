const emptyArray = [];
for(let i = 0; i < 100; i++){
emptyArray[i] = +randomNumber(0, 100);
}

function randomNumber(from, to){
return (Math.random() * (to - from) + from).toFixed();
}
const massive = emptyArray.filter(function(item){
return item % 2 ===0;
});

const massiveMap = emptyArray.map(function(item){
    return item * item;
    });

console.log(emptyArray);
console.log(massive);
console.log(massiveMap);
