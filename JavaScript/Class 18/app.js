console.log("Hello Students")

var rightNow = new Date();

console.log(rightNow)

// Change in String
var dateString = rightNow.toString();

console.log(dateString)

// Day Method

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var rightNow = new Date();
var theDay = rightNow.getDay();
var nameOfToday = dayNames[theDay];


console.log(nameOfToday)

// Month Method

var d = new Date();
var currentMonth = d.getMonth();

// Date Method
var dayOfMonth = d.getDate();

// Full Year Method
var currYr = d.getFullYear();

// Hours Method
var currentHrs = d.getHours();

// Minutes Method
var currMins = d.getMinutes();

// Seconds Methods
var currSecs = d.getSeconds()

// Miliseconds Method
var currMills = d.getMilliseconds();

// Time Methods
var millsSince = d.getTime();

// Specific Date and Time (Ramadan Example in Class)

var today = new Date();
var doomsday = new Date("June 30, 2035");
var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = msDoomsday - msToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);


// Specific Date and Time (concise code)
var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));


// Particular Date and Time

var d = new Date("July 21, 1983 13:25:00");


