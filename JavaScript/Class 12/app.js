alert("Hello");

// Break

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

// Flag Variable Use

let numbers = [10, 20, 30, 40, 50];
let Flag = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 30) {
    Flag = true;
    break;
  }
}

if (Flag) {
  console.log("Number mil gaya!");
} else {
  console.log("Number nahi mila.");
}
