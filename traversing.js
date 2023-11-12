// Given the <body> element as variable body,
// access the <main> node and log to the console.
console.log(document.body.firstElementChild)

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.getElementsByTagName('ul')
console.log(ul[0].parentElement.parentElement)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p')
console.log(p.previousElementSibling.lastElementChild)
