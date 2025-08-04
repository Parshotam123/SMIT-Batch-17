#### Logical operators: &&, ||, !:

Logical operators are used to combine multiple conditions in JavaScript. JavaScript supports various logical operators, including the AND (&&) operator, OR (||) operator, and NOT (!) operator.

```js
// AND operator
var x = 5
var y = 10
if (x < 10 && y > 5) {
  console.log("Both conditions are true")
}

// OR operator
var z = 3
if (z < 5 || z > 10) {
  console.log("At least one condition is true")
}

// NOT operator
var a = true
if (!a) {
  console.log("a is not true")
}
```