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

// Nested Loops

var firstNames = ["Adil ", "Rizwan ", "Sufiyan "];
var lastNames = ["Khan", "Choudry"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}

// Output
// Adil Khan
// Rizwan Khan
// Sufiyan Khan
// Adil Choudry
// Rizwan Choudry
// Sufiyan Choudry
