const car = {
    color: 'blue',
    name: 'BMW',
    maxSpeed: 300,
    model: 'X5'
};
const car2 = {
    color: 'red',
    name: 'Audi',
    maxSpeed: 200,
    model: 'TT'
  };
  const car3 = {
    color: 'black',
    name: 'Mazda',
    maxSpeed: 156,
    model: 'RX-7'
    };
    const car4 = {
        color: 'blue',
        name: 'MyCar',
        maxSpeed: '220',
        model:'mustang'
    };
    const car5 = {
        color: 'white',
        name: 'audi',
        maxSpeed: '180',
        model:'A6'
    };
    const obj =[car, car2, car3, car4, car5];
console.log(obj);
const filtered = obj.filter(function(item){
    return +item.maxSpeed > 200;
});
console.log(filtered);