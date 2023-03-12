
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(names, event) {
   const writeCardsDone = [];
    for (let j = 0; j < names.length; j++) {
        writeCardsDone[j] = `Thank you, ${names[j]}, for the wonderful ${event} gift!`;
    }
    return writeCardsDone;
}
// testing log
// console.log(writeCards(["pizza1", "pizza2", "pizza3"], "Pizza Party"));


function countDown(num) {
    for (let w = num; w >= 0; w--) {
    console.log(w);
    }
}
