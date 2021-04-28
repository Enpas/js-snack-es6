const firstArr = ['A', 'B', 'C', 'D', 1, 2, 3];
const secondArr = [4, 5, 6, 'E', 'F'];

console.log(`Primo array: ${firstArr}`);
console.log(`Secondo array: ${secondArr}`);
console.log('------')

const randomNumberGen = () => Math.floor(Math.random() * 100) 

while (firstArr.length != secondArr.length) {
  if (firstArr.length < secondArr.length) {
    firstArr.push(randomNumberGen());
  } else {
    secondArr.push(randomNumberGen());
  }
}

console.log(`Primo array: ${firstArr}`);
console.log(`Secondo array: ${secondArr}`);