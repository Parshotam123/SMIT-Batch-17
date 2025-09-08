
# Moment.js Basics (Using CDN)

Aaj ke class mein humne **Moment.js** library ke baare mein seekha.  
Ye ek JavaScript library hai jo **date aur time** ke sath kaam karne ko easy banati hai.

---

## Step 1: Moment.js kya hai?

- Moment.js ek library hai jo humein dates aur times ko:
  - Format karne
  - Compare karne
  - Convert karne
  - Aur manipulate karne mein madad karti hai.

---

## Step 2: Moment.js ko project mein add karna (CDN se)

Hum apne project mein Moment.js ko directly **CDN (Content Delivery Network)** ke through add kar sakte hain.  

HTML file ke `<head>` ya `<body>` ke andar ye link paste karen:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
```

---

## Step 3: Moment.js ko use karna (Examples)

### Example 1: Current Date aur Time show karna
```html
<script>
  console.log(moment().format());
</script>
```
Output (example):
```
2025-09-08T23:30:00+05:00
```

---

### Example 2: Sirf Date show karna
```html
<script>
  console.log(moment().format("YYYY-MM-DD"));
</script>
```
Output:
```
2025-09-08
```

---

### Example 3: Sirf Time show karna
```html
<script>
  console.log(moment().format("hh:mm:ss A"));
</script>
```
Output:
```
11:30:45 PM
```

---

### Example 4: Custom Format
```html
<script>
  console.log(moment().format("dddd, MMMM Do YYYY"));
</script>
```
Output:
```
Monday, September 8th 2025
```

---

## Step 4: Documentation

Aap aur zyada examples aur details ke liye official Moment.js documentation dekh sakte ho:  
👉 [https://momentjs.com/docs/](https://momentjs.com/docs/)

---

## Recap

1. Moment.js ek library hai date/time ke liye.  
2. CDN link se easily add kar sakte ho.  
3. `.format()` function se alag alag tarike se date/time ko show kar sakte ho.

---
