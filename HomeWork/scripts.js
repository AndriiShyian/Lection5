// task1
// const me = {
// years: 19,
// height: 196,
// weight: 98,
// favouriteFilm: 'Fast and Furious',
// sport1: 'football',
// sport2: 'voleyball',
// sport3: 'ping pong',
// color: 'aqua',
// name: 'Andrii',
// surname = 'Shyian',
// schoolFinished: 'school №15',
// favouriteSong: 'Eminem - "Rap God"',
// favouriteFootballTeam: 'Barcelona',
// universityIStudying: 'NULP',
// favouriteAnimal: 'dog',
// cityIAmLiving: 'Lviv',
// favouriteBook: '11/22/63',
// laptop: 'HP',
// eyeColor: 'green',
// programmingLanguages: 'Java, Java Script',
// }




// task2
// let array = [];
// for(let i = 0; i < 100; i++){
//   array.push(randomNumber(-100, 100));
// }
// for(let i = 0; i < array.length; i++){
//     array[i] = +array[i];
//     console.log(array[i]);
// }

// lessThanZero(array);
// moreThanZero(array);
// console.log(Math.max.apply(null,array));
// console.log(Math.min.apply(null, array));

// function randomNumber(from, to){
//     return (Math.random() * (to - from) + from).toFixed();
// }

// function lessThanZero(array){
// let newArray = array.filter(function(item){
// return item < 0;
// });
// console.log(newArray);
// }

// function moreThanZero(array){
//     let newArray = array.filter(function(item){
//         return item > 0;
//     });
//     console.log(newArray);
// }




// task3
// let array = [];
// for(let i = 0; i < 10; i++){
//   array.push(randomNumber(0, 10));
// }
// for(let i = 0; i < array.length; i++){
//     array[i] = +array[i];
// }
// console.log(Array.from(new Set(array)));

// function randomNumber(from, to){
//     return (Math.random() * (to - from) + from).toFixed();
// }