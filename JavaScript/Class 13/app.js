console.log("Saylani");


var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}

var firstChar = cityToCheck.slice(0, 1);

console.log(firstChar)

var someChars = cityToCheck.slice(2, 5);

console.log(someChars)

var someChars = cityToCheck.slice(2);

console.log(someChars)

var firstChar = cityToCheck.slice(0, 1);
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;

// Condition Match (If condition)

var month = prompt("Enter a month");
var charsInMonth = month.length;
if (charsInMonth > 3) {
    monthAbbrev = month.slice(0, 3);
}

// One more condition Matcch
var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        break;
    }
}
