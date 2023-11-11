// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const main = document.querySelector('main')
const aTag = document.createElement('a')

aTag.setAttribute('id', 'cta')
aTag.textContent = "Buy Now!"
main.appendChild(aTag)

// Access (read) the data-color attribute of the <img>,
// log to the console

const dataAttr = document.querySelector('img')
console.log(dataAttr.dataset.color)


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const listItems = document.querySelectorAll("li")
listItems[2].classList.add("highlight")
console.log(listItems)

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

document.querySelector('p').remove()
