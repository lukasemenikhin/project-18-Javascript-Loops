// let total = 0;

// for (let i = 0; i <=2; i++) {
//     console.log(i);
//     total = total + i;
// }

// console.log("Total is: " + total);


let fruits = ['mango', 'banana', 'apple,'];
// console.log(fruits[0]);

for (let i = 0; i <= 2; i++) {
    console.log(fruits[i]);
}

let data = {
    name: "avto",
    age: 28,
    alive: true,
}

console.log(data.alive);

for(let elem in data){
    // console.log(elem);
}

for(let elem in data){
    console.log(elem, data[elem]);
}