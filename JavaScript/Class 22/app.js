console.log("Hello")

// Attendance Checker

function checkAttendance(student) {
    var lastClass = [1122, 2233, 3344];
    if (lastClass.indexOf(student) !== -1) {
        return "Present"
    } else {
        return "Absent"
    }
}

console.log(checkAttendance(2233))

