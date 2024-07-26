for (let i = 0; i < 5; i++) {
    console.log(i); // Prints numbers from 0 to 4
}


let arr = [1, 2, 3, 4, 5];
for (let num of arr) {
  console.log(num); // Prints numbers from 1 to 5
}


let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key); // Prints 'a', 'b', 'c'
}


let i = 0;
while (i < 5) {
  console.log(i); // Prints numbers from 0 to 4
  i++;
}


do {
  console.log(i); // Prints numbers from 0 to 4
  i++;
} while (i < 5);

